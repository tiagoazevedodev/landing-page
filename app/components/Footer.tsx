import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold gradient-text">AgriFence</h3>
            <p className="text-sm mt-2">Tecnologia para o agronegócio do futuro</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition duration-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <Instagram />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <ul className="flex justify-center space-x-4 mb-4">
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Política de Privacidade
              </a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} AgriFence. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

