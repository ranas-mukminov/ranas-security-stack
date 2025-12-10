import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubLogo } from "@phosphor-icons/react"
import type { Repository } from "@/lib/repositories"

interface RepositoryCardProps {
  repo: Repository
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <Card className="p-6 flex flex-col gap-4 hover:shadow-lg transition-all hover:border-primary/20">
      <div>
        <h3 className="font-semibold text-xl mb-1">{repo.name}</h3>
        <p className="text-xs text-muted-foreground font-mono">
          GitHub: {repo.githubRepo}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-foreground/80">
        {repo.description}
      </p>

      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Для кого:</p>
        <ul className="text-sm space-y-1">
          {repo.forWhom.map((person) => (
            <li key={person} className="text-foreground/70">• {person}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {repo.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t flex flex-col gap-2">
        <Button asChild className="w-full gap-2">
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            <GithubLogo size={20} weight="fill" />
            Открыть на GitHub
          </a>
        </Button>
        <a 
          href="https://run-as-daemon.ru#services"
          className="text-xs text-center text-muted-foreground hover:text-primary transition-colors"
        >
          Нужна помощь с внедрением?
        </a>
      </div>
    </Card>
  )
}