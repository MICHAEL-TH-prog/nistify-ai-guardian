import { useState } from "react";
import { Search, FileText, Shield, AlertTriangle, BarChart3 } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const searchData = [
  // Policies
  { id: 1, title: "Access Control Policy v2.1", type: "policy", icon: Shield },
  { id: 2, title: "Data Protection Policy", type: "policy", icon: Shield },
  { id: 3, title: "Incident Response Policy", type: "policy", icon: Shield },
  
  // Evidence
  { id: 4, title: "Security Training Certificates", type: "evidence", icon: FileText },
  { id: 5, title: "Vulnerability Scan Results", type: "evidence", icon: FileText },
  { id: 6, title: "Penetration Test Report", type: "evidence", icon: FileText },
  
  // Reports
  { id: 7, title: "Quarterly Risk Assessment", type: "report", icon: BarChart3 },
  { id: 8, title: "Compliance Status Report", type: "report", icon: BarChart3 },
  { id: 9, title: "Security Metrics Dashboard", type: "report", icon: BarChart3 },
  
  // Risks
  { id: 10, title: "Unpatched server vulnerability", type: "risk", icon: AlertTriangle },
  { id: 11, title: "Weak password policy", type: "risk", icon: AlertTriangle },
  { id: 12, title: "Insufficient backup procedures", type: "risk", icon: AlertTriangle },
];

export const SearchCommand = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full max-w-md justify-start text-sm text-muted-foreground bg-secondary border-0"
        onClick={() => setOpen(true)}
      >
        <Search className="w-4 h-4 mr-2" />
        Search policies, evidence, risks...
      </Button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search policies, evidence, risks..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Policies">
            {searchData
              .filter(item => item.type === "policy")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    console.log("Selected policy:", item.title);
                    setOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </CommandItem>
              ))}
          </CommandGroup>
          
          <CommandGroup heading="Evidence">
            {searchData
              .filter(item => item.type === "evidence")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    console.log("Selected evidence:", item.title);
                    setOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </CommandItem>
              ))}
          </CommandGroup>
          
          <CommandGroup heading="Reports">
            {searchData
              .filter(item => item.type === "report")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    console.log("Selected report:", item.title);
                    setOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </CommandItem>
              ))}
          </CommandGroup>
          
          <CommandGroup heading="Risks">
            {searchData
              .filter(item => item.type === "risk")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    console.log("Selected risk:", item.title);
                    setOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};