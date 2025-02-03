import Image from "next/image"

const testimonials = [
  {
    name: "João Silva",
    role: "Produtor Rural",
    content: "A AgriFence revolucionou a forma como gerencio minha fazenda. O aumento na eficiência é notável.",
    image: "/farm-manager.jpg",
  },
  {
    name: "Maria Santos",
    role: "Gestora de Cooperativa",
    content: "Com a AgriFence, nossa cooperativa viu um aumento significativo na produtividade dos associados.",
    image: "/woman_agri.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Experiências Reais</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden card-hover">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 relative z-10">{testimonial.content}</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary opacity-10 rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

