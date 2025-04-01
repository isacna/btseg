import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png" 
          alt="Background"
          fill
          className="object-cover blur-sm brightness-50"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              BTSEG - ASSESSORIA EM SEGURANÇA DO TRABALHO
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Especialistas em Segurança do Trabalho e Medicina Ocupacional com atendimento personalizado e
              responsabilidade.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#services">
              <Button>Nossos Serviços</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white">Entre em Contato</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 