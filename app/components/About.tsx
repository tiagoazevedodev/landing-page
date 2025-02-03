import { Cpu, Leaf, BarChart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Sobre a AgriFence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
            <Cpu className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600">Integramos IoT para oferecer soluções de ponta no agronegócio.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
            <p className="text-gray-600">Otimizamos recursos para uma agricultura mais eficiente e sustentável.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
            <BarChart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dados Inteligentes</h3>
            <p className="text-gray-600">Transformamos dados em insights acionáveis para melhorar sua produção.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

