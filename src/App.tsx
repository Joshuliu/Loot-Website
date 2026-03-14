import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Features = lazy(() => import("./pages/Features"));
const WhyLoot = lazy(() => import("./pages/WhyLoot"));
const SplitBills = lazy(() => import("./pages/SplitBills"));
const SplitRestaurantBill = lazy(() => import("./pages/SplitRestaurantBill"));
const SplitRoommates = lazy(() => import("./pages/SplitRoommates"));
const SplitTravel = lazy(() => import("./pages/SplitTravel"));
const BestBillSplittingApp = lazy(() => import("./pages/BestBillSplittingApp"));
const BillSplittingGuide = lazy(() => import("./pages/BillSplittingGuide"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogHowToSplitABill = lazy(() => import("./pages/BlogHowToSplitABill"));
const BlogHowToTrackSharedExpenses = lazy(() => import("./pages/BlogHowToTrackSharedExpenses"));
const BlogHowToSplitRent = lazy(() => import("./pages/BlogHowToSplitRent"));
const BlogGroupExpenseManagement = lazy(() => import("./pages/BlogGroupExpenseManagement"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/why-loot" element={<WhyLoot />} />
            <Route path="/split-bills" element={<SplitBills />} />
            <Route path="/split-restaurant-bill" element={<SplitRestaurantBill />} />
            <Route path="/split-expenses-with-roommates" element={<SplitRoommates />} />
            <Route path="/split-travel-expenses" element={<SplitTravel />} />
            <Route path="/best-bill-splitting-app" element={<BestBillSplittingApp />} />
            <Route path="/bill-splitting-guide" element={<BillSplittingGuide />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/how-to-split-a-bill" element={<BlogHowToSplitABill />} />
            <Route path="/blog/how-to-track-shared-expenses" element={<BlogHowToTrackSharedExpenses />} />
            <Route path="/blog/how-to-split-rent" element={<BlogHowToSplitRent />} />
            <Route path="/blog/group-expense-management" element={<BlogGroupExpenseManagement />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
