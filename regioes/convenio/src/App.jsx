import { useEffect, useState } from 'react'
import './App.css'
import { ConveniosAtendidos } from './convenios.jsx'

const m = {
  clinicName: 'Lanner Especialidades',
  doctorName: 'Dr. Rafael Rocha',
  crm: 'CRM/DF 31.365',
  rqe: 'RQE 22.589',
  specialty: 'Ortopedista e Traumatologista em Brasília',
  whatsapp: '5561999190221',
  city: 'Brasília',
  state: 'DF',
  address: 'Rua 5 Norte, Lote 3 - Águas Claras, Brasília - DF, CEP: 71907-720, Sala 411',
  hours: 'Seg–Sex: 08h–18h',
  googleRating: '5.0',
  stats: { procedures: '3.000', surgeries: '500', patients: '5.000', specialties: '14' },
  doctorPhoto: './img/foto-sem-fundo.png',
  symbol: './img/simbolo.jpg',
  logoHorizontal: './img/logo-horizontal.jpg',
}

// Cores
const COLOR_DARK = '#1a2a35'
const COLOR_DARKER = '#0f1e28'
const COLOR_CARD = '#0f3340'
const COLOR_SECTION = '#2b373f'
const COLOR_GREEN = '#2e9e6e'
const COLOR_BLUE_LIGHT = '#5bb4d0'
const COLOR_BLUE_DEEP = '#1d4e6b'

function openLeadModal(event) {
  event?.preventDefault()
  window.dispatchEvent(new CustomEvent('openLeadModal'))
}

// ── Ícones ──────────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M3 7.5l9-4.5 9 4.5v6c0 5.25-3.75 8.25-9 10.5-5.25-2.25-9-5.25-9-10.5v-6Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0A17.933 17.933 0 0 1 12 21.75a17.933 17.933 0 0 1-7.5-1.632Z" />
    </svg>
  )
}

function PainReliefIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-4.243 8-7.846 8-11.25A4.75 4.75 0 0 0 15.25 5C13.91 5 12.77 5.62 12 6.6 11.23 5.62 10.09 5 8.75 5A4.75 4.75 0 0 0 4 9.75C4 13.154 7.03 16.757 12 21Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25h6M12 8.25v6" />
    </svg>
  )
}

function ScalpelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 5.25 18.75 9.75M5.25 18.75l5.364-5.364m0 0 5.657-5.657a2.121 2.121 0 1 1 3 3l-5.657 5.657m-2.999-2.999-1.5-1.5m4.499 4.499-1.5-1.5M4.5 19.5l2.379-.34a3 3 0 0 0 1.697-.84l1.538-1.538" />
    </svg>
  )
}

function BoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5a2.25 2.25 0 1 1-3.182-3.182A2.25 2.25 0 0 1 7.5 7.5l9 9a2.25 2.25 0 1 1 3.182 3.182A2.25 2.25 0 0 1 16.5 16.5l-9-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5a2.25 2.25 0 1 1-3.182 3.182A2.25 2.25 0 0 1 7.5 16.5l9-9a2.25 2.25 0 1 1 3.182-3.182A2.25 2.25 0 0 1 16.5 7.5l-9 9Z" />
    </svg>
  )
}

function SpineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 5.25h4.5M9 8.25h6M9.75 11.25h4.5M9 14.25h6M9.75 17.25h4.5" />
    </svg>
  )
}

function BandageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 13.5 3-3m-7.5.75 6.75 6.75a3 3 0 0 0 4.243 0l1.5-1.5a3 3 0 0 0 0-4.243L11.75 5.507a3 3 0 0 0-4.243 0l-1.5 1.5a3 3 0 0 0 0 4.243Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h.008v.008H8.25V8.25Zm2.25 2.25h.008v.008H10.5V10.5Zm2.25 2.25h.008v.008H12.75V12.75Zm2.25 2.25h.008v.008H15V15Z" />
    </svg>
  )
}

function HospitalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M6 21V6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75V21M9 10.5h6M12 7.5v6M9 21v-4.5h6V21" />
    </svg>
  )
}

function SyringeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 3 6 6M8.25 9.75l6 6M6 21l4.5-4.5M12 6l6 6M4.5 13.5l6-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5 16.5 13.5" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.25 3.18 5.25 6.663 5.25 10.125A5.25 5.25 0 1 1 6.75 13.125C6.75 9.663 9.75 6.18 12 3Z" />
    </svg>
  )
}

function PulseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4.5l2.25-4.5L14.25 18 16.5 12H21" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 2.25 5.25 13.5h5.25l-1.5 8.25 8.25-11.25h-5.25l1.5-8.25Z" />
    </svg>
  )
}

function ScanIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5M20.25 16.5V18A2.25 2.25 0 0 1 18 20.25h-1.5M7.5 20.25H6A2.25 2.25 0 0 1 3.75 18v-1.5M7.5 12h9" />
    </svg>
  )
}

// ── Botão WhatsApp ───────────────────────────────────────────────────────────
function BtnWA({ children, className = '', size = 'md', onClick = openLeadModal }) {
  const pad = size === 'lg' ? 'px-8 py-4 text-base' : 'px-5 py-2.5 text-sm'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${pad} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </button>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────
function Header({ showConveniosLink = false, onConveniosClick }) {
  const [open, setOpen] = useState(false)
  const links = [
    ...(showConveniosLink ? [{ href: '#convenios', label: 'Convênios', onClick: onConveniosClick }] : []),
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#procedimentos', label: 'Procedimentos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#localizacao', label: 'Localização' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <img src="./img/navbar-logo.png" alt={m.doctorName} className="h-20 w-auto object-contain lg:h-32" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={l.onClick}
                className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <BtnWA>Agende sua Consulta</BtnWA>
          </div>
          <button
            className="lg:hidden p-2 text-gray-600"
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
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-3">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="block text-gray-600 hover:text-brand-blue font-medium transition-colors py-1"
                onClick={(event) => {
                  l.onClick?.(event)
                  setOpen(false)
                }}
              >
                {l.label}
              </a>
            ))}
            <BtnWA className="w-full justify-center mt-4">Agende sua Consulta</BtnWA>
          </div>
        )}
      </div>
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ showConveniosButton = false, onConveniosClick }) {
  const heroHighlights = [
    { text: 'Aceitamos convênios', icon: ShieldIcon },
    { text: 'Consulta personalizada', icon: UserIcon },
    { text: 'Procedimentos para dor', icon: PainReliefIcon },
    { text: 'Cirurgias minimamente invasivas', icon: ScalpelIcon },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: COLOR_DARKER }}
    >
      {/* Background textura */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(./img/hero-medical-texture.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradiente desktop: clareia próximo à foto do doutor (lado direito) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `linear-gradient(to right, ${COLOR_DARKER} 0%, rgba(15,30,40,0.94) 42%, rgba(27,74,107,0.68) 66%, rgba(91,180,208,0.24) 88%, rgba(140,210,235,0.16) 100%)`,
        }}
      />
      {/* Gradiente curto somente na área da foto */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[54%] lg:block"
        style={{
          background: `linear-gradient(to left, rgba(15,30,40,0.72) 0%, rgba(27,74,107,0.24) 18%, rgba(140,210,235,0.22) 34%, rgba(140,210,235,0) 52%)`,
        }}
      />
      {/* Gradiente mobile: overlay suave */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(15,30,40,0.86) 0%, rgba(15,30,40,0.62) 46%, rgba(91,180,208,0.22) 100%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Texto */}
          <div className={`order-1 lg:order-1 lg:pb-24 ${showConveniosButton ? 'pb-28' : 'pb-12'}`}>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: COLOR_BLUE_LIGHT }}>
              Tratamento ortopédico especializado
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-white">Ortopedia</span>{' '}
              <span style={{ color: COLOR_BLUE_LIGHT }}>pelo Convênio</span><br />
              <span className="text-white">em</span>{' '}
              <span style={{ color: COLOR_BLUE_LIGHT }}>Brasília</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-lg">
              Conheça o Dr. Rafael Rocha, ortopedista e traumatologista na Lanner Especialidades, em Águas Claras. Atendemos diversos convênios, com avaliação para coluna, ombro, joelho, quadril, mão, punho, pé e tornozelo. Confira a lista completa!
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {heroHighlights.map(({ text, icon: Icon }) => {
                const isConveniosHighlight = text.toLowerCase().includes('convênios')
                const highlightClasses = 'flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border transition-colors'
                const highlightStyle = {
                  color: COLOR_BLUE_LIGHT,
                  backgroundColor: 'rgba(91,180,208,0.12)',
                  borderColor: 'rgba(91,180,208,0.24)',
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
                      <Icon />
                      {text}
                    </a>
                  )
                }

                return (
                  <span key={text} className={highlightClasses} style={highlightStyle}>
                    <Icon />
                    {text}
                  </span>
                )
              })}
            </div>
            {showConveniosButton && (
              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <BtnWA size="lg" className="justify-center">
                  Agende sua Consulta
                </BtnWA>
                <a
                  href="#convenios"
                  onClick={onConveniosClick}
                  aria-controls="convenios-list"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                  style={{ color: COLOR_DARKER }}
                >
                  <ShieldIcon />
                  Ver lista de convênios
                </a>
              </div>
            )}
            {/* Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-white font-semibold">{m.googleRating}</span>
              <span className="text-gray-400 text-sm">Doctoralia</span>
            </div>
          </div>

          {/* Foto */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end self-end lg:self-start">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: `radial-gradient(ellipse at center, ${COLOR_BLUE_LIGHT} 0%, transparent 70%)` }}
              />
              <img
                src={m.doctorPhoto}
                alt={m.doctorName}
                className="relative z-10 translate-y-4 lg:translate-y-0 max-h-[620px] lg:max-h-[680px] xl:max-h-[760px] w-auto object-contain"
              />
              {/* Badge CRM */}
              <div
                className="absolute bottom-20 left-10 lg:bottom-24 lg:left-24 z-10 px-5 py-3 rounded-xl border"
                style={{
                  backgroundColor: '#c9eef5',
                  color: COLOR_DARKER,
                  borderColor: 'rgba(255,255,255,0.45)',
                  boxShadow: '0 22px 48px rgba(2, 18, 27, 0.32), 0 8px 18px rgba(91, 180, 208, 0.22)',
                }}
              >
                <p className="font-bold text-xl lg:text-2xl" style={{ color: COLOR_BLUE_DEEP }}>{m.doctorName}</p>
                <p className="font-semibold text-base mt-0.5" style={{ color: COLOR_DARK }}>{m.specialty}</p>
                <p className="text-sm mt-0.5" style={{ color: '#47616b' }}>{m.crm}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp fixo mobile */}
      {!showConveniosButton && (
        <button
          type="button"
          onClick={openLeadModal}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-4 text-base shadow-xl"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Agende Agora
        </button>
      )}
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function Stats({ onConveniosClick }) {
  const stats = [
    { value: '+45', label: 'Convênios Atendidos' },
    { value: `+${m.stats.procedures}`, label: 'Procedimentos Realizados' },
    { value: `+${m.stats.surgeries}`, label: 'Cirurgias' },
    { value: `+${m.stats.patients}`, label: 'Pacientes Atendidos' },
  ]
  return (
    <section style={{ backgroundColor: COLOR_DARK }} className="relative z-10 -mt-6 lg:-mt-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, index) => {
            const isConveniosItem = s.label.toLowerCase().includes('convênios')
            const content = (
              <>
                <p className="text-3xl lg:text-4xl font-bold" style={{ color: COLOR_BLUE_LIGHT }}>{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </>
            )
            const itemClasses = `text-center min-h-28 flex flex-col items-center justify-center px-4 py-4 border-white/10 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''} lg:border-b-0 ${index < stats.length - 1 ? 'lg:border-r' : 'lg:border-r-0'}`

            if (isConveniosItem && onConveniosClick) {
              return (
                <a
                  key={s.label}
                  href="#convenios"
                  onClick={onConveniosClick}
                  className={`${itemClasses} transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset`}
                  style={{ '--tw-ring-color': COLOR_BLUE_LIGHT }}
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={s.label} className={itemClasses}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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
      lead_source: 'hero_form',
      page_location: currentUrl.toString(),
    })
    // Sem PII (nome/telefone) na URL da thank-you: ela só dispara conversão,
    // dado pessoal já foi capturado no webhook abaixo. UTMs não vão soltos
    // porque já estão embutidos em page_url.
    const thankYouUrl = new URL('/obg-wpp/index.html', window.location.origin)
    thankYouUrl.searchParams.set('source', 'hero_form')
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
        origem: 'hero_form',
        pagina: currentUrl.toString(),
      }, tracking)),
    }).catch(() => {})

    window.location.href = thankYouUrl.toString()
  }

  return (
    <form
      id="agendamento"
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm ${className}`}
    >
      <p className="text-white font-semibold mb-3">Preencha para iniciar o atendimento</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="sr-only" htmlFor="lead-name">Nome</label>
        <input
          id="lead-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          className="min-h-12 rounded-lg border border-white/20 bg-white px-4 text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
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
          className="min-h-12 rounded-lg border border-white/20 bg-white px-4 text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-green-700"
      >
        <WhatsAppIcon />
        Enviar e continuar pelo WhatsApp
      </button>
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
        style={{ backgroundColor: COLOR_DARKER, border: '1px solid rgba(255,255,255,0.16)' }}
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
          Agende sua consulta
        </p>
        <p className="mt-1 pr-10 text-sm text-gray-300">
          Preencha seus dados para iniciar o atendimento pelo WhatsApp.
        </p>
        <LeadForm className="mt-4" />
      </div>
    </div>
  )
}

function DoctoraliaBand() {
  return (
    <section className="py-10" style={{ backgroundColor: COLOR_DARK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl p-6 text-center"
          style={{ backgroundColor: '#d0f1eb', color: '#1a2730' }}
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold" style={{ color: COLOR_BLUE_DEEP }}>{m.googleRating}</div>
            <div>
              <div className="flex gap-0.5 justify-center sm:justify-start">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm font-medium mt-0.5">Nota no Doctoralia</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300" />
          <p className="text-lg font-bold">Pacientes recomendam o atendimento do Dr. Rafael Rocha</p>
        </div>
      </div>
    </section>
  )
}

// ── Sobre ─────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_DARKER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Sobre</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">Ortopedia, Traumatologia e Medicina da Dor</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
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
          <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: COLOR_CARD }}>
            <div className="rounded-xl aspect-[4/3] overflow-hidden mb-6">
              <img src="./img/foto-mesa.jpg" alt={m.doctorName} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">{m.doctorName}</h3>
              <p className="font-medium" style={{ color: COLOR_BLUE_LIGHT }}>{m.specialty}</p>
              <p className="text-gray-500 text-sm mt-1">{m.crm} | {m.rqe}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GaleriaClinica() {
  const photos = [
    { src: './img/foto-exame1.jpeg', alt: 'Exame guiado por ultrassom' },
    { src: './img/foto-exame2.jpg', alt: 'Procedimento minimamente invasivo' },
    { src: './img/IMG_1990.jpg', alt: 'Atendimento ao paciente' },
  ]

  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: COLOR_CARD }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {photos.map(photo => (
            <div key={photo.alt} className="rounded-2xl overflow-hidden border border-white/10">
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

// ── Especialidades ────────────────────────────────────────────────────────────
function Especialidades() {
  const areas = [
    {
      title: 'Ortopedia',
      icon: BoneIcon,
      items: ['Artrose de Joelho', 'Artrose de Quadril', 'Artrose de Ombro', 'Artrite Reumatoide', 'Bursite'],
    },
    {
      title: 'Musculoesqueléticas',
      icon: SpineIcon,
      items: ['Lombalgia Crônica', 'Cervicalgia', 'Hérnia de Disco', 'Fibromialgia', 'Síndrome Miofascial'],
    },
    {
      title: 'Traumatologia',
      icon: BandageIcon,
      items: ['Fraturas', 'Lesões Ligamentares', 'Síndrome do Túnel do Carpo', 'Ciatalgia', 'Lesões Esportivas'],
    },
    {
      title: 'Procedimentos',
      icon: HospitalIcon,
      items: ['Infiltrações guiadas por US', 'Terapias regenerativas', 'Procedimentos guiados', 'Bloqueios terapêuticos', 'Cuidados articulares'],
    },
  ]
  return (
    <section id="especialidades" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_SECTION }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Especialidades</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Áreas de Atuação</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Diagnóstico preciso e tratamento das mais diversas condições ortopédicas e traumatológicas.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors" style={{ backgroundColor: COLOR_CARD }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style={{ backgroundColor: 'rgba(91,180,208,0.12)', borderColor: 'rgba(91,180,208,0.18)', color: COLOR_BLUE_LIGHT }}>
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span style={{ color: COLOR_BLUE_LIGHT }} className="mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA>Consulte seu Caso</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── Procedimentos ─────────────────────────────────────────────────────────────
function Procedimentos() {
  const procs = [
    { title: 'Infiltração', desc: 'Procedimento guiado para aliviar dor e inflamação em articulações e tendões com alta precisão.', icon: SyringeIcon },
    { title: 'Cuidado Articular', desc: 'Abordagem voltada à proteção, mobilidade e conforto das articulações, especialmente nos joelhos.', icon: DropletIcon },
    { title: 'Terapia Regenerativa', desc: 'Técnica voltada ao estímulo da recuperação tecidual e melhora funcional.', icon: PulseIcon },
    { title: 'Estímulo Regenerativo', desc: 'Abordagem minimamente invasiva para favorecer a recuperação de ligamentos e tendões.', icon: ShieldIcon },
    { title: 'Bloqueio Terapêutico', desc: 'Procedimento para controle da dor com alívio imediato e duradouro.', icon: LightningIcon },
    { title: 'Aspiração de Cistos e Calcificações', desc: 'Remoção de depósitos e cistos que causam dor e limitação de movimento.', icon: ScanIcon },
  ]
  return (
    <section id="procedimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_CARD }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Tratamentos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Procedimentos Minimamente Invasivos</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Técnicas guiadas por ultrassom para maior precisão, segurança e eficácia no alívio da dor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {procs.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: COLOR_SECTION }}>
              <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center border" style={{ backgroundColor: `${COLOR_BLUE_LIGHT}22`, borderColor: 'rgba(91,180,208,0.18)', color: COLOR_BLUE_LIGHT }}>
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA size="lg">Agende sua Avaliação</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── Depoimentos ───────────────────────────────────────────────────────────────
// Depoimentos reais verificados via Doctoralia (mai/2026) — 11 avaliações, todos 5 estrelas
const TESTIMONIALS = [
  { name: 'Inerilda', text: 'Cheguei no consultório com dor e ao término da consulta e procedimentos, estava bem melhor. Hoje fiz outro procedimento e sei que será um ótimo resultado. Gratidão Dr. Rafael Rocha!!', rating: 5 },
  { name: 'Maria Cristina', text: 'Foi o primeiro médico que me sugeriu um tratamento eficaz para as dores que estava sentindo nos joelhos.', rating: 5 },
  { name: 'Amanda Ferreira', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
  { name: 'Paulo', text: 'Já sai de lá descendo 11 andares de escada! Top demais.', rating: 5 },
  { name: 'Darlene Aquino', text: 'Ótimo tratamento, passa confiança pro paciente. Gostei muito, super recomendo.', rating: 5 },
  { name: 'Ana Cristina G. B. de Menezes', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
]

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_DARKER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Depoimentos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">O que Nossos Pacientes Dizem</h2>
          <p className="text-gray-400 mt-3 text-sm">Avaliações verificadas no Doctoralia · Nota {m.googleRating}</p>
        </div>

        {/* Cards depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: COLOR_CARD }}>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-gray-300 mb-4 italic leading-relaxed">"{t.text}"</p>
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-gray-500">Paciente verificado · Doctoralia</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Localização ───────────────────────────────────────────────────────────────
function Localizacao() {
  return (
    <section id="localizacao" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_SECTION }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Onde Estamos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">Localização</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPinIcon />
                <div>
                  <p className="font-semibold text-white">Albany Medical Center</p>
                  <p>{m.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ClockIcon />
                <span>{m.hours}</span>
              </div>
            </div>
            <BtnWA size="lg">Solicitar contato</BtnWA>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video border border-white/10">
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

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Preciso de encaminhamento para agendar?',
    a: 'Não é necessário encaminhamento. Você pode preencher o formulário da página para iniciar o atendimento pelo WhatsApp. Se seu convênio exigir, verifique as regras do seu plano.',
  },
  {
    q: 'O Dr. Rafael atende por convênio?',
    a: 'Sim! Atendemos diversos convênios e planos de saúde. Preencha o formulário para verificar se o seu plano é atendido e quais procedimentos estão cobertos.',
  },
  {
    q: 'Por que procurar um ortopedista especializado?',
    a: 'O ortopedista e traumatologista possui formação específica para diagnosticar e tratar lesões, dores articulares, musculoesqueléticas e fraturas. Com técnicas avançadas e procedimentos minimamente invasivos guiados por ultrassom, é possível obter alívio significativo e duradouro, muitas vezes evitando cirurgias.',
  },
  {
    q: 'Como faço para agendar minha consulta?',
    a: 'É simples! Preencha seu nome e telefone no formulário da página. Em seguida, você será direcionado para o WhatsApp com as informações preenchidas.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_CARD }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Dúvidas</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden" style={{ backgroundColor: COLOR_SECTION }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 transition-transform text-gray-400 ${open === i ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Ainda tem dúvidas? Fale conosco!</p>
          <BtnWA>Tire suas Dúvidas</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── CTA Final ─────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="py-12" style={{ backgroundColor: COLOR_DARK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl p-8"
          style={{ backgroundColor: '#d0f1eb', color: '#1a2730' }}
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold" style={{ color: COLOR_BLUE_DEEP }}>{m.googleRating}</div>
            <div>
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm font-medium mt-0.5">Nota no Doctoralia</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300" />
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">Agende sua consulta hoje</p>
            <p className="text-sm text-gray-600">Atendimento rápido e humanizado</p>
          </div>
          <button
            type="button"
            onClick={openLeadModal}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <WhatsAppIcon />
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white py-8 pb-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={m.symbol} alt="" className="h-8 w-8 object-contain rounded" />
              <span className="font-bold text-lg" style={{ color: COLOR_DARK }}>{m.doctorName}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ortopedista e Traumatologista em {m.city}-{m.state}.
              Procedimentos minimamente invasivos guiados por ultrassom em Brasília-DF.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_DARK }}>Endereço</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              <p>{m.address}</p>
              <p>{m.hours}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_DARK }}>Links</h4>
            <div className="space-y-2">
              {['#especialidades', '#procedimentos', '#depoimentos', '#localizacao', '#faq'].map(href => (
                <a key={href} href={href} className="block text-gray-500 hover:text-blue-600 text-sm transition-colors capitalize">
                  {href.replace('#', '')}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} {m.doctorName} — {m.crm} — Ortopedista e Traumatologista
          </p>
          <p className="text-gray-400 text-xs">
            Desenvolvido por <span className="font-medium">Pulso Marketing Médico</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
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
      <Header showConveniosLink onConveniosClick={handleOpenConvenios} />
      <main>
        <Hero showConveniosButton onConveniosClick={handleOpenConvenios} />
        <Stats onConveniosClick={handleOpenConvenios} />
        <ConveniosAtendidos
          CtaButton={BtnWA}
          ShieldIcon={ShieldIcon}
          CheckIcon={CheckIcon}
          palette={{
            section: COLOR_SECTION,
            card: COLOR_CARD,
            accent: COLOR_BLUE_LIGHT,
          }}
        />
        <Especialidades />
        <Procedimentos />
        <DoctoraliaBand />
        <Sobre />
        <GaleriaClinica />
        <Depoimentos />
        <Localizacao />
        <FAQ />
      </main>
      <Footer />
      <LeadModal open={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </>
  )
}
