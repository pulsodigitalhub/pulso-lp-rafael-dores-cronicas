import { useState } from 'react'

export const CONVENIOS_ATENDIDOS = [
  'AFEB BRASAL',
  'AFFEGO',
  'ANAFE SAÚDE',
  'BACEN',
  'BRB (SAÚDE BRB)',
  'CAEME - GO',
  'CAESAN',
  'CAMED',
  'CARE PLUS',
  'CASEC (CODEVASF)',
  'CASEMBRAPA (EMBRAPA)',
  'CBMDF',
  'CLIQUE MÉDICOS',
  'CNTI',
  'CONAB',
  'EMBRATEL (TELOS)',
  'FAPES (BNDES)',
  'FASCAL',
  'GDF SAÚDE',
  'GEAP',
  'GRAVIA',
  'LIFE EMPRESARIAL',
  'LUMINAR SAÚDE (EVIDA)',
  'NOTRE DAME',
  'OMINT SAÚDE',
  'PF SAÚDE (POLÍCIA FEDERAL)',
  'PLAN ASSISTE (MPU)',
  'PLAS/JMU (STM)',
  'PMDF - CONSULTAS MÉDICAS',
  'PMDF - SAÚDE MENTAL E TERAPIAS',
  'POSTAL SAÚDE (ECT) - (SUSPENSO)',
  'PROASA',
  'PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)',
  'PRÓ-SAÚDE (TJDFT)',
  'PRÓ-SER (STJ)',
  'PRÓ-SOCIAL (TRF)',
  'REAL GRANDEZA (DEMAIS PLANOS)',
  'REAL GRANDEZA (SALVUS E SALUTEM)',
  'SAÚDE CAIXA',
  'SAÚDE PETROBRAS',
  'SERPRO',
  'SIS SENADO',
  'STF-MED (STF)',
  'TRE SAÚDE',
  'TRT SAÚDE',
  'TST SAÚDE',
  'UNAFISCO SAÚDE (DEMAIS PLANOS)',
  'UNAFISCO SAÚDE (PREMIUM)',
]

export function ConveniosAtendidos({
  CtaButton,
  ShieldIcon,
  CheckIcon,
  palette = {},
}) {
  const [showAllConvenios, setShowAllConvenios] = useState(false)
  const mobileConvenioLimit = 10
  const mobileConvenios = showAllConvenios
    ? CONVENIOS_ATENDIDOS
    : CONVENIOS_ATENDIDOS.slice(0, mobileConvenioLimit)
  const hiddenConveniosCount = CONVENIOS_ATENDIDOS.length - mobileConvenioLimit
  const Cta = CtaButton
  const Shield = ShieldIcon
  const Check = CheckIcon
  const colors = {
    section: '#2b373f',
    card: '#0f3340',
    accent: '#5bb4d0',
    iconBackground: 'rgba(91,180,208,0.16)',
    ...palette,
  }

  const conveniosPorLetra = CONVENIOS_ATENDIDOS.reduce((groups, convenio) => {
    const letter = convenio[0]
    groups[letter] = [...(groups[letter] || []), convenio]
    return groups
  }, {})

  return (
    <section id="convenios" className="scroll-mt-24 py-16 lg:py-24" style={{ backgroundColor: colors.section }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Lista de convênios
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">
            Confira alguns dos convênios atendidos e, se tiver dúvida sobre cobertura, confirme com a equipe antes do agendamento.
          </p>
        </div>

        <div id="convenios-list" className="mt-8 overflow-hidden rounded-2xl border border-white/10" style={{ backgroundColor: colors.card }}>
          <div className="grid gap-7 p-5 sm:p-6 lg:grid-cols-[0.45fr_1.55fr] lg:p-8">
            <div className="flex items-start gap-4 lg:block">
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: colors.iconBackground, color: colors.accent }}
                aria-hidden="true"
              >
                <Shield />
              </span>
              <div className="lg:mt-5">
                <h3 className="text-xl font-bold text-white">
                  Convênios disponíveis
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {CONVENIOS_ATENDIDOS.length} convênios para consulta.
                </p>
              </div>
            </div>

            <div className="sm:hidden">
              <div className="grid gap-3" id="convenios-list-mobile">
                {mobileConvenios.map((convenio) => (
                  <span
                    key={convenio}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.10] px-4 py-2 text-center text-sm font-bold leading-snug text-white"
                  >
                    {convenio}
                  </span>
                ))}
              </div>

              {hiddenConveniosCount > 0 && (
                <button
                  type="button"
                  aria-expanded={showAllConvenios}
                  aria-controls="convenios-list-mobile"
                  onClick={() => setShowAllConvenios((current) => !current)}
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-bold transition hover:bg-gray-100"
                  style={{ color: colors.card }}
                >
                  <span>{showAllConvenios ? 'Ver menos convênios' : 'Ver mais convênios'}</span>
                  <span aria-hidden="true">{showAllConvenios ? '↑' : '↓'}</span>
                </button>
              )}
            </div>

            <div className="hidden gap-x-8 gap-y-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(conveniosPorLetra).map(([letter, convenios]) => (
                <div key={letter}>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold"
                      style={{ backgroundColor: colors.iconBackground, color: colors.accent }}
                    >
                      {letter}
                    </span>
                    <span className="text-sm font-semibold text-gray-400">
                      {convenios.length} {convenios.length === 1 ? 'convênio' : 'convênios'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {convenios.map((convenio) => (
                      <li key={convenio} className="flex gap-2 text-sm leading-snug text-gray-200">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: colors.accent }}>
                          <Check />
                        </span>
                        <span className="break-words">{convenio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {Cta && (
          <div className="mt-8 flex justify-center">
            <Cta size="lg">Confirmar meu convênio</Cta>
          </div>
        )}
      </div>
    </section>
  )
}
