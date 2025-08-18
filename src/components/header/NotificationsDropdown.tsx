import { useState } from "react";
import { Bell, AlertTriangle, Shield, FileText, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    id: 1,
    type: "risk",
    title: "High Risk Detected",
    message: "Unpatched vulnerability found in server infrastructure",
    time: "2 hours ago",
    icon: AlertTriangle,
    priority: "high"
  },
  {
    id: 2,
    type: "policy",
    title: "Policy Update Required",
    message: "Access Control Policy needs annual review",
    time: "1 day ago",
    icon: Shield,
    priority: "medium"
  },
  {
    id: 3,
    type: "incident",
    title: "Security Incident Resolved",
    message: "Suspicious login attempt successfully blocked",
    time: "2 days ago",
    icon: FileText,
    priority: "low"
  },
  {
    id: 4,
    type: "compliance",
    title: "Compliance Deadline Approaching",
    message: "SOC 2 audit evidence submission due in 7 days",
    time: "3 days ago",
    icon: Clock,
    priority: "medium"
  },
  {
    id: 5,
    type: "risk",
    title: "Weak Password Detected",
    message: "Multiple users using weak passwords detected",
    time: "4 days ago",
    icon: AlertTriangle,
    priority: "medium"
  },
  {
    id: 6,
    type: "policy",
    title: "New Policy Published",
    message: "Data Retention Policy v3.0 has been published",
    time: "5 days ago",
    icon: Shield,
    priority: "low"
  },
  {
    id: 7,
    type: "incident",
    title: "Failed Login Attempts",
    message: "Increased failed login attempts from unusual locations",
    time: "6 days ago",
    icon: FileText,
    priority: "medium"
  },
  {
    id: 8,
    type: "compliance",
    title: "Training Completion Required",
    message: "Annual security training deadline approaching",
    time: "1 week ago",
    icon: Clock,
    priority: "low"
  },
];

export const NotificationsDropdown = () => {
  const [showAllDialog, setShowAllDialog] = useState(false);
  const unreadCount = notifications.filter(n => n.priority === "high").length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-destructive" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="max-h-64 overflow-y-auto">
          {notifications.slice(0, 4).map((notification) => (
            <DropdownMenuItem key={notification.id} className="p-0">
              <Card className="w-full border-0 shadow-none hover:bg-secondary/50">
                <div className="p-3 flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.priority === "high" ? "bg-destructive" :
                    notification.priority === "medium" ? "bg-warning" : "bg-primary"
                  }`} />
                  <notification.icon className={`w-4 h-4 mt-1 ${
                    notification.priority === "high" ? "text-destructive" :
                    notification.priority === "medium" ? "text-warning" : "text-primary"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </Card>
            </DropdownMenuItem>
          ))}
        </div>
        
        <DropdownMenuSeparator />
        <Dialog open={showAllDialog} onOpenChange={setShowAllDialog}>
          <DialogTrigger asChild>
            <DropdownMenuItem 
              className="text-center text-sm text-primary hover:text-primary-dark cursor-pointer"
              onSelect={(e) => {
                e.preventDefault();
                setShowAllDialog(true);
              }}
            >
              View all notifications
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] bg-background border-border">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                All Notifications
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllDialog(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-full max-h-[60vh] pr-4">
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <Card key={notification.id} className="p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                        notification.priority === "high" ? "bg-destructive" :
                        notification.priority === "medium" ? "bg-warning" : "bg-primary"
                      }`} />
                      <notification.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        notification.priority === "high" ? "text-destructive" :
                        notification.priority === "medium" ? "text-warning" : "text-primary"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-foreground">
                            {notification.title}
                          </p>
                          <Badge 
                            variant={
                              notification.priority === "high" ? "destructive" :
                              notification.priority === "medium" ? "secondary" : "outline"
                            }
                            className="text-xs ml-2"
                          >
                            {notification.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {notification.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};