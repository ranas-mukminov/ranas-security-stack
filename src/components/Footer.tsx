import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-mono font-semibold mb-3">Run-as-daemon.ru</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Инженерные решения для безопасности и соответствия требованиям российского законодательства
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://run-as-daemon.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="https://run-as-daemon.ru#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="https://github.com/ranas-mukminov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://run-as-daemon.ru#contacts" className="hover:text-primary transition-colors">
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 Run-as-daemon.ru. Все инструменты распространяются как open source.</p>
        </div>
      </div>
    </footer>
  )
}