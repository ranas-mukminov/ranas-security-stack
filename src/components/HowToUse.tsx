import { Card } from "@/components/ui/card"
import { Check } from "@phosphor-icons/react"

export function HowToUse() {
  const steps = [
    {
      number: "1",
      title: "Выберите сценарий",
      description: "Персональные данные, удалёнка, финмониторинг, ККТ, образование и т.д."
    },
    {
      number: "2",
      title: "Передайте ссылку ИТ-специалисту",
      description: "Это GitHub-репозитории с документацией"
    },
    {
      number: "3",
      title: "Если своих рук не хватает — я внедрю",
      description: "Автор оказывает платные услуги по внедрению"
    }
  ]

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-mono font-semibold text-2xl md:text-3xl text-center mb-10">
          Как этим пользоваться
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="p-6 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}