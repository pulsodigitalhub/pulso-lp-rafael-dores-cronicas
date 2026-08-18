import { useEffect, useState } from 'react'
import './App.css'
import { REGION, DOCTOR } from './region.jsx'
import { ConveniosAtendidos } from '../../../src/convenios.jsx'
import {
  WhatsAppIcon, StarIcon, ChevronDownIcon, MapPinIcon, ClockIcon, CheckIcon, AlertIcon,
  ShieldIcon, UserIcon, ScalpelIcon,
  SyringeIcon, UltrasoundIcon, EvaluationIcon,
} from './icons.jsx'

// Paleta extraída da logo
const COLOR_BG = '#f7faf9'
const COLOR_BG_ALT = '#eef3f5'
const COLOR_WHITE = '#ffffff'
const COLOR_NAVY = '#1f3540'
const COLOR_NAVY_DK = '#15252d'
const COLOR_NAVY_DEEP = '#0f1c23'
const COLOR_MINT = '#b8dde0'
const COLOR_TEAL = '#5b8a98'
const COLOR_TEAL_DEEP = '#2e5c6d'
const COLOR_BORDER = '#d8e3e7'
const COLOR_TEXT = '#1f3540'
const COLOR_MUTED = '#5c6f78'
const COLOR_GREEN = '#1f9b6a'
const COLOR_ALERT = '#c48631'

const m = DOCTOR

function openLeadModal(event) {
  event?.preventDefault()
  window.dispatchEvent(new CustomEvent('openLeadModal'))
}

