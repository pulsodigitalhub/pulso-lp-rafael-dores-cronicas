const SPREADSHEET_ID = '1eUkY_tBxK6tApyWfjRFw3RSRSS3NAQl-r1iqM9gy18s'
const SHEET_NAME = 'WHATSAPP'
const DEFAULT_UNIT = 'Albany Medical Center'
const DEFAULT_REASON = 'Consulta ortopédica'

function appendLead(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)

  if (!sheet) {
    throw new Error('Sheet not found')
  }

  const createdAt = parseCreatedAt(data.created_at)
  const leadName = sanitizeText(data.name)
  const leadPhone = normalizePhone(data.phone)
  const notes = buildNotes(leadName, sanitizeText(data.notes))
  const whatsappLink = buildWhatsappLink(leadPhone)

  const row = [
    sanitizeText(data.status),
    sanitizeText(data.unit) || DEFAULT_UNIT,
    leadPhone,
    formatDate(createdAt),
    formatTime(createdAt),
    sanitizeText(data.reason) || DEFAULT_REASON,
    sanitizeText(data.value),
    notes,
    sanitizeText(data.page_url),
    whatsappLink,
    sanitizeText(data.utm_source) || sanitizeText(data.source),
    sanitizeText(data.utm_medium),
    sanitizeText(data.utm_campaign),
    sanitizeText(data.id) || Utilities.getUuid(),
  ]

  sheet.appendRow(row)
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(10000)

  try {
    const data = e && e.parameter ? e.parameter : {}
    appendLead(data)
    return jsonResponse({ ok: true })
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) }, 500)
  } finally {
    lock.releaseLock()
  }
}

function doGet(e) {
  const data = e && e.parameter ? e.parameter : {}
  const hasLeadPayload = Boolean(data.name || data.phone || data.source)

  if (!hasLeadPayload) {
    return jsonResponse({ ok: true, service: 'lead-capture' })
  }

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)

  try {
    appendLead(data)
    return jsonResponse({ ok: true, captured_via: 'get' })
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) }, 500)
  } finally {
    lock.releaseLock()
  }
}

function buildNotes(name, notes) {
  const parts = []

  if (name) {
    parts.push('Nome: ' + name)
  }

  if (notes) {
    parts.push('Observação: ' + notes)
  }

  return parts.join(' | ')
}

function buildWhatsappLink(phone) {
  if (!phone) {
    return ''
  }

  return 'https://wa.me/55' + phone
}

function formatDate(date) {
  return Utilities.formatDate(date, 'America/Sao_Paulo', 'dd/MM/yyyy')
}

function formatTime(date) {
  return Utilities.formatDate(date, 'America/Sao_Paulo', 'HH:mm:ss')
}

function parseCreatedAt(createdAt) {
  if (!createdAt) {
    return new Date()
  }

  const parsedDate = new Date(createdAt)

  if (isNaN(parsedDate.getTime())) {
    return new Date()
  }

  return parsedDate
}

function normalizePhone(phone) {
  return String(phone || '').replace(/\D/g, '').slice(0, 11)
}

function sanitizeText(value) {
  return String(value || '').trim()
}

function jsonResponse(payload, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
  output.setMimeType(ContentService.MimeType.JSON)
  return output
}
