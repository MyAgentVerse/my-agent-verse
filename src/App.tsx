import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HvacLanding from "./pages/HvacLanding";
import Realtor from "./pages/Realtor";
import RealEstate from "./pages/RealEstate";
import Industries from "./pages/Industries";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Consultation from "./pages/Consultation";
import Build from "./pages/Build";
import DiscoveryCall from "./pages/DiscoveryCall";
import NotFound from "./pages/NotFound";
import ElevenLabsVoiceAgent from "./components/ElevenLabsVoiceAgent";
import AdminLogin from "./pages/admin/Login";
import ConsultationDashboard from "./pages/admin/ConsultationDashboard";
import Dashboard from "./pages/admin/Dashboard";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hvac" element={<HvacLanding />} />
          <Route path="/realtor" element={<Realtor />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/build" element={<Build />} />
          <Route path="/discovery-call" element={<DiscoveryCall />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/consultations" element={
            <ProtectedRoute>
              <ConsultationDashboard />
            </ProtectedRoute>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ElevenLabsVoiceAgent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
