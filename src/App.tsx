import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Setup from "./pages/Setup";
import Govern from "./pages/Govern";
import Identify from "./pages/Identify";
import Protect from "./pages/Protect";
import Detect from "./pages/Detect";
import Respond from "./pages/Respond";
import Recover from "./pages/Recover";
import Assessment from "./pages/Assessment";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/govern" element={<Govern />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/protect" element={<Protect />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/respond" element={<Respond />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
