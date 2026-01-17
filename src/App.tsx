import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ToolsPage from "./pages/ToolsPage";
import PricingPage from "./pages/PricingPage";
import DonationReceiptTool from "./pages/tools/DonationReceiptTool";
import MemberRegistrationTool from "./pages/tools/MemberRegistrationTool";
import MeetingMinutesTool from "./pages/tools/MeetingMinutesTool";
import VolunteerIdTool from "./pages/tools/VolunteerIdTool";
import ResolutionTool from "./pages/tools/ResolutionTool";
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
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/tools/donation-receipt" element={<DonationReceiptTool />} />
          <Route path="/tools/member-registration" element={<MemberRegistrationTool />} />
          <Route path="/tools/meeting-minutes" element={<MeetingMinutesTool />} />
          <Route path="/tools/volunteer-id" element={<VolunteerIdTool />} />
          <Route path="/tools/resolution" element={<ResolutionTool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