// ── Botão WhatsApp ───────────────────────────────────────────────────────────
function BtnWA({ children, className = '', size = 'md', onClick = openLeadModal }) {
  const pad = size === 'lg' ? 'px-8 py-4 text-base' : 'px-5 py-2.5 text-sm'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg ${pad} ${className}`}
      style={{ backgroundColor: COLOR_GREEN }}
    >
      <WhatsAppIcon />
      {children}
    </button>
  )
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-[0.18em]"
      style={{ color: light ? COLOR_MINT : COLOR_TEAL_DEEP }}
    >
      {children}
    </span>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────
function Header({ onConveniosClick }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#convenios', label: 'Convênios', onClick: onConveniosClick },
    { href: '#sintomas', label: 'Sintomas' },
    { href: '#causas', label: 'Causas' },
    { href: '#procedimentos', label: 'Procedimentos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderBottom: `1px solid ${COLOR_BORDER}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <img src="./img/navbar-logo.png" alt={m.doctorName} className="h-20 w-auto object-contain lg:h-44" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-medium transition-colors"
                style={{ color: COLOR_MUTED }}
                onClick={l.onClick}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLOR_TEAL_DEEP)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLOR_MUTED)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <BtnWA>Agendar Avaliação</BtnWA>
          </div>
          <button
            className="lg:hidden p-2"
            style={{ color: COLOR_MUTED }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden py-4 space-y-3" style={{ borderTop: `1px solid ${COLOR_BORDER}` }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="block font-medium py-1"
                style={{ color: COLOR_MUTED }}
                onClick={(event) => {
                  l.onClick?.(event)
                  setOpen(false)
                }}
              >
                {l.label}
              </a>
            ))}
            <BtnWA className="w-full justify-center mt-4">Agendar Avaliação</BtnWA>
          </div>
        )}
      </div>
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onConveniosClick }) {
  const heroHighlights = [
    { text: 'Aceitamos convênios', icon: ShieldIcon },
    { text: 'Avaliação personalizada', icon: UserIcon },
    { text: 'Infiltração guiada por US', icon: SyringeIcon },
    { text: REGION.hero.highlightFocus, icon: REGION.hero.focusIcon },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: COLOR_NAVY_DEEP }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${REGION.bgSvg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.55,
        }}
      />

      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `linear-gradient(to right, ${COLOR_NAVY_DEEP} 0%, ${COLOR_NAVY_DK} 38%, rgba(31,53,64,0.78) 62%, rgba(91,138,152,0.18) 88%, rgba(184,221,224,0.10) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(15,28,35,0.88) 0%, rgba(31,53,64,0.62) 50%, rgba(46,92,109,0.20) 100%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="order-1 lg:order-1 pt-12 lg:pt-24 pb-12 lg:pb-24">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Ortopedista para<br />
              <span style={{ color: COLOR_MINT }}>{REGION.name}</span>{' '}
              em <span style={{ color: COLOR_MINT }}>Brasília</span>
            </h1>
            <p className="text-lg mb-4 leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.78)' }}>
              {REGION.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {heroHighlights.map(({ text, icon: Icon }) => {
                const isConveniosHighlight = text.toLowerCase().includes('convênios')
                const highlightClasses = 'flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border transition-colors'
                const highlightStyle = {
                  color: COLOR_MINT,
                  backgroundColor: 'rgba(184,221,224,0.08)',
                  borderColor: 'rgba(184,221,224,0.22)',
                }

                if (isConveniosHighlight && onConveniosClick) {
                  return (
                    <a
                      key={text}
                      href="#convenios"
                      onClick={onConveniosClick}
                      className={`${highlightClasses} hover:bg-white/10`}
                      style={highlightStyle}
                    >
                      <Icon className="w-5 h-5" />
                      {text}
                    </a>
                  )
                }

                return (
                  <span key={text} className={highlightClasses} style={highlightStyle}>
                    <Icon className="w-5 h-5" />
                    {text}
                  </span>
                )
              })}
            </div>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <BtnWA size="lg" className="justify-center">
                Agendar Avaliação
              </BtnWA>
              <a
                href="#convenios"
                onClick={onConveniosClick}
                aria-controls="convenios-list"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-gray-100"
                style={{ color: COLOR_NAVY_DEEP }}
              >
                <ShieldIcon />
                Ver lista de convênios
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-white font-semibold">{m.googleRating}</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Doctoralia</span>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center lg:justify-end self-end">
            <div className="relative flex items-end">
              <div
                className="absolute inset-0 rounded-3xl opacity-25"
                style={{ background: `radial-gradient(ellipse at center, ${COLOR_MINT} 0%, transparent 70%)` }}
              />
              <img
                src={m.doctorPhoto}
                alt={m.doctorName}
                className="relative z-10 max-h-[600px] lg:max-h-[700px] xl:max-h-[780px] w-auto object-contain object-bottom"
              />
              <div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 lg:bottom-20 z-10 px-6 py-4 lg:px-7 lg:py-5 rounded-xl"
                style={{
                  backgroundColor: COLOR_WHITE,
                  border: `1px solid ${COLOR_BORDER}`,
                  boxShadow: '0 20px 44px rgba(2, 18, 27, 0.32), 0 6px 16px rgba(46, 92, 109, 0.18)',
                }}
              >
                <p className="font-bold text-xl lg:text-3xl" style={{ color: COLOR_NAVY }}>{m.doctorName}</p>
                <p className="font-semibold text-sm lg:text-base mt-0.5 whitespace-nowrap" style={{ color: COLOR_TEAL_DEEP }}>{m.specialty}</p>
                <p className="text-xs lg:text-sm mt-0.5" style={{ color: COLOR_MUTED }}>{m.crm} · {m.rqe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={openLeadModal}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-center gap-2 text-white font-semibold py-4 text-base shadow-xl"
        style={{ backgroundColor: COLOR_GREEN }}
      >
        <WhatsAppIcon className="w-6 h-6" />
        Agendar Avaliação
      </button>
    </section>
  )
}

// ── Stats ────────────────────────────────────────────────────────────────────
function Stats({ onConveniosClick }) {
  const stats = [
    { value: '+45', label: 'Convênios Atendidos' },
    { value: `+${m.stats.procedures}`, label: 'Procedimentos Realizados' },
    { value: `+${m.stats.surgeries}`, label: 'Cirurgias' },
    { value: `+${m.stats.patients}`, label: 'Pacientes Atendidos' },
  ]
  return (
    <section style={{ backgroundColor: COLOR_NAVY }} className="relative z-10 -mt-6 lg:-mt-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, index) => {
            const isConveniosItem = s.label.toLowerCase().includes('convênios')
            const content = (
              <>
                <p className="text-3xl lg:text-4xl font-bold" style={{ color: COLOR_MINT }}>{s.value}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</p>
              </>
            )
            const itemClasses = `text-center min-h-28 flex flex-col items-center justify-center px-4 py-4 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''} lg:border-b-0 ${index < stats.length - 1 ? 'lg:border-r' : 'lg:border-r-0'}`
            const itemStyle = { borderColor: 'rgba(184,221,224,0.18)' }

            if (isConveniosItem && onConveniosClick) {
              return (
                <a
                  key={s.label}
                  href="#convenios"
                  onClick={onConveniosClick}
                  className={`${itemClasses} transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset`}
                  style={{ ...itemStyle, '--tw-ring-color': COLOR_MINT }}
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={s.label} className={itemClasses} style={itemStyle}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Lead Form ────────────────────────────────────────────────────────────────
function LeadForm({ className = '' }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  function handlePhoneChange(event) {
    const normalizedPhone = event.target.value.replace(/\D/g, '').slice(0, 11)
    setPhone(normalizedPhone)
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.dataLayer = window.dataLayer || []
    const currentUrl = new URL(window.location.href)
    window.dataLayer.push({
      event: 'lead_submit',
      lead_name: name,
      lead_phone: phone,
      lead_source: `hero_form_${REGION.slug}`,
      page_location: currentUrl.toString(),
    })
    // Sem PII (nome/telefone) na URL da thank-you: ela só dispara conversão,
    // dado pessoal já foi capturado no webhook abaixo. UTMs não vão soltos
    // porque já estão embutidos em page_url.
    const thankYouUrl = new URL(`${import.meta.env.BASE_URL}obg-wpp/index.html`, window.location.origin)
    thankYouUrl.searchParams.set('source', `hero_form_${REGION.slug}`)
    thankYouUrl.searchParams.set('page_url', currentUrl.toString())

    // Captura do lead no submit: lê os parâmetros coletados pelo GTM (window.getTracking)
    // e envia ao webhook. keepalive garante que o POST sobreviva ao redirect abaixo.
    const tracking = typeof window.getTracking === 'function' ? window.getTracking() : {}
    fetch('https://leads-clientes.sergioshouse.com.br/rafael', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify(Object.assign({
        nome: name,
        whatsapp: phone,
        origem: `hero_form_${REGION.slug}`,
        pagina: currentUrl.toString(),
      }, tracking)),
    }).catch(() => {})

    window.location.href = thankYouUrl.toString()
  }

  return (
    <form
      id="agendamento"
      onSubmit={handleSubmit}
      className={`rounded-2xl p-4 backdrop-blur-sm ${className}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(184,221,224,0.22)',
      }}
    >
      <p className="text-white font-semibold mb-3">{REGION.formMsg}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="sr-only" htmlFor="lead-name">Nome</label>
        <input
          id="lead-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          className="min-h-12 rounded-lg bg-white px-4 outline-none focus:ring-2"
          style={{ color: COLOR_NAVY, border: `1px solid ${COLOR_BORDER}` }}
        />
        <label className="sr-only" htmlFor="lead-phone">Telefone</label>
        <input
          id="lead-phone"
          required
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Seu telefone"
          inputMode="tel"
          maxLength={11}
          className="min-h-12 rounded-lg bg-white px-4 outline-none focus:ring-2"
          style={{ color: COLOR_NAVY, border: `1px solid ${COLOR_BORDER}` }}
        />
      </div>
      <button
        type="submit"
        className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
        style={{ backgroundColor: COLOR_GREEN }}
      >
        <WhatsAppIcon />
        Falar com a equipe pelo WhatsApp
      </button>
      <p className="mt-2 text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
        Seus dados são usados apenas para entrar em contato. Não enviamos spam.
      </p>
    </form>
  )
}

function LeadModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-5 shadow-2xl"
        style={{ backgroundColor: COLOR_NAVY_DEEP, border: '1px solid rgba(184,221,224,0.22)' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
          aria-label="Fechar formulário"
        >
          ×
        </button>
        <p id="lead-modal-title" className="pr-10 text-xl font-bold text-white">
          Agendar avaliação
        </p>
        <p className="mt-1 pr-10 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
          Preencha seus dados para iniciar o atendimento pelo WhatsApp.
        </p>
        <LeadForm className="mt-4" />
      </div>
    </div>
  )
}

function LightCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl p-6 transition-shadow hover:shadow-md ${className}`}
      style={{ backgroundColor: COLOR_WHITE, border: `1px solid ${COLOR_BORDER}` }}
    >
      {children}
    </div>
  )
}

function IconChip({ children }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
      style={{ backgroundColor: 'rgba(184,221,224,0.32)', color: COLOR_TEAL_DEEP }}
    >
      {children}
    </div>
  )
}

// ── Sintomas ─────────────────────────────────────────────────────────────────
function Sintomas() {
  return (
    <section id="sintomas" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Sintomas</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            {REGION.sintomas.h2}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: COLOR_MUTED }}>
            {REGION.sintomas.subhead}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGION.sintomas.items.map(({ title, desc, icon: Icon }) => (
            <LightCard key={title}>
              <IconChip><Icon /></IconChip>
              <h3 className="text-base font-bold mb-2" style={{ color: COLOR_NAVY }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>{desc}</p>
            </LightCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA size="lg">{REGION.sintomas.btnText}</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── Causas ───────────────────────────────────────────────────────────────────
function Causas() {
  return (
    <section id="causas" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG_ALT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Possíveis Causas</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            {REGION.causas.h2}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: COLOR_MUTED }}>
            {REGION.causas.subhead}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGION.causas.items.map(({ title, desc, icon: Icon }) => (
            <LightCard key={title}>
              <IconChip><Icon /></IconChip>
              <h3 className="text-lg font-bold mb-2" style={{ color: COLOR_NAVY }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>{desc}</p>
            </LightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Quando procurar ──────────────────────────────────────────────────────────
function QuandoProcurar() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{
            backgroundColor: COLOR_WHITE,
            border: `1px solid ${COLOR_BORDER}`,
            boxShadow: '0 24px 56px rgba(31,53,64,0.12), 0 8px 20px rgba(31,53,64,0.06)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(196,134,49,0.12)', color: COLOR_ALERT }}
            >
              <AlertIcon />
            </div>
            <div>
              <Eyebrow>Quando Procurar</Eyebrow>
              <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: COLOR_NAVY }}>
                Quando procurar um ortopedista
              </h2>
            </div>
          </div>
          <p className="mb-6 leading-relaxed" style={{ color: COLOR_MUTED }}>
            {REGION.quando.intro}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {REGION.quando.signs.map(s => (
              <li key={s} className="flex items-start gap-3" style={{ color: COLOR_TEXT }}>
                <span
                  className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLOR_GREEN }}
                >
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <div className="text-center sm:text-left">
            <BtnWA size="lg">Falar com a equipe agora</BtnWA>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Procedimentos ────────────────────────────────────────────────────────────
function Procedimentos() {
  return (
    <section id="procedimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG_ALT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Tratamentos</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            {REGION.procedimentos.h2}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: COLOR_MUTED }}>
            {REGION.procedimentos.subhead}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGION.procedimentos.items.map(({ title, desc, icon: Icon }) => (
            <LightCard key={title}>
              <IconChip><Icon /></IconChip>
              <h3 className="text-lg font-bold mb-2" style={{ color: COLOR_NAVY }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>{desc}</p>
            </LightCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA size="lg">Agendar avaliação</BtnWA>
        </div>
        <p className="text-center text-xs mt-4 max-w-xl mx-auto" style={{ color: COLOR_MUTED }}>
          Os procedimentos só são indicados após avaliação médica. Resultados variam conforme o caso clínico e não há garantia de cura ou de alívio total da dor.
        </p>
      </div>
    </section>
  )
}

// ── Doctoralia Band ──────────────────────────────────────────────────────────
function DoctoraliaBand() {
  return (
    <section className="py-10" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl p-6 text-center"
          style={{ backgroundColor: COLOR_NAVY, color: COLOR_WHITE }}
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold" style={{ color: COLOR_MINT }}>{m.googleRating}</div>
            <div>
              <div className="flex gap-0.5 justify-center sm:justify-start">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.78)' }}>Nota no Doctoralia</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12" style={{ backgroundColor: 'rgba(184,221,224,0.25)' }} />
          <p className="text-lg font-semibold">Pacientes recomendam o atendimento do {m.doctorName}</p>
        </div>
      </div>
    </section>
  )
}

// ── Sobre ────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6" style={{ color: COLOR_NAVY }}>
              Ortopedia, Traumatologia e Medicina da Dor
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLOR_MUTED }}>
              <p>
                O {m.doctorName} é médico formado pela Universidade Federal de Goiás (UFG), com Residência em Ortopedia e Traumatologia pelo Hospital das Clínicas da UFG e Fellowship em Medicina da Dor pela UFG (2023-2025).
              </p>
              <p>
                Membro fundador da Associação Goiana dos Médicos de Dor (SOBRAMID Goiás), atua na {m.clinicName}, em Águas Claras, liderando a frente de Ortopedia, Traumatologia e Medicina da Dor com procedimentos minimamente invasivos guiados por ultrassom.
              </p>
              <p>
                Cada paciente recebe um plano de tratamento individualizado, integrando diagnóstico ortopédico e traumatológico com as mais modernas técnicas de controle da dor, muitas vezes evitando cirurgias.
              </p>
              <p>
                Com mais de 3.000 procedimentos realizados e 5.000 pacientes atendidos, a missão é devolver qualidade de vida e movimento, utilizando sempre as melhores evidências científicas disponíveis.
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: COLOR_WHITE, border: `1px solid ${COLOR_BORDER}`, boxShadow: '0 16px 40px rgba(31,53,64,0.06)' }}
          >
            <div className="rounded-xl aspect-[4/3] overflow-hidden mb-6">
              <img src="./img/foto-mesa.jpg" alt={m.doctorName} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold" style={{ color: COLOR_NAVY }}>{m.doctorName}</h3>
              <p className="font-medium" style={{ color: COLOR_TEAL_DEEP }}>{m.specialty}</p>
              <p className="text-sm mt-1" style={{ color: COLOR_MUTED }}>{m.crm} | {m.rqe}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Como funciona ────────────────────────────────────────────────────────────
function ComoFunciona() {
  const steps = [
    { n: '1', title: 'Avaliação inicial detalhada', desc: REGION.comoFunciona.step1 },
    { n: '2', title: 'Diagnóstico e plano de tratamento', desc: 'Discussão do diagnóstico em linguagem clara, com explicação de causas, opções de tratamento e expectativas realistas.' },
    { n: '3', title: 'Tratamento individualizado', desc: 'Conduta conservadora (reabilitação, medicação), procedimentos minimamente invasivos guiados por ultrassom ou indicação cirúrgica quando necessário.' },
  ]
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('./img/foto-atendimento.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, rgba(2,18,27,0.90) 0%, rgba(15,57,76,0.86) 100%)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow light>Atendimento</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-white">Como funciona a consulta</h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Um processo claro, do primeiro contato à definição do tratamento, sem promessas precipitadas e sempre baseado em evidências.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <LightCard key={s.n}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-lg"
                style={{ backgroundColor: COLOR_TEAL_DEEP, color: COLOR_WHITE }}
              >
                {s.n}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: COLOR_NAVY }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>{s.desc}</p>
            </LightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Diferenciais ─────────────────────────────────────────────────────────────
function Diferenciais({ onConveniosClick }) {
  const items = [
    { icon: UserIcon, title: '+5.000 pacientes atendidos', desc: 'Experiência consolidada em ortopedia, traumatologia e medicina da dor.' },
    { icon: ScalpelIcon, title: '+500 cirurgias realizadas', desc: 'Indicação criteriosa, sempre individualizada para cada caso clínico.' },
    { icon: StarIcon, title: 'Nota 5.0 no Doctoralia', desc: 'Avaliações verificadas de pacientes reais sobre o atendimento.' },
    { icon: UltrasoundIcon, title: 'Procedimentos guiados por ultrassom', desc: 'Mais precisão e segurança em infiltrações e bloqueios articulares.' },
    { icon: MapPinIcon, title: 'Atendimento em Águas Claras', desc: 'Albany Medical Center, fácil acesso em Brasília-DF.' },
    { icon: ShieldIcon, title: '+45 convênios atendidos', desc: 'Verifique pelo WhatsApp se o seu plano é coberto.' },
  ]
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Diferenciais</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            {REGION.diferenciaisH2}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => {
            const isConveniosItem = title.toLowerCase().includes('convênios')
            const content = (
              <>
                <IconChip><Icon className="w-6 h-6" /></IconChip>
                <h3 className="text-base font-bold mb-2" style={{ color: COLOR_NAVY }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>{desc}</p>
              </>
            )

            if (isConveniosItem && onConveniosClick) {
              return (
                <a
                  key={title}
                  href="#convenios"
                  onClick={onConveniosClick}
                  className="block rounded-2xl p-6 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: COLOR_WHITE, border: `1px solid ${COLOR_BORDER}`, outlineColor: COLOR_TEAL_DEEP }}
                >
                  {content}
                </a>
              )
            }

            return (
              <LightCard key={title}>
                {content}
              </LightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Galeria ──────────────────────────────────────────────────────────────────
function GaleriaClinica() {
  const photos = [
    { src: './img/foto-exame1.jpeg', alt: REGION.galeria.alt1 },
    { src: './img/foto-exame2.jpg', alt: REGION.galeria.alt2 },
    { src: './img/IMG_1990.jpg', alt: 'Atendimento ao paciente' },
  ]
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Estrutura</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            Onde acontece o atendimento
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: COLOR_MUTED }}>
            Consultório em Águas Claras, com infraestrutura para avaliação clínica e procedimentos guiados por ultrassom.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {photos.map(photo => (
            <div
              key={photo.alt}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${COLOR_BORDER}`, backgroundColor: COLOR_WHITE }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Depoimentos ──────────────────────────────────────────────────────────────
