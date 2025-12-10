import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"

export function Hero() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools')
    toolsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
          Ranas Security Stack для российского бизнеса
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Подборка open-source инструментов, которые помогают закрывать требования 152-ФЗ, КИИ, финмониторинга и ИБ без лишней бюрократии. Выбираете модуль, даёте его своему технарю или зовёте меня внедрить под ключ.
        </p>
        
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
          <span>Российский контекст</span>
          <span>•</span>
          <span>Open source</span>
          <span>•</span>
          <span>Понятно бизнесу</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToTools} className="gap-2">
            Посмотреть инструменты
            <ArrowRight size={20} weight="bold" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://run-as-daemon.ru#services">
              Заказать внедрение
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}