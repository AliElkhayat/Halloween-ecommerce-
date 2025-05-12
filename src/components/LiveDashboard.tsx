import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Minimize2,
  Maximize2,
  Send,
  Bot,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Define message types for better type safety
interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function LiveDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Welcome to Spectral Store! I'm SpectralBot, your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const generateAIResponse = (userMessage: string) => {
    const input = userMessage.toLowerCase();

    setIsTyping(true);

    const thinkingTime = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      let response = "";

      if (
        input.includes("hello") ||
        input.includes("hi") ||
        input.includes("hey")
      ) {
        response =
          "Hello there! How can I assist you with your shopping today?";
      } else if (input.includes("costume") || input.includes("halloween")) {
        response =
          "We have a great selection of Halloween costumes! Are you looking for something specific? We have categories for adults, children, couples, and even pets!";
      } else if (
        input.includes("price") ||
        input.includes("cost") ||
        input.includes("expensive")
      ) {
        response =
          "Our costumes range from $19.99 for basic options to $89.99 for premium costumes. Would you like me to suggest something in a specific price range?";
      } else if (input.includes("shipping") || input.includes("delivery")) {
        response =
          "We offer standard shipping (3-5 business days) and express shipping (1-2 business days). Orders over $50 qualify for free standard shipping!";
      } else if (input.includes("thanks") || input.includes("thank you")) {
        response =
          "You're welcome! Is there anything else I can help you with today?";
      } else if (input.includes("bye") || input.includes("goodbye")) {
        response =
          "Thank you for chatting with SpectralBot! Feel free to return if you have more questions. Happy Halloween shopping!";
      } else {
        const defaultResponses = [
          "I understand you're interested in our Halloween products. Could you tell me more about what you're looking for?",
          "That's a great question! Let me help you find the perfect Halloween items for your needs.",
          "Thanks for your message. Would you like me to suggest some of our most popular Halloween items?",
          "I'd be happy to assist with that. Could you provide a bit more detail about what you're looking for?",
        ];

        response =
          defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }

      const botMessage: Message = {
        id: generateId(),
        content: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: generateId(),
        content: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputMessage("");

      generateAIResponse(inputMessage);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-halloween-purple text-white p-4 rounded-full shadow-lg hover:bg-halloween-purple-dark transition-colors"
          aria-label="Open chat dashboard"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <div
            className={`bg-card border border-halloween-purple/30 rounded-lg shadow-lg w-80 md:w-96 overflow-hidden transition-all duration-300 ${
              isMinimized ? "h-14" : "h-96"
            }`}
          >
            <div className="bg-halloween-purple p-3 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-creepster text-lg">SpectralBot</h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/20 p-1 rounded-full"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>
                <CollapsibleTrigger asChild>
                  <button className="hover:bg-white/20 p-1 rounded-full">
                    <X className="h-4 w-4" />
                  </button>
                </CollapsibleTrigger>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-[calc(100%-8rem)] p-4 overflow-y-auto bg-muted/30">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            msg.sender === "user"
                              ? "bg-halloween-purple/10 rounded-tr-none"
                              : "bg-muted rounded-tl-none"
                          } max-w-[80%]`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <span className="text-xs text-muted-foreground block mt-1">
                            {msg.sender === "user" ? "You" : "SpectralBot"} •{" "}
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                          <div className="flex space-x-2">
                            <div
                              className="w-2 h-2 bg-halloween-purple rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-halloween-purple rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-halloween-purple rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <form
                  onSubmit={handleSendMessage}
                  className="p-2 border-t flex gap-2"
                >
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="min-h-10 resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-halloween-purple hover:bg-halloween-purple-dark h-10 w-10"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
