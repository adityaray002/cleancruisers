import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import MonthlyPricing from "./pages/MonthlyPricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { HelmetProvider } from "react-helmet-async";
import CarWashDwarka from "./pages/CarWashDwarka";
import CarWashJanakpuri from "./pages/CarWashJanakpuri";
const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
  //   <TooltipProvider>
  //     <Toaster />
  //     <Sonner />
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Index />} />
  //         <Route path="/booking" element={<Booking />} />
  //         <Route path="/auth" element={<Auth />} />
  //         <Route path="/monthly-pricing" element={<MonthlyPricing />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </TooltipProvider>
  // </QueryClientProvider>

  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/monthly-pricing" element={<MonthlyPricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
             <Route path="/car-wash-in-dwarka" element={<CarWashDwarka />} />
            <Route path="/car-wash-services-in-janakpuri" element={<CarWashJanakpuri />} />
           <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
