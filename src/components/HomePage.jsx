import { ArrowRight, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function HomePage({ pops, onPOPClick, onScrollToSection }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section id="inicio" className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
          📋 Gestão de Processos Comerciais
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Procedimentos Operacionais<br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Padronizados
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Documentação completa dos processos comerciais da Alpha Proteções com análise detalhada, 
          diagramas de fluxo e propostas de otimização.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => onScrollToSection('pops-section')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Explorar POPs
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => onScrollToSection('analises-section')}
            className="px-8 py-6 text-lg rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            Ver Análises
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Target className="text-blue-600" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">6</h3>
          <p className="text-slate-600 text-sm">POPs Documentados</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">15+</h3>
          <p className="text-slate-600 text-sm">Melhorias Propostas</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <AlertTriangle className="text-orange-600" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">12</h3>
          <p className="text-slate-600 text-sm">Gargalos Identificados</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Lightbulb className="text-purple-600" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">8</h3>
          <p className="text-slate-600 text-sm">Automações Sugeridas</p>
        </div>
      </section>

      {/* POPs Grid */}
      <section id="pops-section" className="mb-16 scroll-mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Procedimentos Disponíveis</h2>
            <p className="text-slate-600">Clique em um POP para ver detalhes, diagramas e análises</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pops.map((pop) => (
            <div
              key={pop.id}
              onClick={() => onPOPClick(pop)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 hover:border-blue-300 hover:-translate-y-1"
            >
              <div className={`h-32 bg-gradient-to-br ${pop.color} p-6 flex items-center justify-between`}>
                <div className="text-6xl" dangerouslySetInnerHTML={{ __html: pop.icon }} />
                <div className="text-white/20 text-sm font-mono">POP-{pop.id.toString().padStart(2, '0')}</div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold mb-3">
                  {pop.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pop.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{pop.subtitle}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {pop.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Ver detalhes
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="analises-section" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white scroll-mt-20">
        <div className="text-center mb-12">
          <h2 id="processos-section" className="text-4xl font-bold mb-4 scroll-mt-20">Análise Profissional de Processos</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Cada POP inclui mapeamento completo, identificação de gargalos e propostas de otimização
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
            <p className="text-blue-100">
              Fluxogramas detalhados com todas as etapas, decisões e responsáveis
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Identificação de Gargalos</h3>
            <p className="text-blue-100">
              Análise crítica dos pontos de ineficiência e oportunidades de melhoria
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Propostas de Otimização</h3>
            <p className="text-blue-100">
              Sugestões práticas de automação, simplificação e melhoria contínua
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
