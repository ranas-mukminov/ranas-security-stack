import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RepositoryCard } from "./RepositoryCard"
import { repositories, categories } from "@/lib/repositories"

export function ToolsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredRepos = selectedCategory === "all" 
    ? repositories 
    : repositories.filter(repo => repo.category === selectedCategory)

  return (
    <section id="tools" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-mono font-semibold text-3xl md:text-4xl text-center mb-4">
          Инструменты
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Выберите категорию или просмотрите все доступные решения
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className="transition-all"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Инструменты в этой категории находятся в разработке
          </div>
        )}
      </div>
    </section>
  )
}