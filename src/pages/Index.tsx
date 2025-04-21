import { Neuron } from "@/components/Neuron";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <header className="container py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Neuron className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">kolyaGPT</span>
          </div>
          <Button asChild variant="outline">
            <Link to="/neuro">Открыть kolyaGPT</Link>
          </Button>
        </nav>
      </header>
      
      <main className="container py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Создайте свою собственную <span className="text-primary">kolyaGPT</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Используйте нашу платформу для общения с искусственным интеллектом, ответа на вопросы и помощи в решении задач.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/neuro">Начать общение</Link>
              </Button>
              <Button variant="outline" size="lg">Узнать больше</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-card p-8 rounded-lg shadow-lg border">
                <div className="flex justify-center mb-4">
                  <Neuron className="h-16 w-16 text-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">kolyaGPT готов помочь</h3>
                <p className="text-muted-foreground text-center">Задайте вопрос и получите мгновенный ответ</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;