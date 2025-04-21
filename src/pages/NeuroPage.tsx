import { useState } from "react";
import { Neuron } from "@/components/Neuron";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NeuroPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{type: "user" | "ai", content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Добавляем сообщение пользователя
    setMessages(prev => [...prev, {type: "user", content: input}]);
    
    // Симулируем обработку запроса нейросетью
    setIsLoading(true);
    setTimeout(() => {
      // Генерируем ответ нейросети
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, {type: "ai", content: aiResponse}]);
      setIsLoading(false);
    }, 1500);
    
    setInput("");
  };

  // Простая функция для генерации ответа (имитация нейросети)
  const getAIResponse = (question: string): string => {
    const responses = [
      "Я могу помочь вам разобраться с этим вопросом.",
      "Интересный вопрос! Давайте разберёмся вместе.",
      "На основе моих данных могу сказать следующее...",
      "Мне нужно больше информации, чтобы дать точный ответ.",
      "Спасибо за ваш вопрос! Вот что я думаю по этому поводу."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30 flex flex-col">
      <header className="container py-4">
        <nav>
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Назад
            </Link>
          </Button>
        </nav>
      </header>
      
      <main className="container flex-1 py-6 flex flex-col max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Neuron className="h-8 w-8" />
          <h1 className="text-2xl font-bold">kolyaGPT</h1>
        </div>
        
        <Card className="flex-1 mb-4 overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>Общение с kolyaGPT</CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto pb-0">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <Neuron className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">Начните диалог с kolyaGPT</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))
              )}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-4 py-2 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="pt-4">
            <form onSubmit={handleSubmit} className="w-full flex gap-2">
              <Textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите ваш вопрос..."
                className="resize-none"
                rows={1}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default NeuroPage;