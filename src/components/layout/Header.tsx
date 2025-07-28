import { Bell, Upload, User, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onToggleEvidencePanel: () => void;
}

export const Header = ({ onToggleEvidencePanel }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search policies, evidence, risks..." 
              className="pl-10 bg-secondary border-0"
            />
          </div>
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
          
          <Button variant="outline" size="sm" className="relative">
            <MessageSquare className="w-4 h-4" />
            <span className="ml-2">AI Assistant</span>
          </Button>
          
          <Button variant="outline" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-destructive" />
          </Button>
          
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
            <span className="ml-2">Admin</span>
          </Button>
        </div>
      </div>
    </header>
  );
};