import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import Cart from "@/components/Cart";
import { CheckoutForm } from "@/components/CheckoutForm";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface CartPageProps {
  showCheckout?: boolean;
}

const CartPage = ({ showCheckout = false }: CartPageProps) => {
  const { cart, clearCart } = useCart();
  const [checkout, setCheckout] = useState(showCheckout);
  const location = useLocation();

  // Check if we're on the checkout route
  useEffect(() => {
    if (location.pathname === '/checkout') {
      setCheckout(true);
    } else {
      setCheckout(false);
    }
  }, [location.pathname]);

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (checkout) {
    return (
      <motion.div 
        className="min-h-screen bg-gray-50 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CheckoutForm
          items={cart}
          total={total}
          onSuccess={() => {
            clearCart();
            setCheckout(false);
            // Navigate back to cart or home
            window.history.pushState({}, '', '/cart');
          }}
          onCancel={() => {
            setCheckout(false);
            // Navigate back to cart
            window.history.pushState({}, '', '/cart');
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Cart onCheckout={() => setCheckout(true)} />
    </motion.div>
  );
};

export default CartPage;