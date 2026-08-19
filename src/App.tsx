import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import CarWashSouthDelhi from "./pages/CarWashSouthDelhi";
import CarWashSouthDelhiNew from "./pages/CarWashSouthDelhiNew";
import CarWashEastDelhi from "./pages/CarWashEastDelhi";
import CarWashNewDelhi from "./pages/CarWashNewDelhi";
import CarWashNoida from "./pages/CarWashNoida";
import CarWashGurgaon from "./pages/CarWashGurgaon";
import CarWashPriceCalculator from "./pages/CarWashPriceCalculator";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPostEditor from "./pages/admin/AdminPostEditor";

const queryClient = new QueryClient();

const App = () => {

  // ✅ Tell React Snap when page is ready
  useEffect(() => {
  // Tell react-snap page is ready
  if (typeof window !== "undefined") {
    (window as any).snapSaveState = () => Promise.resolve();
  }
}, []);

return (
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
          <Route path="/doorstep-car-wash-services-in-south-delhi/" element={<CarWashSouthDelhiNew/>} />
          <Route path="/car-wash-in-south-delhi/" element={<CarWashSouthDelhi/>} />
          <Route path="/doorstep-car-wash-services-in-east-delhi/" element={<CarWashEastDelhi/>} />
          <Route path="/car-wash-in-new-delhi/" element={<CarWashNewDelhi/>} />
          <Route path="/car-wash-in-noida/" element={<CarWashNoida />} />
          <Route path="/car-wash-in-gurgaon/" element={<CarWashGurgaon />} />
          {/* Not linked from header/homepage yet — direct URL only, per request. Link it in once approved. */}
          <Route path="/car-wash-price-calculator" element={<CarWashPriceCalculator />} />

          <Route path="/admin/*" element={<AdminAuthProvider><Outlet /></AdminAuthProvider>}>
            <Route path="login" element={<AdminLogin />} />
            <Route index element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="new" element={<ProtectedRoute><AdminPostEditor /></ProtectedRoute>} />
            <Route path="edit/:slug" element={<ProtectedRoute><AdminPostEditor /></ProtectedRoute>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
