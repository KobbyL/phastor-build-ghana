import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { ProductsPage } from "./pages/admin/Products";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Orders from "./pages/admin/Orders";
import BlogAdmin from "./pages/admin/BlogAdmin";
import BlogEditor from "./pages/admin/BlogEditor";
import { CartProvider } from "./components/CartContext";
import CartPage from "./pages/Cart";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CartPage showCheckout={true} />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="blog" element={<BlogAdmin />} />
          <Route path="blog/new" element={<BlogEditor />} />
          <Route path="blog/edit/:id" element={<BlogEditor />} />
          <Route path="users" element={<div>Users Management</div>} />
          <Route path="messages" element={<div>Messages Management</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
