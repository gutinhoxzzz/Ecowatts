import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lightbulb, 
  Droplets, 
  Zap, 
  Search,
  Heart,
  TrendingUp
} from "lucide-react";

const tipsData = [
  {
    id: 1,
    title: "Reduza o tempo de banho",
    content: "Diminuir o banho de 15 para 8 minutos pode economizar até 2.700 litros de água por mês.",
    category: "agua_banheiro",
    difficulty: "facil",
    potential_savings_percent: 30,
    is_favorite: false
  },
  {
    id: 2,
    title: "Use lâmpadas LED",
    content: "Lâmpadas LED consomem até 80% menos energia que as incandescentes e duram muito mais.",
    category: "energia_iluminacao",
    difficulty: "facil",
    potential_savings_percent: 75,
    is_favorite: false
  },
  {
    id: 3,
    title: "Ajuste a temperatura do ar condicionado",
    content: "Manter o AC entre 23-24°C em vez de 18°C pode reduzir o consumo em até 30%.",
    category: "energia_climatizacao",
    difficulty: "facil",
    potential_savings_percent: 30,
    is_favorite: false
  },
  {
    id: 4,
    title: "Feche a torneira ao escovar os dentes",
    content: "Deixar a torneira aberta desperdiça até 12 litros de água. Feche-a durante a escovação.",
    category: "agua_banheiro",
    difficulty: "facil",
    potential_savings_percent: 20,
    is_favorite: false
  },
  {
    id: 5,
    title: "Lave roupas com carga completa",
    content: "Usar a máquina de lavar apenas com carga completa economiza água e energia.",
    category: "agua_lavanderia",
    difficulty: "medio",
    potential_savings_percent: 25,
    is_favorite: false
  },
  {
    id: 6,
    title: "Desligue aparelhos da tomada",
    content: "Aparelhos em stand-by consomem energia. Desligue da tomada quando não estiver usando.",
    category: "energia_eletronicos",
    difficulty: "facil",
    potential_savings_percent: 10,
    is_favorite: false
  },
  {
    id: 7,
    title: "Reutilize água da chuva",
    content: "Instale um sistema de captação de água da chuva para regar plantas e lavar áreas externas.",
    category: "agua_cozinha",
    difficulty: "dificil",
    potential_savings_percent: 40,
    is_favorite: false
  },
  {
    id: 8,
    title: "Use timer no ar condicionado",
    content: "Programe o AC para desligar após dormir. Você não precisa dele ligado a noite toda.",
    category: "energia_climatizacao",
    difficulty: "facil",
    potential_savings_percent: 20,
    is_favorite: false
  }
];

const categoryIcons: Record<string, any> = {
  agua_cozinha: Droplets,
  agua_banheiro: Droplets,
  agua_lavanderia: Droplets,
  energia_iluminacao: Zap,
  energia_eletronicos: Zap,
  energia_climatizacao: Zap,
  geral: Lightbulb
};

const categoryColors: Record<string, string> = {
  agua_cozinha: 'from-blue-500 to-cyan-500',
  agua_banheiro: 'from-blue-600 to-blue-400',
  agua_lavanderia: 'from-cyan-500 to-teal-500',
  energia_iluminacao: 'from-amber-500 to-yellow-500',
  energia_eletronicos: 'from-orange-500 to-amber-500',
  energia_climatizacao: 'from-yellow-500 to-orange-400',
  geral: 'from-purple-500 to-indigo-500'
};

const difficultyColors: Record<string, string> = {
  facil: 'bg-green-100 text-green-700 border-green-300',
  medio: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  dificil: 'bg-red-100 text-red-700 border-red-300'
};

export default function Tips() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [tips, setTips] = useState(tipsData);

  const toggleFavorite = (id: number) => {
    setTips(tips.map(tip => 
      tip.id === id ? { ...tip, is_favorite: !tip.is_favorite } : tip
    ));
  };

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === "all" || tip.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const categories = [
    { value: "all", label: "Todas" },
    { value: "agua_cozinha", label: "Água - Cozinha" },
    { value: "agua_banheiro", label: "Água - Banheiro" },
    { value: "agua_lavanderia", label: "Água - Lavanderia" },
    { value: "energia_iluminacao", label: "Energia - Iluminação" },
    { value: "energia_eletronicos", label: "Energia - Eletrônicos" },
    { value: "energia_climatizacao", label: "Energia - Climatização" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/40 to-amber-50/30">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Biblioteca de Dicas
          </h1>
          <p className="text-gray-600">Aprenda a economizar água e energia com dicas práticas</p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Buscar dicas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={filterCategory === cat.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(cat.value)}
                className={filterCategory === cat.value ? "bg-gradient-to-r from-blue-500 to-amber-500" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredTips.map((tip) => {
            const Icon = categoryIcons[tip.category] || Lightbulb;
            return (
              <Card key={tip.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${categoryColors[tip.category]}`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColors[tip.category]}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(tip.id)}
                        className="hover:bg-transparent"
                      >
                        <Heart 
                          className={`w-5 h-5 ${tip.is_favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                        />
                      </Button>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tip.content}</p>

                    <div className="flex flex-wrap gap-2">
                      {tip.difficulty && (
                        <Badge className={`${difficultyColors[tip.difficulty]} border`}>
                          {tip.difficulty.charAt(0).toUpperCase() + tip.difficulty.slice(1)}
                        </Badge>
                      )}
                      {tip.potential_savings_percent && (
                        <Badge className="bg-green-100 text-green-700 border-green-300 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Até {tip.potential_savings_percent}% de economia
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <Lightbulb className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">Nenhuma dica encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
}

