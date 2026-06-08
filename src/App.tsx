import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import ChatWidget from "./components/ChatWidget";

// ── Eagerly loaded (core pages, zero heavy deps) ───────────────────────────
import Home from "./pages/Home";
import Services from "./pages/Services";
import ProcessAudit from "./pages/ProcessAudit";
import Results from "./pages/Results";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Manufacturing from "./pages/industries/Manufacturing";
import FieldService from "./pages/industries/FieldService";
import ProfessionalServices from "./pages/industries/ProfessionalServices";

// ── Lazy loaded (contain heavy / problematic third-party deps) ─────────────
// Booking uses @calcom/embed-react which initialises module-level code that
// calls React hooks before any component mounts — lazy import defers that.
const Booking         = lazy(() => import("./pages/Booking"));
const HvacLanding     = lazy(() => import("./pages/HvacLanding"));
const Realtor         = lazy(() => import("./pages/Realtor"));
const RealEstate      = lazy(() => import("./pages/RealEstate"));
const Contact         = lazy(() => import("./pages/Contact"));
const Consultation    = lazy(() => import("./pages/Consultation"));
const Build           = lazy(() => import("./pages/Build"));
const DiscoveryCall   = lazy(() => import("./pages/DiscoveryCall"));
const HealthcareDemo  = lazy(() => import("./pages/HealthcareDemo"));
const PlayWithAI      = lazy(() => import("./pages/PlayWithAI"));
const Industries      = lazy(() => import("./pages/Industries"));
const LandingPage     = lazy(() => import("./pages/LandingPage"));
const AdminLogin      = lazy(() => import("./pages/admin/Login"));
const Dashboard       = lazy(() => import("./pages/admin/Dashboard"));
const ConsultationDashboard = lazy(() => import("./pages/admin/ConsultationDashboard"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ChatWidget />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            {/* Core routes */}
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

            {/* Ad landing page — no nav */}
            <Route path="/lp" element={<LandingPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
