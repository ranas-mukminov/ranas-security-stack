import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-lg">Run-as-daemon.ru</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-mono font-semibold text-foreground">Security Stack</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="https://run-as-daemon.ru" className="text-sm text-foreground hover:text-primary transition-colors">
            Главная
          </a>
          <a href="https://run-as-daemon.ru#services" className="text-sm text-foreground hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="https://github.com/ranas-mukminov" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://run-as-daemon.ru#contacts" className="text-sm text-foreground hover:text-primary transition-colors">
            Контакты
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="https://run-as-daemon.ru#services">
              Нужна помощь с внедрением?
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}