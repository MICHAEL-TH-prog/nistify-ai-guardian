import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { EvidencePanel } from "../evidence/EvidencePanel";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isEvidencePanelOpen, setIsEvidencePanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header onToggleEvidencePanel={() => setIsEvidencePanelOpen(!isEvidencePanelOpen)} />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
        <EvidencePanel 
          isOpen={isEvidencePanelOpen} 
          onClose={() => setIsEvidencePanelOpen(false)} 
        />
      </div>
    </div>
  );
};