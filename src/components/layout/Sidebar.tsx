import { NavLink } from "react-router-dom";
import { 
  Shield, 
  Settings, 
  Search, 
  Lock, 
  Eye, 
  AlertTriangle, 
  RotateCcw,
  BarChart3,
  FileText,
  Users,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Organization Setup",
    href: "/setup",
    icon: Settings,
    description: "Company Profile & Scope"
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
    description: "User Management"
  },
  {
    title: "Dashboard",
    href: "/",
    icon: BarChart3,
    description: "Overview & Analytics"
  },
  {
    title: "Govern",
    href: "/govern",
    icon: Shield,
    description: "Policies & Governance",
    color: "nist-govern"
  },
  {
    title: "Identify",
    href: "/identify",
    icon: Search,
    description: "Asset & Risk Management",
    color: "nist-identify"
  },
  {
    title: "Protect",
    href: "/protect",
    icon: Lock,
    description: "Access Control & Training",
    color: "nist-protect"
  },
  {
    title: "Detect",
    href: "/detect",
    icon: Eye,
    description: "Monitoring & Detection",
    color: "nist-detect"
  },
  {
    title: "Respond",
    href: "/respond",
    icon: AlertTriangle,
    description: "Incident Response",
    color: "nist-respond"
  },
  {
    title: "Recover",
    href: "/recover",
    icon: RotateCcw,
    description: "Recovery Planning",
    color: "nist-recover"
  },
  {
    title: "Assessment",
    href: "/assessment",
    icon: Target,
    description: "Maturity & Scoring"
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
    description: "Compliance Reports"
  }
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border shadow-card min-h-screen">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Certify GRC</h1>
            <p className="text-sm text-muted-foreground">NIST CSF 2.0</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-secondary hover:shadow-sm",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-cyber"
                    : "text-foreground hover:text-foreground"
                )
              }
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-xs opacity-75">{item.description}</div>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};