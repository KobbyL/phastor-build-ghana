import { useState } from "react";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Cart = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout, 
  isOpen, 
  onToggle 
}: CartProps) => {
  const { toast } = useToast();
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-elegant hover:scale-110 transition-all duration-300 animate-fade-in"
        size="icon"
      >
        <ShoppingCart className="h-6 w-6 transition-transform duration-200" />
        {items.length > 0 && (
          <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center animate-scale-in bg-accent text-accent-foreground">
            {itemCount}
          </Badge>
        )}
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-elegant border-l animate-slide-in-right">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl">Shopping Cart</CardTitle>
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full pb-6">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-4">
                  {items.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:shadow-md transition-all duration-200 animate-fade-in hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        {item.size && (
                          <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                        )}
                        <p className="text-sm font-semibold text-primary">
                          GH₵{item.price.toFixed(2)}
                        </p>
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Subtotal ({itemCount} items):</span>
                    <span className="text-primary">GH₵{total.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>• Free delivery for orders over GH₵500</p>
                    <p>• Contact us for bulk order discounts</p>
                  </div>
                  <Button 
                    onClick={onCheckout} 
                    className="w-full hover:scale-105 transition-transform duration-200" 
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};