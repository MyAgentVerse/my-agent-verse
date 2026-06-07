// === FILE: src/App.tsx ===
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ProcessAudit from "./pages/ProcessAudit";
import Results from "./pages/Results";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Industry pages
import Manufacturing from "./pages/industries/Manufacturing";
import FieldService from "./pages/industries/FieldService";
import ProfessionalServices from "./pages/industries/ProfessionalServices";

// Legacy / existing pages
import HvacLanding from "./pages/HvacLanding";
import Realtor from "./pages/Realtor";
import RealEstate from "./pages/RealEstate";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import Build from "./pages/Build";
import DiscoveryCall from "./pages/DiscoveryCall";
import HealthcareDemo from "./pages/HealthcareDemo";
import PlayWithAI from "./pages/PlayWithAI";
import Industries from "./pages/Industries";

// Admin
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ConsultationDashboard from "./pages/admin/ConsultationDashboard";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

// Voice agent
import ElevenLabsVoiceAgent from "./components/ElevenLabsVoiceAgent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ElevenLabsVoiceAgent />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process-audit" element={<ProcessAudit />} />
          <Route path="/results" element={<Results />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Industry routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/field-service" element={<FieldService />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />

          {/* Legacy routes */}
          <Route path="/hvac" element={<HvacLanding />} />
          <Route path="/realtor" element={<Realtor />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/build" element={<Build />} />
          <Route path="/discovery-call" element={<DiscoveryCall />} />
          <Route path="/healthcare-demo" element={<HealthcareDemo />} />
          <Route path="/playwithai" element={<PlayWithAI />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/consultations"
            element={
              <ProtectedRoute>
                <ConsultationDashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
