import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Shield, 
  Users, 
  MessageCircle, 
  Phone, 
  CheckCircle, 
  Truck,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import productsImage from "@/assets/concrete-products.jpg";

const Home = () => {
  const products = [
    {
      name: "Hollow Blocks",
      description: "High-quality hollow concrete blocks for construction",
      sizes: "6\", 8\", 9\", 12\"",
    },
    {
      name: "Solid Blocks",
      description: "Durable solid blocks for structural applications",
      sizes: "4\", 6\", 8\"",
    },
    {
      name: "U-Drains",
      description: "Precast concrete U-drains for drainage systems",
      sizes: "300mm, 450mm, 600mm",
    },
    {
      name: "Culverts",
      description: "Heavy-duty concrete culverts for infrastructure",
      sizes: "Various diameters",
    },
    {
      name: "Paving Stones",
      description: "Decorative and functional paving stones",
      sizes: "Multiple patterns",
    },
    {
      name: "Custom Products",
      description: "Bespoke concrete solutions for your needs",
      sizes: "Made to order",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "All products meet international standards and undergo rigorous quality control testing.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Reliable Delivery",
      description: "On-time delivery with our modern fleet of trucks across Ghana.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Production",
      description: "Quick turnaround times to meet your project deadlines.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Local Expertise",
      description: "Years of experience serving the Ghanaian construction industry.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(33, 41, 52, 0.7), rgba(33, 41, 52, 0.7)), url(${heroImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Trusted Since 2015
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner for Quality 
              <span className="text-accent"> Concrete Products</span> in Ghana
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              From hollow blocks to culverts, we deliver premium concrete products 
              that build Ghana's future. Quality guaranteed, delivery assured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                <MessageCircle className="h-5 w-5" />
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
              <Link to="/products">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-accent text-accent-foreground py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="font-medium">WhatsApp Available</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-accent-foreground hover:bg-accent-foreground/10">
              Get Instant Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-concrete-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Phastor?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine quality materials, modern technology, and local expertise 
              to deliver the best concrete products in Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Concrete Products for Every Project
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From residential buildings to major infrastructure projects, 
                our comprehensive range of concrete products meets all your construction needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-primary">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.sizes}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Link to="/products">
                  <Button className="gap-2">
                    <Building className="h-4 w-4" />
                    View All Products
                  </Button>
                </Link>
                <Button variant="outline" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Get Custom Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={productsImage} 
                alt="Phastor concrete products"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a quote today and discover why contractors across Ghana trust Phastor 
            for their concrete product needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
              Call for Quote
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">48hrs</div>
              <div className="text-sm opacity-80">Quick Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;