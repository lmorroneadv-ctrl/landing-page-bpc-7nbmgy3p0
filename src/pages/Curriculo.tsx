import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
  ExternalLink,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import profilePhoto from '@/assets/foto-profissional-lucas-4d53b.png'

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Voltar</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Currículo Profissional
          </h1>
        </div>

        <Card className="overflow-hidden border-none shadow-xl rounded-2xl">
          <div className="md:flex">
            {/* Sidebar Profile */}
            <div className="md:w-1/3 bg-[#0f172a] p-8 text-white flex flex-col items-center justify-start relative">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1e293b] to-transparent" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl mb-6 flex-shrink-0 z-10">
                <img
                  src={profilePhoto}
                  alt="Dr. Lucas Morrone"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1 text-center relative z-10">Lucas Morrone</h2>
              <p className="text-slate-300 text-center mb-2 font-medium relative z-10">
                Advogado Especialista
              </p>
              <Badge
                variant="secondary"
                className="mb-8 bg-slate-800 text-slate-100 hover:bg-slate-700 border-slate-700 relative z-10"
              >
                OAB/SP 123.456
              </Badge>

              <div className="w-full space-y-4 mt-auto relative z-10">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Links Externos
                </h3>
                <a
                  href="http://lattes.cnpq.br/"
                  className="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="h-4 w-4 mr-3 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Currículo Lattes
                  </span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://orcid.org/"
                  className="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="h-4 w-4 mr-3 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    ORCID
                  </span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 p-8 md:p-10 bg-white">
              <div className="space-y-10">
                {/* Academic Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">Formação Acadêmica</h3>
                  </div>
                  <div className="space-y-6 relative border-l-2 border-slate-100 ml-4 pl-6">
                    <div className="relative">
                      <div className="absolute -left-[33px] top-1 bg-white p-1 rounded-full border-2 border-blue-100">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-900">
                        Pós-graduação em Direito Previdenciário
                      </h4>
                      <p className="text-slate-500 font-medium">
                        Instituto Brasileiro de Direito Previdenciário (IBDP)
                      </p>
                      <p className="text-sm text-slate-400 mt-1">2020 - 2022</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[33px] top-1 bg-white p-1 rounded-full border-2 border-slate-100">
                        <div className="w-3 h-3 bg-slate-300 rounded-full" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-900">Bacharelado em Direito</h4>
                      <p className="text-slate-500 font-medium">
                        Pontifícia Universidade Católica (PUC)
                      </p>
                      <p className="text-sm text-slate-400 mt-1">2014 - 2019</p>
                    </div>
                  </div>
                </section>

                <Separator className="bg-slate-100" />

                {/* Professional Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Experiência Profissional
                    </h3>
                  </div>
                  <div className="space-y-8 relative border-l-2 border-slate-100 ml-4 pl-6">
                    <div className="relative">
                      <div className="absolute -left-[33px] top-1 bg-white p-1 rounded-full border-2 border-blue-100">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-900">Sócio Fundador</h4>
                      <p className="text-slate-500 font-medium mb-3">
                        Morrone Advocacia • 2021 - Presente
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Atuação exclusiva e especializada na área previdenciária, com foco absoluto
                        em Benefício de Prestação Continuada (BPC/LOAS). Coordenação de equipe
                        jurídica e gestão de carteira com centenas de processos ativos, garantindo o
                        acesso à justiça e aos direitos sociais de idosos e pessoas com deficiência.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="bg-slate-50 text-slate-600 border-slate-200"
                        >
                          BPC/LOAS
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-slate-50 text-slate-600 border-slate-200"
                        >
                          Direito Previdenciário
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-slate-50 text-slate-600 border-slate-200"
                        >
                          INSS
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[33px] top-1 bg-white p-1 rounded-full border-2 border-slate-100">
                        <div className="w-3 h-3 bg-slate-300 rounded-full" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-900">
                        Advogado Previdenciarista
                      </h4>
                      <p className="text-slate-500 font-medium mb-3">
                        Escritório de Advocacia Associados • 2019 - 2021
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Atuação no contencioso e consultivo previdenciário. Elaboração de petições
                        iniciais, recursos e sustentações orais em turmas recursais e tribunais
                        regionais federais.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator className="bg-slate-100" />

                {/* Additional Information / Publications */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Atividades e Publicações
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-700 font-medium">
                          O impacto do BPC na erradicação da pobreza extrema
                        </p>
                        <p className="text-sm text-slate-500">
                          Revista de Direito Previdenciário, 2022
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-700 font-medium">
                          Critérios de avaliação biopsicossocial para concessão de LOAS
                        </p>
                        <p className="text-sm text-slate-500">
                          Anais do Congresso Nacional de Direito Previdenciário, 2021
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
