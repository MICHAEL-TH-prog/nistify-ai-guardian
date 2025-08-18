import { Bell, AlertTriangle, Shield, FileText, Clock } from "lucide-react";
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
import { Card } from "@/components/ui/card";

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
];

export const NotificationsDropdown = () => {
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
          {notifications.map((notification) => (
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
        <DropdownMenuItem className="text-center text-sm text-primary hover:text-primary-dark">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};