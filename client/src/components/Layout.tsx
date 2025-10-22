import { useState, ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { 
  Droplets, 
  Zap, 
  LayoutDashboard, 
  Trophy,
  Lightbulb,
  Calculator,
  Star,
  Menu,
  X
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  {
    title: "Painel",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Simulador",
    url: "/simulator",
    icon: Calculator,
  },
  {
    title: "Dicas",
    url: "/tips",
    icon: Lightbulb,
  },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const totalPoints = 1250;
  const achievements = 8;

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-cyan-50/40 to-amber-50/30">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex md:w-64 flex-col border-r border-gray-200/50 backdrop-blur-sm bg-white/90">
        {/* Header */}
        <div className="border-b border-gray-200/50 p-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Gota & Watt</h2>
              <p className="text-xs text-gray-500">Economizador Inteligente</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-2">
              Menu Principal
            </p>
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.url || (location === "/" && item.url === "/dashboard");
                return (
                  <Link key={item.title} href={item.url}>
                    <a
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-amber-50 text-blue-700 shadow-sm' 
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-amber-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Pontuação */}
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-2">
              Sua Pontuação
            </p>
            <div className="px-4 py-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Pontos Totais</span>
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                {totalPoints}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {achievements} conquistas
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200/50 p-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm truncate">Usuário</p>
              <p className="text-xs text-gray-500 truncate">Economizando recursos</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-64 flex flex-col border-r border-gray-200/50 backdrop-blur-sm bg-white">
            {/* Header */}
            <div className="border-b border-gray-200/50 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">Gota & Watt</h2>
                  <p className="text-xs text-gray-500">Economizador Inteligente</p>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-2">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 p-3 overflow-y-auto">
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-2">
                  Menu Principal
                </p>
                <nav className="space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.url || (location === "/" && item.url === "/dashboard");
                    return (
                      <Link key={item.title} href={item.url}>
                        <a
                          onClick={() => setSidebarOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-50 to-amber-50 text-blue-700 shadow-sm' 
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-amber-50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </a>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Pontuação */}
              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-2">
                  Sua Pontuação
                </p>
                <div className="px-4 py-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Pontos Totais</span>
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    {totalPoints}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {achievements} conquistas
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200/50 p-4">
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">Usuário</p>
                  <p className="text-xs text-gray-500 truncate">Economizando recursos</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 px-6 py-4 md:hidden">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              <Zap className="w-4 h-4 text-amber-600" />
              <h1 className="text-lg font-bold">Gota & Watt</h1>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

