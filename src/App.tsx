
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import ProduceDetail from "./pages/ProduceDetail";
import About from "./pages/About";
import Seasonal from "./pages/Seasonal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet
        titleTemplate="%s | PickPerfect.org"
        defaultTitle="PickPerfect.org - Learn to Pick Perfect Every Time"
      >
        <meta name="description" content="Learn how to select the best quality produce with PickPerfect.org" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/produce/:slug" element={<ProduceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/seasonal" element={<Seasonal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
