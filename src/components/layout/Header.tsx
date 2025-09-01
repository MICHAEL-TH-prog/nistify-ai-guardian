import { useState } from "react";
import { Upload, MessageSquare, Send, Bot, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SearchCommand } from "../header/SearchCommand";
import { NotificationsDropdown } from "../header/NotificationsDropdown";
import { AdminProfileDropdown } from "../header/AdminProfileDropdown";

interface HeaderProps {
  onToggleEvidencePanel: () => void;
}

type Message = {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export const Header = ({ onToggleEvidencePanel }: HeaderProps) => {
  const { toast } = useToast();
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your cybersecurity AI assistant. I can help you with NIST CSF compliance, risk assessments, security recommendations, and more. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "assistant",
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("risk") || input.includes("vulnerability")) {
      return "I can help you with risk assessment. Based on your current dashboard, I notice you have 23 active vulnerabilities. Would you like me to help prioritize them or provide remediation guidance?";
    }
    
    if (input.includes("nist") || input.includes("compliance")) {
      return "For NIST CSF 2.0 compliance, I recommend focusing on your Identify function first. Your current completion is around 73%. The areas that need attention are supplier risk assessment and vulnerability disclosure processes.";
    }
    
    if (input.includes("policy") || input.includes("govern")) {
      return "I can assist with governance and policy management. Your organization has several policies due for review. Would you like me to help create a review schedule or draft policy updates?";
    }
    
    if (input.includes("incident") || input.includes("response")) {
      return "For incident response, I can help you create playbooks, analyze current incidents, or improve your response procedures. Do you have a specific incident type you'd like to focus on?";
    }
    
    return "I understand you're asking about cybersecurity. I can help with risk assessments, compliance frameworks like NIST CSF 2.0, security policies, incident response, and more. Could you be more specific about what you need assistance with?";
  };

  return (
    <>
      <header className="bg-card border-b border-border shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <SearchCommand />
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleEvidencePanel}
              className="flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Evidence</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="relative"
              onClick={() => setAiAssistantOpen(true)}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="ml-2">AI Assistant</span>
            </Button>
            
            <NotificationsDropdown />
            
            <AdminProfileDropdown />
          </div>
        </div>
      </header>

      {/* AI Assistant Dialog */}
      <Dialog open={aiAssistantOpen} onOpenChange={setAiAssistantOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] bg-background flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Bot className="w-5 h-5 mr-2 text-primary" />
              Cybersecurity AI Assistant
            </DialogTitle>
            <DialogDescription>
              Get expert guidance on NIST CSF compliance, risk management, and security best practices.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-1 pr-4 max-h-[50vh]">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === "user" 
                          ? "text-primary-foreground/70" 
                          : "text-muted-foreground"
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex items-center space-x-2 pt-4 border-t">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about cybersecurity, compliance, risks..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};