function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            O que pacientes relatam sobre o atendimento
          </h2>
          <p className="mt-3 text-sm" style={{ color: COLOR_MUTED }}>
            Avaliações verificadas no Doctoralia · Nota {m.googleRating}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REGION.depoimentos.map(t => (
            <LightCard key={t.name}>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="mb-4 italic leading-relaxed" style={{ color: COLOR_TEXT }}>
                "{t.text}"
              </p>
              <div className="font-semibold" style={{ color: COLOR_NAVY }}>{t.name}</div>
              <div className="text-sm" style={{ color: COLOR_MUTED }}>Paciente verificado · Doctoralia</div>
            </LightCard>
          ))}
        </div>
        <p className="text-center text-xs mt-6 max-w-xl mx-auto" style={{ color: COLOR_MUTED }}>
          Depoimentos representam experiências individuais. Resultados podem variar de acordo com cada caso clínico.
        </p>
      </div>
    </section>
  )
}

// ── Localização ──────────────────────────────────────────────────────────────
function Localizacao() {
  return (
    <section id="localizacao" className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('./img/predios-brasilia.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, rgba(2,18,27,0.88) 0%, rgba(15,57,76,0.82) 100%)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow light>Onde Estamos</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-white">
              Atendimento em Águas Claras, Brasília-DF
            </h2>
            <div className="space-y-4 mb-8" style={{ color: 'rgba(255,255,255,0.78)' }}>
              <div className="flex items-start gap-3">
                <MapPinIcon />
                <div>
                  <p className="font-semibold text-white">Albany Medical Center</p>
                  <p>{m.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon />
                <span>{m.hours}</span>
              </div>
            </div>
            <BtnWA size="lg">Solicitar contato</BtnWA>
          </div>
          <div
            className="rounded-2xl overflow-hidden aspect-video"
            style={{ border: `1px solid ${COLOR_BORDER}` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0247!3d-15.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b0a1b2c3d4e%3A0x0!2zUnVhIDUgTm9ydGUsIExvdGUgMyAtIMOBZ3VhcyBDbGFyYXM!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: COLOR_NAVY }}>
            {REGION.faq.h2}
          </h2>
        </div>
        <div className="space-y-3">
          {REGION.faq.items.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: COLOR_WHITE, border: `1px solid ${COLOR_BORDER}` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                style={{ color: COLOR_NAVY }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLOR_BG_ALT)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <span
                  className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  style={{ color: COLOR_TEAL }}
                >
                  <ChevronDownIcon />
                </span>
              </button>
              {open === i && (
                <div
                  className="px-5 pb-5 leading-relaxed pt-4"
                  style={{ color: COLOR_MUTED, borderTop: `1px solid ${COLOR_BORDER}` }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="mb-4" style={{ color: COLOR_MUTED }}>{REGION.faq.bottomMsg}</p>
          <BtnWA>Tirar dúvidas pelo WhatsApp</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── CTA Final ────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="py-12" style={{ backgroundColor: COLOR_BG_ALT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl p-8"
          style={{ backgroundColor: COLOR_NAVY, color: COLOR_WHITE }}
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold" style={{ color: COLOR_MINT }}>{m.googleRating}</div>
            <div>
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.78)' }}>Nota no Doctoralia</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12" style={{ backgroundColor: 'rgba(184,221,224,0.25)' }} />
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">{REGION.cta.msg}</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
              {REGION.cta.sub}
            </p>
          </div>
          <button
            type="button"
            onClick={openLeadModal}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            style={{ backgroundColor: COLOR_GREEN }}
          >
            <WhatsAppIcon />
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 pb-4" style={{ backgroundColor: COLOR_WHITE, borderTop: `1px solid ${COLOR_BORDER}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={m.symbol} alt="" className="h-8 w-8 object-contain rounded" />
              <span className="font-bold text-lg" style={{ color: COLOR_NAVY }}>{m.doctorName}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLOR_MUTED }}>
              {REGION.footerDesc}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_NAVY }}>Endereço</h4>
            <div className="space-y-2 text-sm" style={{ color: COLOR_MUTED }}>
              <p>{m.address}</p>
              <p>{m.hours}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_NAVY }}>Links</h4>
            <div className="space-y-2">
              {['#sintomas', '#causas', '#procedimentos', '#sobre', '#faq'].map(href => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm transition-colors capitalize"
                  style={{ color: COLOR_MUTED }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLOR_TEAL_DEEP)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLOR_MUTED)}
                >
                  {href.replace('#', '')}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${COLOR_BORDER}` }}
        >
          <p className="text-xs" style={{ color: COLOR_MUTED }}>
            © {new Date().getFullYear()} {m.doctorName} · {m.crm} · Ortopedista e Traumatologista
          </p>
          <p className="text-xs" style={{ color: COLOR_MUTED }}>
            Desenvolvido por <span className="font-medium">Pulso Marketing Médico</span>
          </p>
        </div>
        <p className="text-xs text-center mt-4 max-w-3xl mx-auto leading-relaxed" style={{ color: COLOR_MUTED }}>
          Este conteúdo tem caráter informativo e não substitui consulta médica presencial. Não há garantia de resultado, e as condutas só são definidas após avaliação individualizada, conforme orientação do CFM e do Manual de Publicidade Médica.
        </p>
        <p className="text-[10px] text-center mt-3 max-w-3xl mx-auto" style={{ color: COLOR_MUTED, opacity: 0.7 }}>
          Imagem de Águas Claras: Joel Rodrigues / Agência Brasília · <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY 2.0</a>
        </p>
      </div>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false)

  function scrollToConveniosSection() {
    window.setTimeout(() => {
      const conveniosSection = document.getElementById('convenios')
      if (!conveniosSection) return

      window.history.pushState(null, '', '#convenios')
      conveniosSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  function handleOpenConvenios(event) {
    event?.preventDefault()
    scrollToConveniosSection()
  }

  useEffect(() => {
    const handleOpenLeadModal = () => setLeadModalOpen(true)
    window.addEventListener('openLeadModal', handleOpenLeadModal)

    return () => window.removeEventListener('openLeadModal', handleOpenLeadModal)
  }, [])

  useEffect(() => {
    if (['#convenios', '#convenios-list'].includes(window.location.hash)) {
      scrollToConveniosSection()
    }
  }, [])

  return (
    <>
      <Header onConveniosClick={handleOpenConvenios} />
      <main>
        <Hero onConveniosClick={handleOpenConvenios} />
        <Stats onConveniosClick={handleOpenConvenios} />
        <ConveniosAtendidos
          CtaButton={BtnWA}
          ShieldIcon={ShieldIcon}
          CheckIcon={CheckIcon}
          palette={{
            section: COLOR_NAVY_DK,
            card: COLOR_NAVY_DEEP,
            accent: COLOR_MINT,
            iconBackground: 'rgba(184,221,224,0.14)',
          }}
        />
        <Sintomas />
        <Causas />
        <QuandoProcurar />
        <Procedimentos />
        <DoctoraliaBand />
        <Sobre />
        <ComoFunciona />
        <Diferenciais onConveniosClick={handleOpenConvenios} />
        <Depoimentos />
        <Localizacao />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <LeadModal open={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </>
  )
}
