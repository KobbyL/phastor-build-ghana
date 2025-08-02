import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: ""
  });
  const { toast } = useToast();

  const productOptions = [
    { value: "hollow-blocks", label: "Hollow Blocks" },
    { value: "solid-blocks", label: "Solid Blocks" },
    { value: "paving-stones", label: "Paving Stones" },
    { value: "u-drains", label: "U-Drains" },
    { value: "culverts", label: "Culverts" },
    { value: "aluminum-sheets", label: "Aluminum Roofing Sheets" },
    { value: "corrugated-sheets", label: "Corrugated Roofing Sheets" },
    { value: "custom", label: "Custom Product" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Request Submitted!",
      description: "We'll contact you within 2 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "",
      quantity: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/20">
              Quick Order System
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Quote in Minutes
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Skip the hassle. Tell us what you need and get a competitive quote 
              from Ghana's leading concrete products manufacturer.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">2-Hour Response</h3>
                  <p className="opacity-80">Get detailed quotes within 2 hours of your request</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Best Prices</h3>
                  <p className="opacity-80">Competitive pricing with bulk discounts available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Expert Advice</h3>
                  <p className="opacity-80">Free technical consultation with every quote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Order Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                  Quick Order Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200"
                    />
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>

                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200"
                  />

                  <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Quantity Needed"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200"
                  />

                  <Textarea
                    placeholder="Project details, delivery address, special requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-gray-50 border-gray-200"
                  />

                  <div className="flex gap-3 pt-2">
                    <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                      Get Quote
                    </Button>
                    <Button type="button" variant="outline" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;