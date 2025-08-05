import { useCart } from "./CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartProps {
  onCheckout?: () => void;
}

const Cart = ({ onCheckout }: CartProps) => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="mb-4">Browse products and add them to your cart.</p>
        <Link to="/products">
          <Button>Shop Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <Badge variant="secondary" className="ml-2">{itemCount} items</Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.product.name}</div>
                  <div className="text-sm text-gray-500">GHS {item.product.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} disabled={item.quantity <= 1}><Minus /></Button>
                  <span className="px-2">{item.quantity}</span>
                  <Button size="icon" variant="outline" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus /></Button>
                </div>
                <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.product.id)}><Trash2 /></Button>
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Total: GHS {total.toFixed(2)}</div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
              {onCheckout ? (
                <Button onClick={onCheckout}>Proceed to Checkout</Button>
              ) : (
                <Link to="/checkout">
                  <Button>Proceed to Checkout</Button>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;