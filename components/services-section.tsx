"use client"

import { Shield, Stethoscope, ClipboardCheck, Users, Building, Phone } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"

const servicesData = {
  safety: {
    title: "Segurança do Trabalho",
    icon: Shield,
    description: "Avaliação de riscos, implementação de medidas preventivas e treinamentos especializados.",
    details: [
      "PGR (Programa de Gerenciamento de Riscos) NR 1",
      "Gerenciamento do PGR (Programa de Gerenciamento de Riscos) NR 1",
      "Laudo Técnico das Condições Ambientais do Trabalho (LTCAT)",
      "Laudo de Insalubridade - NR 15",
      "Laudo de Periculosidade - NR 16",
      "Análise Ergonômica das Atividades – NR 17",
      "Laudo de Caldeira e Vasos Sob Pressão – NR 13",
      "Prontuário das Instalações Elétricas – NR 10",
      "Elaboração de Procedimentos Operacionais – NR 1",
      "Elaboração de APR - Análise Preliminar de Riscos",
      "Elaboração de PT - Permissão de Trabalho",
      "Orientação para implementação da CIPA – NR 5",
      "Auditoria interna de documentações"
    ]
  },
  medical: {
    title: "Medicina Ocupacional",
    icon: Stethoscope,
    description: "Exames admissionais, periódicos, demissionais e programas de saúde ocupacional.",
    details: [
      "Implantação e Coordenação do PCMSO",
      "Exames Admissionais, retorno ao trabalho, mudança de função, periódicos e demissionais",
      "Exames Complementares",
      "Atendimentos em clínicas credenciadas",
      "Avaliação clínica com ênfase em perícias médicas",
      "Convênio com laboratório de análises clínicas"
    ]
  },
  documentation: {
    title: "Documentação Legal",
    icon: ClipboardCheck,
    description: "Elaboração de PPRA, PCMSO, LTCAT, PPP e outros documentos exigidos pela legislação.",
    details: [
      "PPRA (Programa de Prevenção de Riscos Ambientais)",
      "PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
      "LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)",
      "PPP (Perfil Profissiográfico Previdenciário)",
      "PPE (Programa de Proteção Respiratória)",
      "PCA (Programa de Conservação Auditiva)",
      "PCMAT (Programa de Condições de Meio Ambiente do Trabalho)"
    ]
  },
  training: {
    title: "Treinamentos",
    icon: Users,
    description: "Capacitação em NRs, primeiros socorros, brigada de incêndio e outros temas relacionados.",
    details: [
      "CIPA (componentes / designado) (NR 05)",
      "Uso, Conservação e Higienização de EPI´s (NR 06)",
      "Segurança em Serviços e Instalações Elétricas (NR 10)",
      "Operador de Empilhadeira (NR 11)",
      "Ponte Rolante (NR 11)",
      "Brigada de Incêndio",
      "Espaço confinado Trabalhador, vigia e supervisor de entrada (NR 33)",
      "Trabalho em Altura (NR 35)",
      "Ergonomia: Técnicas corretas de Levantamento de Peso (NR 17)",
      "Direção Segura",
      "Segurança no manuseio de produtos químicos",
      "Prevenção de Acidentes (NR 01)",
      "Integração de Segurança (NR 01)",
      "SIPAT (Semana Interna de Prevenção a Acidentes do Trabalho)"
    ]
  },
  consulting: {
    title: "Consultoria Empresarial",
    icon: Building,
    description: "Orientação para adequação às normas e legislações vigentes em segurança do trabalho.",
    details: [
      "Avaliações ambientais - Higiene Ocupacional",
      "Assessoria na elaboração de Mapa de Riscos – NR 5",
      "Renovação de AVCB e CLCB",
      "Elaboração de PPCI (Programa de Prevenção de Combate a Incêndio)",
      "Estudo e proposição de instalação de EPC",
      "Plano de Abandono",
      "Plano de Atendimento a Emergências",
      "Avaliação de Ruído em áreas Habitadas (PSIU)",
      "Sinalização de Segurança",
      "Palestras diversas (AIDS / TABAGISMO / DROGAS / ALCOOLISMO)",
      "Realização de Ensaio de Vedação (FIT TEST)",
      "Realização de Sistema de Validação de Atenuação Individual (E-A-Rfit)",
      "Acompanhamento técnico especializado de equipes"
    ]
  },
  personalized: {
    title: "Atendimento Personalizado",
    icon: Phone,
    description: "Soluções adaptadas às necessidades específicas de cada empresa e setor.",
    details: [
      "Atendimento personalizado para cada setor",
      "Soluções específicas para sua empresa",
      "Acompanhamento técnico especializado",
      "Suporte contínuo",
      "Atendimento em horário comercial",
      "Resposta rápida às demandas",
      "Equipe técnica multidisciplinar"
    ]
  }
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<keyof typeof servicesData | null>(null)

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossos Serviços</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Oferecemos soluções completas em segurança do trabalho e medicina ocupacional
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {Object.entries(servicesData).map(([key, service]) => {
            const Icon = service.icon
            return (
              <div
                key={key}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedService(key as keyof typeof servicesData)}
              >
                <Icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService ? servicesData[selectedService].title : ""}
      >
        <div className="space-y-4">
          <p className="text-muted-foreground">
            {selectedService ? servicesData[selectedService].description : ""}
          </p>
          <div>
            <h3 className="font-semibold mb-2">Serviços Inclusos:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {selectedService &&
                servicesData[selectedService].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </section>
  )
} 