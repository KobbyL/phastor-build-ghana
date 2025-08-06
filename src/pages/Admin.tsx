import { useState, useEffect } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, ShoppingCart, Plus, Eye, MessageSquare, Mail, Phone, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonVariants,
  pulse
} from "@/lib/motion";

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  order_items: any;
  total_amount: number;
  status: string;
  created_at: string;
}

interface QuotationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  project_type: string | null;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
  notes: string | null;
  quoted_amount: number | null;
  quoted_at: string | null;
}

export default function Admin() {
  const { isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && isAdmin === false) {
      navigate("/admin-login");
    }
  }, [isAdmin, loading, navigate]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [quotationRequests, setQuotationRequests] = useState<QuotationRequest[]>([]);
  const [selectedQuotation, setSelectedQuotation] = useState<QuotationRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchOrders();
    fetchQuotationRequests();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast({
        title: "Error",
        description: "Failed to fetch orders",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuotationRequests = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("quotation_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setQuotationRequests(data || []);
    } catch (error) {
      console.error("Error fetching quotation requests:", error);
      toast({
        title: "Error",
        description: "Failed to fetch quotation requests",
        variant: "destructive",
      });
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId);

      if (error) throw error;

      setOrders(prev => 
        prev.map(order => 
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      toast({
        title: "Success",
        description: "Order status updated successfully",
      });
    } catch (error) {
      console.error("Error updating order:", error);
      toast({
        title: "Error",
        description: "Failed to update order status",
        variant: "destructive",
      });
    }
  };

  const updateQuotationStatus = async (quotationId: string, newStatus: string) => {
    try {
      const { error } = await (supabase as any)
        .from("quotation_requests")
        .update({ status: newStatus })
        .eq("id", quotationId);

      if (error) throw error;

      setQuotationRequests(prev => 
        prev.map(req => 
          req.id === quotationId ? { ...req, status: newStatus } : req
        )
      );

      toast({
        title: "Success",
        description: "Quotation status updated successfully",
      });
    } catch (error) {
      console.error("Error updating quotation status:", error);
      toast({
        title: "Error",
        description: "Failed to update quotation status",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-100 text-amber-800 border-amber-200";
      case "confirmed": return "bg-blue-100 text-blue-800 border-blue-200";
      case "shipped": return "bg-purple-100 text-purple-800 border-purple-200";
      case "delivered": return "bg-green-100 text-green-800 border-green-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getQuotationStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800 border-blue-200";
      case "in_progress": return "bg-amber-100 text-amber-800 border-amber-200";
      case "quoted": return "bg-green-100 text-green-800 border-green-200";
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };


  if (loading || isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-destructive font-semibold text-lg">Access denied. Admins only.</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto py-8 px-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div 
        className="flex items-center justify-between mb-8"
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
          </TabsList>

        <TabsContent value="orders" className="space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Recent Orders ({orders.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                >
                  {orders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      variants={staggerItem}
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{order.customer_name}</h4>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {order.customer_email} • {order.customer_phone}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.created_at).toLocaleDateString()} • 
                          GH₵{order.total_amount.toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        
                        {order.status === "pending" && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              onClick={() => updateOrderStatus(order.id, "confirmed")}
                            >
                              Confirm
                            </Button>
                          </motion.div>
                        )}
                        
                        {order.status === "confirmed" && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              onClick={() => updateOrderStatus(order.id, "shipped")}
                            >
                              Ship
                            </Button>
                          </motion.div>
                        )}
                        
                        {order.status === "shipped" && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              onClick={() => updateOrderStatus(order.id, "delivered")}
                            >
                              Delivered
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {orders.length === 0 && (
                    <motion.div 
                      className="text-center py-8 text-muted-foreground"
                      variants={fadeInUp}
                    >
                      No orders found
                    </motion.div>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Quotation Requests ({quotationRequests.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                >
                  {quotationRequests.map((request) => (
                    <motion.div
                      key={request.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      variants={staggerItem}
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{request.name}</h4>
                          <Badge className={getQuotationStatusColor(request.status)}>
                            {request.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span>{request.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span>{request.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(request.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                        {request.project_type && (
                          <p className="text-sm font-medium text-primary mt-2">
                            Project: {request.project_type}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedQuotation(request)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        
                        <Select
                          value={request.status}
                          onValueChange={(newStatus) => updateQuotationStatus(request.id, newStatus)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="quoted">Quoted</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  ))}
                  
                  {quotationRequests.length === 0 && (
                    <motion.div 
                      className="text-center py-8 text-muted-foreground"
                      variants={fadeInUp}
                    >
                      No quotation requests found
                    </motion.div>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Product Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="text-center py-8"
                  variants={staggerContainer}
                >
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2"
                    variants={fadeInUp}
                  >
                    Product Management
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-4"
                    variants={fadeInUp}
                  >
                    Product management functionality can be added here. Currently, products are managed in the Products.tsx file.
                  </motion.p>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <motion.div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Customer Name</Label>
                  <p>{selectedOrder.customer_name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p>{selectedOrder.customer_email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Phone</Label>
                  <p>{selectedOrder.customer_phone || "N/A"}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Delivery Address</Label>
                <p>{selectedOrder.customer_address || "N/A"}</p>
              </div>

              <div>
                <Label className="text-sm font-medium">Order Items</Label>
                <div className="space-y-2 mt-2">
                  {selectedOrder.order_items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-2 border rounded">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
                      </div>
                      <div className="text-right">
                        <p>Qty: {item.quantity}</p>
                        <p className="font-semibold">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span className="text-primary">GH₵{selectedOrder.total_amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setSelectedOrder(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      )}

      {/* Quotation Details Modal */}
      {selectedQuotation && (
        <motion.div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Quotation Request Details</span>
                  <Badge className={getQuotationStatusColor(selectedQuotation.status)}>
                    {selectedQuotation.status.replace('_', ' ')}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Customer Information */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Customer Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-accent/20 rounded-lg">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <p className="font-medium">{selectedQuotation.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="font-medium">{selectedQuotation.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Phone</label>
                      <p className="font-medium">{selectedQuotation.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Company</label>
                      <p className="font-medium">{selectedQuotation.company || "N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="font-semibold mb-3">Project Information</h3>
                  <div className="p-4 bg-accent/20 rounded-lg space-y-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Project Type</label>
                      <p className="font-medium">{selectedQuotation.project_type || "Not specified"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Request Date</label>
                      <p className="font-medium">{new Date(selectedQuotation.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="font-semibold mb-3">Customer Message</h3>
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{selectedQuotation.message}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setSelectedQuotation(null)}>
                    Close
                  </Button>
                  <Button 
                    onClick={() => window.open(`mailto:${selectedQuotation.email}?subject=Re: Your Quotation Request&body=Dear ${selectedQuotation.name},%0D%0A%0D%0AThank you for your quotation request.%0D%0A%0D%0ABest regards,%0D%0APhastor Team`)}
                  >
                    Reply via Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

const Label = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
    {children}
  </label>
);