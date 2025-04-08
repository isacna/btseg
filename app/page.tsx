import Image from "next/image"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5511970531074&text=Olá, gostaria de mais informações sobre seus serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Contato via WhatsApp"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={45} height={50} />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} BTSEG Assessoria em Segurança do Trabalho. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

