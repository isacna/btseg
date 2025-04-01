import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="BTSEG Logo" width={150} height={150} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Sobre Nós
            </Link>
            <Link
              href="#contact"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="#contact">
            <Button>Solicitar Orçamento</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 