import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductSpec from "@/components/ProductSpec";
import { Cart, CartItem } from "@/components/Cart";
import { CheckoutForm } from "@/components/CheckoutForm";
import { 
  MessageCircle, 
  Download, 
  Ruler, 
  Shield, 
  Truck,
  Building,
  Home,
  Factory,
  Phone
} from "lucide-react";
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

// Import product images
import hollowBlocksImg from "@/assets/hollow-blocks.jpg";
import solidBlocksImg from "@/assets/solid-blocks.jpg";
import uDrainsImg from "@/assets/u-drains.jpg";
import culvertsImg from "@/assets/culverts.jpg";
import pavingStonesImg from "@/assets/paving-stones.jpg";
import interlockingBlocksImg from "@/assets/interlocking-blocks.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { toast } = useToast();

  const productCategories = [
    { id: "all", name: "All Products", icon: <Building className="h-4 w-4" /> },
    { id: "blocks", name: "Blocks", icon: <Home className="h-4 w-4" /> },
    { id: "drainage", name: "Drainage", icon: <Factory className="h-4 w-4" /> },
    { id: "paving", name: "Paving", icon: <Ruler className="h-4 w-4" /> },
    { id: "roofing", name: "Roofing", icon: <Shield className="h-4 w-4" /> },
  ];

  const products = [
    {
      id: "hollow-blocks",
      category: "blocks",
      name: "Hollow Blocks",
      description: "High-quality hollow concrete blocks ideal for wall construction. Lightweight yet strong, perfect for residential and commercial buildings.",
      sizes: ["6 inch (150mm)", "8 inch (200mm)", "9 inch (225mm)", "12 inch (300mm)"],
      applications: ["Wall construction", "Partition walls", "Load-bearing walls"],
      price: 2.50,
      priceText: "From GHS 2.50 per block",
      features: ["Lightweight", "High strength", "Thermal insulation", "Sound dampening"],
      image: hollowBlocksImg,
    },
    {
      id: "solid-blocks",
      category: "blocks",
      name: "Solid Blocks",
      description: "Dense, solid concrete blocks for structural applications requiring maximum strength and durability.",
      sizes: ["4 inch (100mm)", "6 inch (150mm)", "8 inch (200mm)"],
      applications: ["Foundation walls", "Retaining walls", "Structural walls"],
      price: 3.00,
      priceText: "From GHS 3.00 per block",
      features: ["Maximum strength", "Weather resistant", "Fire resistant", "Long-lasting"],
      image: solidBlocksImg,
    },
    {
      id: "u-drains",
      category: "drainage",
      name: "U-Drains",
      description: "Precast concrete U-shaped drainage channels for effective water management in urban and rural areas.",
      sizes: ["300mm width", "450mm width", "600mm width", "Custom sizes"],
      applications: ["Road drainage", "Residential drainage", "Commercial drainage"],
      price: 45.00,
      priceText: "From GHS 45.00 per meter",
      features: ["Easy installation", "Durable", "Smooth water flow", "Cost-effective"],
      image: uDrainsImg,
    },
    {
      id: "culverts",
      category: "drainage",
      name: "Culverts",
      description: "Heavy-duty concrete culverts for major drainage and infrastructure projects. Built to withstand heavy loads.",
      sizes: ["600mm diameter", "900mm diameter", "1200mm diameter", "Custom sizes"],
      applications: ["Road crossings", "Bridge drainage", "Large infrastructure"],
      price: 350.00,
      priceText: "From GHS 350.00 per meter",
      features: ["Heavy-duty", "Load-bearing", "Weather resistant", "Long service life"],
      image: culvertsImg,
    },
    {
      id: "paving-stones",
      category: "paving",
      name: "Paving Stones",
      description: "Decorative and functional concrete paving stones available in various patterns and colors for beautiful outdoor spaces.",
      sizes: ["200x100x60mm", "200x200x60mm", "300x300x60mm", "Custom patterns"],
      applications: ["Driveways", "Walkways", "Patios", "Public spaces"],
      price: 18.00,
      priceText: "From GHS 18.00 per m²",
      features: ["Non-slip surface", "Weather resistant", "Easy maintenance", "Attractive finish"],
      image: pavingStonesImg,
    },
    {
      id: "interlocking-blocks",
      category: "blocks",
      name: "Interlocking Blocks",
      description: "Self-locking concrete blocks that require no mortar for construction. Perfect for quick and efficient building.",
      sizes: ["Standard 390x190x190mm", "Half block 190x190x190mm"],
      applications: ["Quick construction", "Temporary structures", "Emergency housing"],
      price: 3.50,
      priceText: "From GHS 3.50 per block",
      features: ["No mortar needed", "Quick installation", "Reusable", "Cost-effective"],
      image: interlockingBlocksImg,
    },
    // Roofing Products
    {
      id: "aluminum-sheets",
      category: "roofing",
      name: "Aluminum Roofing Sheets",
      description: "Lightweight, corrosion-resistant aluminum sheets with excellent durability and modern aesthetic appeal.",
      sizes: ["0.5mm thickness", "0.7mm thickness", "0.9mm thickness", "Custom lengths"],
      applications: ["Residential roofing", "Commercial buildings", "Modern architecture"],
      price: 45.00,
      priceText: "From GHS 45.00 per m²",
      features: ["Lightweight", "Corrosion resistant", "Long-lasting", "Easy installation"],
      image: hollowBlocksImg, // Placeholder - would need roofing image
    },
    {
      id: "corrugated-sheets",
      category: "roofing",
      name: "Corrugated Roofing Sheets",
      description: "Classic corrugated metal sheets providing excellent water drainage and proven durability for all weather conditions.",
      sizes: ["Profile 18/76", "Profile 32/100", "Profile 45/150", "Custom profiles"],
      applications: ["Industrial roofing", "Agricultural buildings", "Warehouses"],
      price: 35.00,
      priceText: "From GHS 35.00 per m²",
      features: ["Excellent drainage", "Weather resistant", "Cost-effective", "Easy maintenance"],
      image: solidBlocksImg, // Placeholder - would need roofing image
    },
    {
      id: "tile-profile-sheets",
      category: "roofing",
      name: "Tile Profile Sheets",
      description: "Aesthetic metal roofing sheets that mimic traditional tiles while providing superior durability and weather protection.",
      sizes: ["Standard profile", "Premium profile", "Custom colors", "Various lengths"],
      applications: ["Residential homes", "Villas", "Luxury buildings"],
      price: 55.00,
      priceText: "From GHS 55.00 per m²",
      features: ["Aesthetic appeal", "Tile-like appearance", "Durable coating", "Multiple colors"],
      image: pavingStonesImg, // Placeholder - would need roofing image
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: any, size?: string) => {
    const cartItemId = `${product.id}-${size || 'default'}`;
    const existingItem = cartItems.find(item => item.id === cartItemId);
    
    if (existingItem) {
      setCartItems(prev => 
        prev.map(item => 
          item.id === cartItemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: cartItemId,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        size,
      };
      setCartItems(prev => [...prev, newItem]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    setShowCheckout(false);
    toast({
      title: "Order Submitted!",
      description: "Thank you for your order. We'll contact you soon.",
    });
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                Our Products
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Premium Concrete Products for Every Project
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90 mb-8"
              variants={fadeInUp}
            >
              From residential buildings to major infrastructure projects, our comprehensive 
              range of high-quality concrete products meets all your construction needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                  <Download className="h-5 w-5" />
                  Download Catalog
                </Button>
              </motion.div>
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MessageCircle className="h-5 w-5" />
                  Get Custom Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Categories */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              variants={fadeInUp}
            >
              Browse Our Product Range
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Select a category to view specific products and add them to your cart.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="gap-2"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ProductSpec 
                  product={product} 
                  onAddToCart={addToCart}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Products Section */}
      <motion.section 
        className="py-20 bg-concrete-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              Need Something Custom?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              We specialize in creating custom concrete products tailored to your specific 
              project requirements. Our experienced team can design and manufacture 
              bespoke solutions that meet your exact specifications.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Ruler className="h-8 w-8" />
                </motion.div>
                <h3 className="font-semibold mb-2">Custom Sizes</h3>
                <p className="text-sm text-muted-foreground">Any dimensions to fit your project needs</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="h-8 w-8" />
                </motion.div>
                <h3 className="font-semibold mb-2">Special Strength</h3>
                <p className="text-sm text-muted-foreground">Engineered for specific load requirements</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Truck className="h-8 w-8" />
                </motion.div>
                <h3 className="font-semibold mb-2">Quick Delivery</h3>
                <p className="text-sm text-muted-foreground">Fast production and reliable delivery</p>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Discuss Custom Requirements
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Order?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Contact us today for competitive pricing, expert advice, and reliable delivery 
            of all your concrete product needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Quote
              </Button>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
                <Download className="h-5 w-5" />
                Download Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cart Component */}
      <Cart
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Checkout Form */}
      {showCheckout && (
        <CheckoutForm
          items={cartItems}
          total={total}
          onSuccess={handleCheckoutSuccess}
          onCancel={() => setShowCheckout(false)}
        />
      )}
    </motion.div>
  );
};

export default Products;