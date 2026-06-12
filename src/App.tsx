import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

// ── Lazy loaded ────────────────────────────────────────────────────────────
const HvacLanding     = lazy(() => import("./pages/HvacLanding"));
const Contact         = lazy(() => import("./pages/Contact"));
const Industries      = lazy(() => import("./pages/Industries"));
const Houston         = lazy(() => import("./pages/locations/Houston"));
const TheWoodlands    = lazy(() => import("./pages/locations/TheWoodlands"));
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

            {/* Niche / location landing pages */}
            <Route path="/hvac" element={<HvacLanding />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirects — removed off-brand / dead pages → main lead magnet */}
            <Route path="/realtor" element={<Navigate to="/process-audit" replace />} />
            <Route path="/real-estate" element={<Navigate to="/process-audit" replace />} />
            <Route path="/booking" element={<Navigate to="/process-audit" replace />} />
            <Route path="/consultation" element={<Navigate to="/process-audit" replace />} />
            <Route path="/build" element={<Navigate to="/process-audit" replace />} />
            <Route path="/discovery-call" element={<Navigate to="/process-audit" replace />} />
            <Route path="/healthcare-demo" element={<Navigate to="/process-audit" replace />} />
            <Route path="/playwithai" element={<Navigate to="/process-audit" replace />} />
            <Route path="/lp" element={<Navigate to="/process-audit" replace />} />

            {/* Location pages */}
            <Route path="/houston" element={<Houston />} />
            <Route path="/the-woodlands" element={<TheWoodlands />} />

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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
