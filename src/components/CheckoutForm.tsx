import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CartItem } from "./CartContext";
import { sendOrderNotification } from "@/services/emailService";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Package, 
  Truck, 
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface CheckoutFormProps {
  items: CartItem[];
  total: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export const CheckoutForm = ({ items, total, onSuccess, onCancel }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const deliveryFee = total >= 500 ? 0 : 50;
  const finalTotal = total + deliveryFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare order items for DB (id, name, price, quantity only)
    const orderItems = items.map(item => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
    }));

    try {
      // Create order in database
      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_address: formData.address,
          order_items: orderItems,
          total_amount: finalTotal,
          status: "pending",
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Send email notification to business
      try {
        await sendOrderNotification({
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          customerAddress: formData.address,
          orderItems: items,
          totalAmount: finalTotal,
          orderId: order.id,
          orderDate: new Date().toLocaleString('en-GB', {
            timeZone: 'Africa/Accra',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        });
        console.log('Order notification email sent successfully');
      } catch (emailError) {
        console.error('Failed to send order notification email:', emailError);
        // Don't fail the order if email fails
      }

      toast({
        title: "Order Submitted Successfully!",
        description: "Thank you for your order. We'll contact you within 24 hours to confirm details and arrange delivery.",
      });

      onSuccess();
    } catch (error) {
      console.error("Error creating order:", error);
      toast({
        title: "Order Submission Failed",
        description: "There was an error submitting your order. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Complete Your Order</CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={onCancel}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step >= 1 ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground'
                  }`}>
                    <User className="h-4 w-4" />
                  </div>
                  <div className={`w-16 h-0.5 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step >= 2 ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground'
                  }`}>
                    <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Contact Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+233 XX XXX XXXX"
                          />
                        </div>

                        <div>
                          <Label htmlFor="address" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Delivery Address *
                          </Label>
                          <Textarea
                            id="address"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                            placeholder="Enter your complete delivery address"
                            className="resize-none"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="notes" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Additional Notes (Optional)
                        </Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                          placeholder="Any special instructions or requirements..."
                          className="resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onCancel}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1"
                      >
                        Review Order
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Order Review
                      </h3>
                      
                      {/* Contact Information Summary */}
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold mb-2">Contact Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><span className="text-muted-foreground">Name:</span> {formData.name}</div>
                          <div><span className="text-muted-foreground">Email:</span> {formData.email}</div>
                          <div><span className="text-muted-foreground">Phone:</span> {formData.phone}</div>
                          <div><span className="text-muted-foreground">Address:</span> {formData.address}</div>
                        </div>
                        {formData.notes && (
                          <div className="mt-2">
                            <span className="text-muted-foreground text-sm">Notes:</span> {formData.notes}
                          </div>
                        )}
                      </div>

                      {/* Order Summary */}
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Order Summary ({itemCount} items)
                        </h4>
                        
                        <div className="space-y-3">
                          {items.map((item) => (
                            <div key={item.product.id} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={item.product.image} 
                                  alt={item.product.name}
                                  className="h-12 w-12 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium text-sm">{item.product.name}</p>
                                  {item.product.sizes && item.product.sizes.length > 0 && (
                                    <p className="text-xs text-muted-foreground">Sizes: {item.product.sizes.join(', ')}</p>
                                  )}
                                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                              </div>
                              <p className="font-semibold text-sm">
                                GH₵{(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          ))}
                        </div>

                        <Separator />

                        {/* Price Breakdown */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Subtotal ({itemCount} items):</span>
                            <span>GH₵{total.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1">
                              <Truck className="h-3 w-3" />
                              Delivery:
                            </span>
                            <span className={deliveryFee === 0 ? "text-green-600 font-semibold" : ""}>
                              {deliveryFee === 0 ? "FREE" : `GH₵${deliveryFee.toFixed(2)}`}
                            </span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-primary">GH₵{finalTotal.toFixed(2)}</span>
                          </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <h5 className="font-semibold text-sm mb-2 flex items-center gap-1">
                            <Truck className="h-4 w-4" />
                            Delivery Information
                          </h5>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <p>• Free delivery for orders over GH₵500</p>
                            <p>• Standard delivery: 2-3 business days</p>
                            <p>• We'll contact you within 24 hours to confirm</p>
                            <p>• Payment on delivery (cash or mobile money)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleBack}
                          className="flex-1"
                          disabled={isLoading}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting Order...
                            </>
                          ) : (
                            <>
                              <CreditCard className="h-4 w-4 mr-2" />
                              Submit Order
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};