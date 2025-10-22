import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, DollarSign, TrendingDown, TrendingUp, Leaf, Wind } from "lucide-react";

export default function Dashboard() {
  // Dados simulados
  const currentWater = { consumption: 12.5, cost: 85.50, unit: "m³" };
  const previousWater = { consumption: 15.2, cost: 103.20 };
  const currentEnergy = { consumption: 285, cost: 242.25, unit: "kWh" };
  const previousEnergy = { consumption: 320, cost: 272.00 };

  const waterSaved = previousWater.consumption - currentWater.consumption;
  const energySaved = previousEnergy.consumption - currentEnergy.consumption;
  const moneySaved = (previousWater.cost - currentWater.cost) + (previousEnergy.cost - currentEnergy.cost);
  const co2Saved = (energySaved * 0.475).toFixed(1);

  const waterPercentChange = ((waterSaved / previousWater.consumption) * 100).toFixed(1);
  const energyPercentChange = ((energySaved / previousEnergy.consumption) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/40 to-amber-50/30">
      <div className="container py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Gota & Watt
              </h1>
              <p className="text-gray-600">Economizador Inteligente</p>
            </div>
          </div>
        </div>

        {/* Cards de consumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card Água */}
          <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Consumo de Água</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{currentWater.consumption}</h3>
                    <span className="text-lg text-gray-500">{currentWater.unit}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">
                    R$ {currentWater.cost.toFixed(2)}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingDown className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{waterPercentChange}% menor</span>
                <span className="text-gray-500">que o mês anterior</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Energia */}
          <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-amber-500 to-yellow-500"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Consumo de Energia</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{currentEnergy.consumption}</h3>
                    <span className="text-lg text-gray-500">{currentEnergy.unit}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">
                    R$ {currentEnergy.cost.toFixed(2)}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingDown className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{energyPercentChange}% menor</span>
                <span className="text-gray-500">que o mês anterior</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Gasto Total */}
          <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Gasto Total</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{(currentWater.cost + currentEnergy.cost).toFixed(2)}</h3>
                    <span className="text-lg text-gray-500">R$</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">
                    Este mês
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingDown className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">
                  {(((previousWater.cost + previousEnergy.cost) - (currentWater.cost + currentEnergy.cost)) / (previousWater.cost + previousEnergy.cost) * 100).toFixed(1)}% menor
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Card Economia */}
          <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-green-500 to-emerald-500"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Economia Mensal</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{moneySaved.toFixed(2)}</h3>
                    <span className="text-lg text-gray-500">R$</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">
                    Economizado
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-green-600 font-medium">Parabéns!</span>
                <span className="text-gray-500">Continue assim</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Métricas de Impacto */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500 rounded-xl">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Água Economizada</p>
                  <p className="text-2xl font-bold text-blue-700">{(waterSaved * 1000).toFixed(0)} L</p>
                  <p className="text-xs text-gray-500">≈ {Math.floor(waterSaved * 1000 / 180)} banhos de 15 min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">CO₂ Evitado</p>
                  <p className="text-2xl font-bold text-green-700">{co2Saved} kg</p>
                  <p className="text-xs text-gray-500">≈ {Math.floor(parseFloat(co2Saved) / 22)} árvores plantadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-amber-500 rounded-xl">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Energia Economizada</p>
                  <p className="text-2xl font-bold text-amber-700">{energySaved.toFixed(0)} kWh</p>
                  <p className="text-xs text-gray-500">≈ {Math.floor(energySaved / 30)} dias de geladeira</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights da IA */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">💡 Insights Inteligentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 mb-1">Parabéns pela economia!</h4>
                  <p className="text-sm text-gray-700">
                    Você reduziu {(waterSaved * 1000).toFixed(0)}L de água e {energySaved.toFixed(1)}kWh de energia este mês.
                  </p>
                  <div className="mt-2 flex gap-4 text-xs">
                    <span className="text-green-700 font-medium">💰 R$ {moneySaved.toFixed(2)} economizados</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 mb-1">Dica: Horário de pico</h4>
                  <p className="text-sm text-gray-700">
                    Use aparelhos de alto consumo após 22h para economizar até 30% na conta de luz.
                  </p>
                  <div className="mt-2 text-xs text-blue-700 font-medium">
                    Economia potencial: R$ 45,00/mês
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500 rounded-lg">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-900 mb-1">Padrão identificado</h4>
                  <p className="text-sm text-gray-700">
                    Seu consumo de água está ótimo! Continue reduzindo o tempo de banho e verificando vazamentos.
                  </p>
                  <div className="mt-2 text-xs text-amber-700 font-medium">
                    Continue assim para economizar mais R$ 30,00/mês
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

