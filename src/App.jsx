import { useState } from 'react'
import { FileText, Home, BarChart3, GitBranch, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import HomePage from './components/HomePage.jsx'
import POPDetail from './components/POPDetail.jsx'
import './App.css'

const pops = [
  {
    id: 1,
    title: 'Abertura de Chamados no Uso Interno',
    subtitle: 'Grupo MMB',
    description: 'Procedimento padronizado para abertura, acompanhamento e resolução de chamados através da ferramenta de suporte do Uso Interno.',
    category: 'Suporte Interno',
    icon: '🎫',
    color: 'from-blue-500 to-blue-700',
    diagram: 'diagrama_pop1.png'
  },
  {
    id: 2,
    title: 'Admissão e Demissão de Colaboradores',
    subtitle: 'Alpha Proteções',
    description: 'Processos de RH para admissão de novos colaboradores e procedimentos de desligamento.',
    category: 'Recursos Humanos',
    icon: '👥',
    color: 'from-green-500 to-green-700',
    diagram: 'diagrama_pop2.png'
  },
  {
    id: 3,
    title: 'Atendimento e Comunicação com Clientes',
    subtitle: 'Alpha Proteções',
    description: 'Padrões de atendimento, canais de comunicação e protocolos de resposta para garantir qualidade no relacionamento com clientes.',
    category: 'Atendimento',
    icon: '💬',
    color: 'from-purple-500 to-purple-700',
    diagram: 'diagrama_pop3.png'
  },
  {
    id: 4,
    title: 'Gestão de Leads e Vendas (Power CRM)',
    subtitle: 'Alpha Proteções',
    description: 'Uso do Power CRM para captação, qualificação de leads e gestão do funil de vendas com métricas e indicadores.',
    category: 'Vendas',
    icon: '📊',
    color: 'from-orange-500 to-orange-700',
    diagram: 'diagrama_pop4.png'
  },
  {
    id: 5,
    title: 'Processo de Venda - Potere Seguro Auto',
    subtitle: 'Soluções Corretora',
    description: 'Processo de venda específico para seguros auto, incluindo cotação, proposta, documentação e fechamento.',
    category: 'Vendas',
    icon: '🚗',
    color: 'from-red-500 to-red-700',
    diagram: 'diagrama_pop5.png'
  },
  {
    id: 6,
    title: 'Processo de Venda – Movimento Mais Brasil',
    subtitle: 'MMB',
    description: 'Processo de venda para produtos MMB com características específicas de mutualismo e proteção solidária.',
    category: 'Vendas',
    icon: '🤝',
    color: 'from-indigo-500 to-indigo-700',
    diagram: 'diagrama_pop6.png'
  }
]

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedPOP, setSelectedPOP] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePOPClick = (pop) => {
    setSelectedPOP(pop)
    setCurrentView('detail')
    setMenuOpen(false)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedPOP(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleBackToHome}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                AP
              </div>
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
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                <FileText size={18} />
                <span>POPs</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                <BarChart3 size={18} />
                <span>Análises</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
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
              <button className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all">
                <FileText size={18} />
                <span>POPs</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all">
                <BarChart3 size={18} />
                <span>Análises</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 w-full text-left rounded-lg hover:bg-slate-100 transition-all">
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
          <HomePage pops={pops} onPOPClick={handlePOPClick} />
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
