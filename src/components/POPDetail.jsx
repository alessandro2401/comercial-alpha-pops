import { ArrowLeft, Download, Share2, Clock, Users, AlertCircle, CheckCircle2, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const popDetails = {
  1: {
    objective: 'Estabelecer um procedimento padronizado para abertura, acompanhamento e resolução de chamados através da ferramenta de suporte disponível no Uso Interno.',
    scope: 'Aplica-se a todos os colaboradores da Alpha Proteções que necessitem solicitar suporte nas áreas de Marketing, Comunicação, TI e Backoffice.',
    actors: [
      { name: 'Colaboradores (Solicitantes)', role: 'Abertura de chamados com informações completas' },
      { name: 'Equipe de TI e Suporte', role: 'Atendimento de chamados de sistemas e suporte técnico' },
      { name: 'Equipe de Marketing', role: 'Atendimento de chamados de mídias e materiais' },
      { name: 'Equipe de Backoffice', role: 'Atendimento de chamados administrativos' }
    ],
    sla: [
      { priority: 'Crítica', time: '2-4 horas', color: 'red' },
      { priority: 'Alta', time: '4-8 horas', color: 'orange' },
      { priority: 'Média', time: '24-48 horas', color: 'yellow' },
      { priority: 'Baixa', time: '48-72 horas', color: 'green' }
    ],
    bottlenecks: [
      { title: 'Falta de Informações Iniciais', impact: 'Atraso na resolução', solution: 'Template com campos obrigatórios' },
      { title: 'Classificação Incorreta', impact: 'Distorção do SLA', solution: 'Guia de classificação com exemplos' },
      { title: 'Canais Paralelos', impact: 'Perda de rastreabilidade', solution: 'Reforçar uso da ferramenta' }
    ],
    improvements: [
      { title: 'Classificação Automática', description: 'IA para sugerir categoria e prioridade' },
      { title: 'Dashboard Executivo', description: 'Painel com métricas em tempo real' },
      { title: 'Base de Conhecimento', description: 'Artigos de autoatendimento' }
    ]
  },
  2: {
    objective: 'Padronizar os processos de admissão de novos colaboradores e desligamento, garantindo conformidade legal e eficiência operacional.',
    scope: 'Aplica-se ao departamento de RH e gestores envolvidos em processos de contratação e desligamento.',
    actors: [
      { name: 'RH', role: 'Coordenação do processo de admissão/demissão' },
      { name: 'Gestores', role: 'Aprovação de vagas e validação de desligamentos' },
      { name: 'TI', role: 'Criação e desativação de acessos' },
      { name: 'Financeiro', role: 'Cálculo de rescisões e pagamentos' }
    ],
    sla: [
      { priority: 'Admissão', time: '5-7 dias úteis', color: 'green' },
      { priority: 'Demissão', time: '10 dias úteis', color: 'orange' }
    ],
    bottlenecks: [
      { title: 'Documentação Incompleta', impact: 'Atraso no processo', solution: 'Checklist digital de documentos' },
      { title: 'Múltiplas Aprovações', impact: 'Processo lento', solution: 'Workflow automatizado' }
    ],
    improvements: [
      { title: 'Onboarding Digital', description: 'Portal de boas-vindas automatizado' },
      { title: 'Assinatura Eletrônica', description: 'Contratos digitais' }
    ]
  },
  3: {
    objective: 'Estabelecer padrões de excelência no atendimento e comunicação com clientes, garantindo qualidade e consistência.',
    scope: 'Aplica-se a todos os colaboradores que tenham contato direto com clientes.',
    actors: [
      { name: 'Equipe de Atendimento', role: 'Primeiro contato e suporte' },
      { name: 'Supervisores', role: 'Escalação e resolução de casos complexos' },
      { name: 'Comercial', role: 'Cotações e propostas' }
    ],
    sla: [
      { priority: 'Telefone', time: 'Atendimento imediato', color: 'green' },
      { priority: 'Email', time: '4 horas', color: 'yellow' },
      { priority: 'WhatsApp', time: '1 hora', color: 'green' }
    ],
    bottlenecks: [
      { title: 'Informações Dispersas', impact: 'Respostas inconsistentes', solution: 'Base de conhecimento centralizada' },
      { title: 'Falta de Histórico', impact: 'Retrabalho', solution: 'CRM integrado' }
    ],
    improvements: [
      { title: 'Chatbot Inteligente', description: 'Atendimento 24/7 automatizado' },
      { title: 'Pesquisa de Satisfação', description: 'NPS automático pós-atendimento' }
    ]
  },
  4: {
    objective: 'Otimizar a gestão de leads e o processo de vendas através do uso eficiente do Power CRM.',
    scope: 'Aplica-se à equipe comercial e gestores de vendas.',
    actors: [
      { name: 'Equipe Comercial', role: 'Prospecção e fechamento' },
      { name: 'Marketing', role: 'Geração e nutrição de leads' },
      { name: 'Gestores', role: 'Análise de métricas e estratégia' }
    ],
    sla: [
      { priority: 'Lead Quente', time: 'Contato em 1 hora', color: 'red' },
      { priority: 'Lead Morno', time: 'Contato em 24 horas', color: 'yellow' },
      { priority: 'Lead Frio', time: 'Nutrição automática', color: 'blue' }
    ],
    bottlenecks: [
      { title: 'Leads Não Qualificados', impact: 'Tempo desperdiçado', solution: 'Lead scoring automatizado' },
      { title: 'Falta de Follow-up', impact: 'Perda de oportunidades', solution: 'Lembretes automáticos' }
    ],
    improvements: [
      { title: 'Integração com WhatsApp', description: 'Comunicação direta pelo CRM' },
      { title: 'Previsão de Vendas', description: 'IA para prever fechamentos' }
    ]
  },
  5: {
    objective: 'Padronizar o processo de venda de seguros auto, garantindo eficiência e conformidade.',
    scope: 'Aplica-se aos corretores e equipe comercial de seguros.',
    actors: [
      { name: 'Corretores', role: 'Cotação e venda' },
      { name: 'Seguradoras', role: 'Análise de risco e emissão' },
      { name: 'Backoffice', role: 'Documentação e ativação' }
    ],
    sla: [
      { priority: 'Cotação', time: '30 minutos', color: 'green' },
      { priority: 'Proposta', time: '2 horas', color: 'yellow' },
      { priority: 'Emissão', time: '24 horas', color: 'orange' }
    ],
    bottlenecks: [
      { title: 'Múltiplas Cotações Manuais', impact: 'Processo lento', solution: 'Integração com seguradoras' },
      { title: 'Documentação Física', impact: 'Atrasos', solution: 'Upload digital' }
    ],
    improvements: [
      { title: 'Cotação Instantânea', description: 'API com múltiplas seguradoras' },
      { title: 'Assinatura Digital', description: 'Proposta sem papel' }
    ]
  },
  6: {
    objective: 'Estruturar o processo de venda de produtos de proteção veicular do Movimento Mais Brasil.',
    scope: 'Aplica-se aos consultores e equipe comercial MMB.',
    actors: [
      { name: 'Consultores MMB', role: 'Apresentação e venda' },
      { name: 'Backoffice', role: 'Cadastro e ativação' },
      { name: 'Financeiro', role: 'Cobrança de contribuições' }
    ],
    sla: [
      { priority: 'Cadastro', time: '24 horas', color: 'green' },
      { priority: 'Ativação', time: '48 horas', color: 'yellow' }
    ],
    bottlenecks: [
      { title: 'Explicação do Mutualismo', impact: 'Objeções', solution: 'Material visual explicativo' },
      { title: 'Processo Manual', impact: 'Lentidão', solution: 'Portal de autoatendimento' }
    ],
    improvements: [
      { title: 'Simulador Online', description: 'Cliente calcula contribuição' },
      { title: 'Adesão Digital', description: 'Processo 100% online' }
    ]
  }
}

export default function POPDetail({ pop, onBack }) {
  if (!pop) return null

  const details = popDetails[pop.id]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Button 
        onClick={onBack}
        variant="ghost" 
        className="mb-6 hover:bg-slate-100"
      >
        <ArrowLeft size={20} className="mr-2" />
        Voltar para Início
      </Button>

      {/* Header */}
      <div className={`bg-gradient-to-br ${pop.color} rounded-3xl p-8 md:p-12 text-white mb-8 shadow-xl`}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-7xl" dangerouslySetInnerHTML={{ __html: pop.icon }} />
            <div>
              <div className="text-white/80 text-sm font-mono mb-2">POP-{pop.id.toString().padStart(2, '0')}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{pop.title}</h1>
              <p className="text-xl text-white/90">{pop.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Share2 size={16} />
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Download size={16} />
            </Button>
          </div>
        </div>
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
          {pop.category}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Objetivo */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="text-blue-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Objetivo</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">{details.objective}</p>
          </section>

          {/* Escopo */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="text-purple-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Escopo</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">{details.scope}</p>
          </section>

          {/* Diagrama de Fluxo */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Diagrama de Fluxo do Processo</h2>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border-2 border-slate-200">
              <img 
                src={`/diagramas/${pop.diagram}`} 
                alt={`Diagrama do ${pop.title}`}
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center py-8 text-slate-500">Diagrama em carregamento...</div>';
                }}
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Clique na imagem para ampliar • Diagrama gerado automaticamente
            </p>
          </section>

          {/* Atores e Responsabilidades */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="text-orange-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Atores e Responsabilidades</h2>
            </div>
            <div className="space-y-4">
              {details.actors.map((actor, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{actor.name}</h3>
                    <p className="text-slate-600 text-sm">{actor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SLA */}
          <section className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-600" size={20} />
              <h3 className="text-lg font-bold text-slate-900">Prazos (SLA)</h3>
            </div>
            <div className="space-y-3">
              {details.sla.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                    <span className="font-semibold text-slate-900 text-sm">{item.priority}</span>
                  </div>
                  <span className="text-slate-600 text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Gargalos */}
          <section className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-red-600" size={20} />
              <h3 className="text-lg font-bold text-slate-900">Gargalos Identificados</h3>
            </div>
            <div className="space-y-3">
              {details.bottlenecks.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-red-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-red-600 text-xs mb-2">⚠️ {item.impact}</p>
                  <p className="text-green-600 text-xs">✓ {item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Melhorias */}
          <section className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-green-600" size={20} />
              <h3 className="text-lg font-bold text-slate-900">Melhorias Propostas</h3>
            </div>
            <div className="space-y-3">
              {details.improvements.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-start gap-2">
                    <Zap className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
