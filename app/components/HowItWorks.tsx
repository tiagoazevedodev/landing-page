import Image from "next/image"

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Como Funciona</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/snapshot-agrivision.jpg"
              alt="AgriFence Dashboard"
              width={1000}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ol className="space-y-6">
              {[
                "Instalação de sensores IoT nas máquinas e áreas de cultivo",
                "Coleta contínua de dados em tempo real",
                "Processamento dos dados em nuvem",
                "Geração de insights e recomendações personalizadas",
                "Acesso fácil via plataforma web e mobile",
              ].map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-4">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 blob opacity-10"></div>
    </section>
  )
}

