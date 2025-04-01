import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Entre em Contato</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Preencha o formulário abaixo para solicitar um orçamento ou mais informações sobre nossos serviços.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
} 