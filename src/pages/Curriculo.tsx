import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
  ExternalLink,
  Award,
  FileText,
  Microscope,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import profilePhoto from '@/assets/foto-profissional-lucas-4d53b.png'

const academicData = [
  {
    title: 'Mestrado em Direito e Justiça Social',
    inst: 'Universidade Federal do Rio Grande (FURG)',
    period: '2021 - 2023',
    desc: 'Título: "A (in)justiça social presente nas Turmas Recursais do RS: uma análise dos julgados."',
  },
  {
    title: 'Especialização em Advocacia Empresarial Previdenciária e Previdência Privada',
    inst: 'Escola Brasileira de Direito (EBRADI)',
    period: '2020 - Em andamento',
  },
  {
    title: 'Especialização em Advocacia Trabalhista e Previdenciária',
    inst: 'Universidade de Santa Cruz do Sul (UNISC)',
    period: '2018 - 2020',
  },
  {
    title: 'Graduação em Direito',
    inst: 'Universidade Federal do Rio Grande (FURG)',
    period: '2012 - 2016',
  },
]

const expData = [
  {
    title: 'Advogado Titular',
    org: 'Lucas Morrone Sociedade Individual de Advocacia (RS 14900)',
    period: 'Abril 2017 - Presente',
    desc: 'Atuação especializada na área de Direito Previdenciário e Assistencial (BPC/LOAS).',
  },
  {
    title: 'Estagiário',
    org: 'Justiça Federal, Tribunal de Justiça (TJ RS) e Advocacia-Geral da União (AGU)',
    period: '2015 - 2016',
  },
]

const projData = [
  {
    title: 'Grupo de pesquisa CIDADANIA, DIREITOS E JUSTIÇA - CIDIJUS',
    period: '2017 - Atual',
  },
  {
    title: 'Direito e Justiça Social: instrumentos jurídicos de proteção...',
    period: '2013 - 2014',
  },
]

const pubData = [
  { type: 'Livro', title: 'DOSSIÊ CIDIJUS PANDEMIA', year: '2021' },
  { type: 'Artigo', title: 'Datenismo penal e a licença para matar', year: '2022' },
  { type: 'Artigo', title: 'O Nefasto Requisito da Renda Per Capita...', year: '2022' },
  {
    type: 'Artigo',
    title: 'DESAFIOS A SEGURANÇA E A SAÚDE EM TEMPOS DE PANDEMIA...',
    year: '2020',
  },
  {
    type: 'Capítulo',
    title: 'MOBILIDADES TRANSNACIONAIS EM TEMPOS DE CRISES SOCIO-SANITÁRIAS...',
    year: '',
  },
  { type: 'Capítulo', title: 'A sociedade de consumo: obsolescência programada...', year: '' },
]

