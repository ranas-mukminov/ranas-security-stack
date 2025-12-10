import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HowToUse } from "@/components/HowToUse"
import { ToolsGrid } from "@/components/ToolsGrid"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowToUse />
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App