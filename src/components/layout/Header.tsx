import { Upload, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchCommand } from "../header/SearchCommand";
import { NotificationsDropdown } from "../header/NotificationsDropdown";
import { AdminProfileDropdown } from "../header/AdminProfileDropdown";

interface HeaderProps {
  onToggleEvidencePanel: () => void;
}

export const Header = ({ onToggleEvidencePanel }: HeaderProps) => {
  return (
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
          
          <Button variant="outline" size="sm" className="relative">
            <MessageSquare className="w-4 h-4" />
            <span className="ml-2">AI Assistant</span>
          </Button>
          
          <NotificationsDropdown />
          
          <AdminProfileDropdown />
        </div>
      </div>
    </header>
  );
};