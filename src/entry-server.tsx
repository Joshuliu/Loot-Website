import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { FilledContext } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";

// Eagerly import all pages for SSR (no lazy/Suspense needed server-side)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import WhyLoot from "./pages/WhyLoot";
import SplitBills from "./pages/SplitBills";
import SplitRestaurantBill from "./pages/SplitRestaurantBill";
import SplitRoommates from "./pages/SplitRoommates";
import SplitTravel from "./pages/SplitTravel";
import BestBillSplittingApp from "./pages/BestBillSplittingApp";
import BillSplittingGuide from "./pages/BillSplittingGuide";
import BlogIndex from "./pages/BlogIndex";
import BlogHowToSplitABill from "./pages/BlogHowToSplitABill";
import BlogHowToTrackSharedExpenses from "./pages/BlogHowToTrackSharedExpenses";
import BlogHowToSplitRent from "./pages/BlogHowToSplitRent";
import BlogGroupExpenseManagement from "./pages/BlogGroupExpenseManagement";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";

export function render(url: string) {
  const helmetContext = {} as FilledContext;
  const queryClient = new QueryClient();

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
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
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  return { appHtml, helmet };
}
