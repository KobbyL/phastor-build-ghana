import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Import product images
import hollowBlocksImg from "@/assets/hollow-blocks.jpg";
import solidBlocksImg from "@/assets/solid-blocks.jpg";
import uDrainsImg from "@/assets/u-drains.jpg";
import culvertsImg from "@/assets/culverts.jpg";
import pavingStonesImg from "@/assets/paving-stones.jpg";
import interlockingBlocksImg from "@/assets/interlocking-blocks.jpg";
import ProductSpec from "@/components/ProductSpec";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    { id: "all", name: "All Products", icon: <Building className="h-4 w-4" /> },
    { id: "blocks", name: "Blocks", icon: <Home className="h-4 w-4" /> },
    { id: "drainage", name: "Drainage", icon: <Factory className="h-4 w-4" /> },
    { id: "paving", name: "Paving", icon: <Ruler className="h-4 w-4" /> },
  ];

  const products = [
    {
      category: "blocks",
      name: "Hollow Blocks",
      description: "High-quality hollow concrete blocks ideal for wall construction. Lightweight yet strong, perfect for residential and commercial buildings.",
      sizes: ["6 inch (150mm)", "8 inch (200mm)", "9 inch (225mm)", "12 inch (300mm)"],
      applications: ["Wall construction", "Partition walls", "Load-bearing walls"],
      price: "From GHS 2.50 per block",
      features: ["Lightweight", "High strength", "Thermal insulation", "Sound dampening"],
      image: hollowBlocksImg,
    },
    {
      category: "blocks",
      name: "Solid Blocks",
      description: "Dense, solid concrete blocks for structural applications requiring maximum strength and durability.",
      sizes: ["4 inch (100mm)", "6 inch (150mm)", "8 inch (200mm)"],
      applications: ["Foundation walls", "Retaining walls", "Structural walls"],
      price: "From GHS 3.00 per block",
      features: ["Maximum strength", "Weather resistant", "Fire resistant", "Long-lasting"],
      image: solidBlocksImg,
    },
    {
      category: "drainage",
      name: "U-Drains",
      description: "Precast concrete U-shaped drainage channels for effective water management in urban and rural areas.",
      sizes: ["300mm width", "450mm width", "600mm width", "Custom sizes"],
      applications: ["Road drainage", "Residential drainage", "Commercial drainage"],
      price: "From GHS 45.00 per meter",
      features: ["Easy installation", "Durable", "Smooth water flow", "Cost-effective"],
      image: uDrainsImg,
    },
    {
      category: "drainage",
      name: "Culverts",
      description: "Heavy-duty concrete culverts for major drainage and infrastructure projects. Built to withstand heavy loads.",
      sizes: ["600mm diameter", "900mm diameter", "1200mm diameter", "Custom sizes"],
      applications: ["Road crossings", "Bridge drainage", "Large infrastructure"],
      price: "From GHS 350.00 per meter",
      features: ["Heavy-duty", "Load-bearing", "Weather resistant", "Long service life"],
      image: culvertsImg,
    },
    {
      category: "paving",
      name: "Paving Stones",
      description: "Decorative and functional concrete paving stones available in various patterns and colors for beautiful outdoor spaces.",
      sizes: ["200x100x60mm", "200x200x60mm", "300x300x60mm", "Custom patterns"],
      applications: ["Driveways", "Walkways", "Patios", "Public spaces"],
      price: "From GHS 18.00 per m²",
      features: ["Non-slip surface", "Weather resistant", "Easy maintenance", "Attractive finish"],
      image: pavingStonesImg,
    },
    {
      category: "blocks",
      name: "Interlocking Blocks",
      description: "Self-locking concrete blocks that require no mortar for construction. Perfect for quick and efficient building.",
      sizes: ["Standard 390x190x190mm", "Half block 190x190x190mm"],
      applications: ["Quick construction", "Temporary structures", "Emergency housing"],
      price: "From GHS 3.50 per block",
      features: ["No mortar needed", "Quick installation", "Reusable", "Cost-effective"],
      image: interlockingBlocksImg,
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Concrete Products for Every Project
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              From residential buildings to major infrastructure projects, our comprehensive 
              range of high-quality concrete products meets all your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                <Download className="h-5 w-5" />
                Download Catalog
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Browse Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a category to view specific products and specifications.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="gap-2"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductSpec key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section className="py-20 bg-concrete-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Need Something Custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in creating custom concrete products tailored to your specific 
              project requirements. Our experienced team can design and manufacture 
              bespoke solutions that meet your exact specifications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Custom Sizes</h3>
                <p className="text-sm text-muted-foreground">Any dimensions to fit your project needs</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Special Strength</h3>
                <p className="text-sm text-muted-foreground">Engineered for specific load requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Quick Delivery</h3>
                <p className="text-sm text-muted-foreground">Fast production and reliable delivery</p>
              </div>
            </div>

            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Discuss Custom Requirements
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for competitive pricing, expert advice, and reliable delivery 
            of all your concrete product needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Quote
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
              <Download className="h-5 w-5" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;