import { CheckCircle, Tractor, Sprout, BarChart2 } from "lucide-react"

const features = [
  {
    icon: <Tractor className="w-12 h-12 text-primary" />,
    title: "Monitoramento Remoto",
    description: "Acompanhe suas operações e máquinas em tempo real, de qualquer lugar.",
  },
  {
    icon: <Sprout className="w-12 h-12 text-primary" />,
    title: "Automação Inteligente",
    description: "Reduza a intervenção humana e aumente a eficiência operacional.",
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-primary" />,
    title: "Análise de Dados",
    description: "Obtenha insights valiosos para tomar decisões mais informadas.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Recursos Inovadores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-lg card-hover">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Benefícios Comprovados</h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Aumento na produtividade das operações",
              "Redução dos custos operacionais",
              "Melhoria significativa na qualidade da colheita",
              "Otimização do uso de recursos naturais",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

