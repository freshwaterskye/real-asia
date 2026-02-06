import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import WhyRealAsia from "./pages/WhyRealAsia";
import MbaTreks from "./pages/MbaTreks";
import K16Immersion from "./pages/K16Immersion";
import VirtualTours from "./pages/VirtualTours";
import AsiaInNorthAmerica from "./pages/AsiaInNorthAmerica";
import PlanYourTrip from "./pages/PlanYourTrip";
import FAQ from "./pages/FAQ";
import ForBusinessSchools from "./pages/ForBusinessSchools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/why-real-asia" element={<WhyRealAsia />} />
            <Route path="/mba-treks" element={<MbaTreks />} />
            <Route path="/k16-immersion" element={<K16Immersion />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/asia-in-north-america" element={<AsiaInNorthAmerica />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/for-business-schools" element={<ForBusinessSchools />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
