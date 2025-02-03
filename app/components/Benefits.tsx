import { CheckCircle, Tractor, Sprout, BarChart2 } from "lucide-react"

const benefits = [
  {
    icon: <Tractor className="w-12 h-12 text-green-600" />,
    title: "Tecnologia de ponta",
    description: "Integração com sensores, IoT e inteligência artificial",
  },
  {
    icon: <Sprout className="w-12 h-12 text-green-600" />,
    title: "Foco na produtividade",
    description: "Otimização dos recursos agrícolas",
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-green-600" />,
    title: "Plataforma intuitiva",
    description: "Fácil acesso e controle de todas as operações",
  },
]

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Benefícios e Diferenciais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Principais Funcionalidades</h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Monitoramento Remoto – Acompanhamento das operações e máquinas pela web",
              "Automação – Redução da necessidade de intervenção humana no controle operacional",
              "Análise de Dados Inteligente – Relatórios detalhados e insights para tomada de decisão",
              "Eficiência e Segurança – Aumento da produtividade e redução de perdas no campo",
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