function TimelineItem({ title, subtitle, period, desc, isLast = false }: any) {
  return (
    <div className="relative">
      <div className="absolute -left-[33px] top-1.5 bg-white p-1 rounded-full border-2 border-amber-200">
        <div className="w-2.5 h-2.5 bg-amber-600 rounded-full" />
      </div>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600 font-medium">{subtitle}</p>
      <p className="text-sm text-slate-500 mt-1 font-semibold">{period}</p>
      {desc && <p className="text-slate-600 mt-2 text-sm leading-relaxed">{desc}</p>}
      {!isLast && <div className="h-8" />}
    </div>
  )
}

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-full hover:text-amber-700 hover:border-amber-700"
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Voltar</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Currículo Profissional
          </h1>
        </div>

        <Card className="overflow-hidden border-none shadow-xl rounded-2xl flex flex-col md:flex-row">
          {/* Sidebar Profile */}
          <div className="md:w-[35%] bg-sky-50 border-r border-sky-100 p-8 flex flex-col items-center justify-start relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-200/50 to-transparent" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl mb-6 flex-shrink-0 z-10 bg-white">
              <img
                src={profilePhoto}
                alt="Dr. Lucas Morrone Costa"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1 text-center relative z-10">
              Lucas Morrone Costa
            </h2>
            <p className="text-slate-600 text-center mb-4 font-medium relative z-10">
              Advogado Especialista
            </p>
            <div className="flex flex-col gap-3 items-center mb-8 relative z-10 w-full">
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border border-amber-200 text-sm py-1 px-4">
                OAB/RS 107.485
              </Badge>
              <Badge
                variant="outline"
                className="text-slate-600 border-slate-300 bg-white text-xs text-center py-1.5 leading-relaxed"
              >
                Lucas Morrone Sociedade
                <br />
                Individual de Advocacia
                <br />
                (RS 14900)
              </Badge>
            </div>

            <div className="w-full space-y-4 mt-auto relative z-10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Links e Registros
              </h3>
              <a
                href="http://lattes.cnpq.br/6521759343883367"
                className="flex items-center p-3 rounded-lg bg-white hover:bg-slate-100 transition-colors group border border-slate-200 hover:border-amber-300 shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="h-4 w-4 mr-3 text-slate-400 group-hover:text-amber-500 transition-colors" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                  Currículo Lattes
                </span>
                <ExternalLink className="h-3 w-3 ml-auto text-slate-400 group-hover:text-amber-500 transition-colors" />
              </a>
              <a
                href="https://orcid.org/0000-0001-9096-2614"
                className="flex items-center p-3 rounded-lg bg-white hover:bg-slate-100 transition-colors group border border-slate-200 hover:border-amber-300 shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="h-4 w-4 mr-3 text-slate-400 group-hover:text-amber-500 transition-colors" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                  ORCID iD
                </span>
                <ExternalLink className="h-3 w-3 ml-auto text-slate-400 group-hover:text-amber-500 transition-colors" />
              </a>
              <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-wider font-semibold">
                Atualizado em 12/02/2024
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-[65%] p-8 md:p-10 bg-white">
            <div className="space-y-10">
              {/* Resumo */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Resumo Profissional</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Possui graduação em Direito pela Universidade Federal do Rio Grande (2016). Tem
                  experiência na área de Direito, com ênfase em Direito Previdenciário, atuando
                  principalmente nos seguintes temas: direitos sociais, proibição do retrocesso
                  social e direito à previdência.
                </p>
              </section>

              <Separator className="bg-slate-100" />

              {/* Formação Acadêmica */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Formação Acadêmica</h3>
                </div>
                <div className="border-l-2 border-slate-100 ml-4 pl-6 pt-2">
                  {academicData.map((item, idx) => (
                    <TimelineItem
                      key={idx}
                      title={item.title}
                      subtitle={item.inst}
                      period={item.period}
                      desc={item.desc}
                      isLast={idx === academicData.length - 1}
                    />
                  ))}
                </div>
              </section>

              <Separator className="bg-slate-100" />

              {/* Experiência Profissional */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Experiência Profissional</h3>
                </div>
                <div className="border-l-2 border-slate-100 ml-4 pl-6 pt-2">
                  {expData.map((item, idx) => (
                    <TimelineItem
                      key={idx}
                      title={item.title}
                      subtitle={item.org}
                      period={item.period}
                      desc={item.desc}
                      isLast={idx === expData.length - 1}
                    />
                  ))}
                </div>
              </section>

              <Separator className="bg-slate-100" />

              {/* Projetos de Pesquisa */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <Microscope className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Projetos de Pesquisa</h3>
                </div>
                <ul className="space-y-4">
                  {projData.map((proj, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 mt-2 mr-3 rounded-full bg-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-slate-800 font-bold">{proj.title}</p>
                        <p className="text-sm text-slate-500 font-semibold">{proj.period}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <Separator className="bg-slate-100" />

              {/* Publicações */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Publicações e Produções</h3>
                </div>
                <ul className="space-y-4">
                  {pubData.map((pub, idx) => (
                    <li
                      key={idx}
                      className="flex items-start bg-slate-50/50 p-4 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors"
                    >
                      <Award className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-800 font-semibold leading-snug">{pub.title}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge
                            variant="secondary"
                            className="bg-white border-slate-200 text-xs font-bold text-slate-600"
                          >
                            {pub.type}
                          </Badge>
                          {pub.year && (
                            <span className="text-xs font-bold text-slate-400">{pub.year}</span>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
