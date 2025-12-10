import { useState } from 'react'
import { FileText, Home, BarChart3, GitBranch, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import HomePage from './components/HomePage.jsx'
import POPDetail from './components/POPDetail.jsx'
// Autenticação removida - Acesso livre
import './App.css'

const pops = [
  {
    id: 1,
    title: 'Abertura de Chamados no Uso Interno',
    subtitle: 'Grupo MMB',
    description: 'Procedimento padronizado para abertura, acompanhamento e resolução de chamados através da ferramenta de suporte do Uso Interno.',
    category: 'Suporte Interno',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    color: 'from-blue-500 to-blue-700',
    diagram: 'diagrama_pop1.png'
  },
  {
    id: 2,
    title: 'Admissão e Demissão de Colaboradores',
    subtitle: 'Alpha Proteções',
    description: 'Processos de RH para admissão de novos colaboradores e procedimentos de desligamento.',
    category: 'Recursos Humanos',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    color: 'from-green-500 to-green-700',
    diagram: 'diagrama_pop2.png'
  },
  {
    id: 3,
    title: 'Atendimento e Comunicação com Clientes',
    subtitle: 'Alpha Proteções',
    description: 'Padrões de atendimento, canais de comunicação e protocolos de resposta para garantir qualidade no relacionamento com clientes.',
    category: 'Atendimento',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    color: 'from-purple-500 to-purple-700',
    diagram: 'diagrama_pop3.png'
  },
  {
    id: 4,
    title: 'Gestão de Leads e Vendas (Power CRM)',
    subtitle: 'Alpha Proteções',
    description: 'Uso do Power CRM para captação, qualificação de leads e gestão do funil de vendas com métricas e indicadores.',
    category: 'Vendas',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
    color: 'from-orange-500 to-orange-700',
    diagram: 'diagrama_pop4.png'
  },
  {
    id: 5,
    title: 'Processo de Venda - Potere Seguro Auto',
    subtitle: 'Soluções Corretora',
    description: 'Processo de venda específico para seguros auto, incluindo cotação, proposta, documentação e fechamento.',
    category: 'Vendas',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    color: 'from-red-500 to-red-700',
    diagram: 'diagrama_pop5.png'
  },
  {
    id: 6,
    title: 'Processo de Venda – Movimento Mais Brasil',
    subtitle: 'MMB',
    description: 'Processo de venda para produtos MMB com características específicas de mutualismo e proteção solidária.',
    category: 'Vendas',
    icon: '<svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>',
    color: 'from-indigo-500 to-indigo-700',
    diagram: 'diagrama_pop6.png'
  }
]

function App() {
  return (
    <AppContent />
  )
}

function AppContent() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedPOP, setSelectedPOP] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePOPClick = (pop) => {
    setSelectedPOP(pop)
    setCurrentView('detail')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedPOP(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    setMenuOpen(false)
    if (currentView !== 'home') {
      setCurrentView('home')
      setSelectedPOP(null)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleBackToHome}>
              <img 
                src="/logos/alpha-logo.png" 
                alt="Alpha Proteções" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Alpha Proteções</h1>
                <p className="text-xs text-slate-600">Procedimentos Operacionais Padrão</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={handleBackToHome}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentView === 'home' 
                    ? 'bg-blue-100 text-blue-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Home size={18} />
                <span>Início</span>
              </button>
              <button 
                onClick={() => scrollToSection('pops-section')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
              >
                <FileText size={18} />
                <span>POPs</span>
              </button>
              <button 
                onClick={() => scrollToSection('analises-section')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
              >
                <BarChart3 size={18} />
                <span>Análises</span>
              </button>
              <button 
                onClick={() => scrollToSection('processos-section')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
              >
                <GitBranch size={18} />
                <span>Processos</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden py-4 border-t border-slate-200">
              <button 
                onClick={handleBackToHome}
                className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all"
              >
                <Home size={18} />
                <span>Início</span>
              </button>
              <button 
                onClick={() => scrollToSection('pops-section')}
                className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all"
              >
                <FileText size={18} />
                <span>POPs</span>
              </button>
              <button 
                onClick={() => scrollToSection('analises-section')}
                className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all"
              >
                <BarChart3 size={18} />
                <span>Análises</span>
              </button>
              <button 
                onClick={() => scrollToSection('processos-section')}
                className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all"
              >
                <GitBranch size={18} />
                <span>Processos</span>
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentView === 'home' ? (
          <HomePage pops={pops} onPOPClick={handlePOPClick} onScrollToSection={scrollToSection} />
        ) : (
          <POPDetail pop={selectedPOP} onBack={handleBackToHome} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Alpha Proteções</h3>
              <p className="text-slate-400 text-sm">
                Parte do Grupo MMB - Movimento Mais Brasil
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Sobre este Portal</h3>
              <p className="text-slate-400 text-sm">
                Portal de Procedimentos Operacionais Padrão com análise de processos e otimizações.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Alpha Proteções - Grupo MMB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
