import { User, Settings, Bell, LogOut, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AdminProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <User className="w-4 h-4" />
          <span className="ml-2">Admin</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => console.log("Profile settings")}>
          <User className="w-4 h-4 mr-2" />
          Profile Settings
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => console.log("Account preferences")}>
          <Settings className="w-4 h-4 mr-2" />
          Account Preferences
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => console.log("Notification settings")}>
          <Bell className="w-4 h-4 mr-2" />
          Notification Settings
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => console.log("Security settings")}>
          <Shield className="w-4 h-4 mr-2" />
          Security Settings
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => console.log("Help & Support")}>
          <HelpCircle className="w-4 h-4 mr-2" />
          Help & Support
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => console.log("Logout")}
          className="text-destructive focus:text-destructive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};