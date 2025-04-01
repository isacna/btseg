export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Sobre a BTSEG</h2>
            <p className="text-muted-foreground md:text-lg">
              A BTSEG ASSESSORIA EM SEGURANÇA DO TRABALHO é uma empresa jovem e moderna especializada na prestação
              de serviços relacionados à Segurança do trabalho e Medicina ocupacional.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Com altíssima qualidade nos serviços prestados, dispomos de estrutura, atendimento personalizado e
              responsabilidade para atender às necessidades de sua empresa com eficiência e competência, priorizando
              a avaliação técnica e metodológica na atuação preventiva.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Através de profissionais qualificados e com proficiência adequada em diversos temas, clínicas
              credenciadas e à disposição para melhor atender aos clientes e aparelhagens modernas para realizar
              medições e amostragens a fim de quantificar os diversos fatores insalubres que possam existir no
              ambiente laboral, colaboramos para que sua empresa alcance os níveis e requisitos exigidos pela
              legislação vigente nos quesitos segurança, saúde e qualidade de vida dos colaboradores.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg bg-background p-8 shadow-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Proporcionar soluções eficientes em segurança do trabalho e medicina ocupacional, contribuindo
                  para ambientes laborais mais seguros e saudáveis.
                </p>
                <h3 className="text-2xl font-bold">Nossos Valores</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Excelência técnica</li>
                  <li>Compromisso com resultados</li>
                  <li>Ética profissional</li>
                  <li>Inovação constante</li>
                  <li>Responsabilidade social</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 