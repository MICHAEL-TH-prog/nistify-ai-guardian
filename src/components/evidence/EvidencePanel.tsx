import { X, Upload, FileText, Image, File, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EvidencePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const evidenceTypes = [
  { type: "Policy", icon: FileText, color: "bg-blue-100 text-blue-700" },
  { type: "Log", icon: File, color: "bg-green-100 text-green-700" },
  { type: "Config", icon: FileText, color: "bg-purple-100 text-purple-700" },
  { type: "Screenshot", icon: Image, color: "bg-orange-100 text-orange-700" },
];

const recentEvidence = [
  {
    name: "Access Control Policy v2.1",
    type: "Policy",
    module: "Protect",
    status: "verified",
    uploadedAt: "2 hours ago"
  },
  {
    name: "Firewall Configuration",
    type: "Config",
    module: "Protect",
    status: "pending",
    uploadedAt: "1 day ago"
  },
  {
    name: "Security Training Records",
    type: "Log",
    module: "Protect",
    status: "verified",
    uploadedAt: "3 days ago"
  },
];

export const EvidencePanel = ({ isOpen, onClose }: EvidencePanelProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-xl z-50 flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Evidence Vault</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="p-4 border-b border-border">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {evidenceTypes.map((evidence) => {
              const Icon = evidence.icon;
              return (
                <Button
                  key={evidence.type}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center space-y-1"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{evidence.type}</span>
                </Button>
              );
            })}
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag & drop files here or click to browse
            </p>
            <Button size="sm" className="text-xs">
              Choose Files
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <h3 className="text-sm font-medium text-foreground mb-3">Recent Evidence</h3>
        <div className="space-y-3">
          {recentEvidence.map((item, index) => (
            <Card key={index} className="p-3">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-foreground line-clamp-2">
                  {item.name}
                </h4>
                {item.status === "verified" ? (
                  <Check className="w-4 h-4 text-success flex-shrink-0 ml-2" />
                ) : (
                  <div className="w-2 h-2 bg-warning rounded-full flex-shrink-0 ml-2 mt-1" />
                )}
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {item.module}
                  </Badge>
                </div>
                <span className="text-muted-foreground">{item.uploadedAt}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};