import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Users, Shield, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import concreteProducts from "@/assets/concrete-products.jpg";
import ProductCategories from "@/components/ProductCategories";
import QuickOrder from "@/components/QuickOrder";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your trusted partner for concrete products
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">+233 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right side - Quote Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Request your free quote
              </h3>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Name" 
                  className="bg-gray-50 border-gray-200"
                />
                <Input 
                  placeholder="Email" 
                  type="email" 
                  className="bg-gray-50 border-gray-200"
                />
                <Input 
                  placeholder="Phone" 
                  type="tel" 
                  className="bg-gray-50 border-gray-200"
                />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-gray-50 border-gray-200"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  size="lg"
                >
                  Get a quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by leading construction companies
            </h2>
            <p className="text-lg opacity-90">
              Join hundreds of satisfied customers across Ghana
            </p>
          </div>
          
          {/* Infinite scrolling logos */}
          <div className="relative">
            <div className="flex animate-[scroll_30s_linear_infinite] space-x-16">
              {/* First set of logos */}
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">ASHANTI GOLD</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">COCOA BOARD</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">GHANA HIGHWAYS</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">TEMA STEEL</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">ACCRA MALL</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">GOLDEN TULIP</div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">ASHANTI GOLD</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">COCOA BOARD</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">GHANA HIGHWAYS</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">TEMA STEEL</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">ACCRA MALL</div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px]">
                <div className="text-white text-xl font-bold">GOLDEN TULIP</div>
              </div>
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Get professional concrete products
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of skilled professionals is ready to supply any concrete product, big or small, to enhance your construction projects. From building foundations to decorative elements, you're covered.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2 hours</div>
                  <div className="text-gray-600">delivery time</div>
                </div>
              </div>

              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg border">
                  <summary className="font-semibold cursor-pointer">Do you offer bulk discounts?</summary>
                  <p className="mt-2 text-gray-600">Yes, we provide competitive pricing for bulk orders. Contact us for volume pricing and special rates for contractors.</p>
                </details>
                
                <details className="bg-white p-4 rounded-lg border">
                  <summary className="font-semibold cursor-pointer">Can you deliver on weekends?</summary>
                  <p className="mt-2 text-gray-600">Absolutely! We offer weekend delivery services to meet your project deadlines.</p>
                </details>
                
                <details className="bg-white p-4 rounded-lg border">
                  <summary className="font-semibold cursor-pointer">Are your products certified?</summary>
                  <p className="mt-2 text-gray-600">All our concrete products meet Ghana Standards Authority specifications and undergo regular quality testing.</p>
                </details>
              </div>
            </div>
            
            <div>
              <img 
                src={concreteProducts} 
                alt="Concrete products showcase" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <ProductCategories onCategorySelect={(category) => window.location.href = `/products?category=${category}`} />

      {/* Roofing Solutions Section */}
      <section className="py-20 bg-concrete-light animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              Premium Roofing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Durable, weather-resistant roofing sheets that provide excellent protection 
              and longevity for your construction projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="bg-accent text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Aluminum Sheets</h3>
              <p className="text-sm text-gray-600">Lightweight, corrosion-resistant sheets perfect for modern buildings.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="bg-accent text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Corrugated Sheets</h3>
              <p className="text-sm text-gray-600">Classic corrugated design offering excellent water drainage.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="bg-accent text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Tile Profile Sheets</h3>
              <p className="text-sm text-gray-600">Aesthetic appeal with the durability of metal roofing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="bg-accent text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Industrial Sheets</h3>
              <p className="text-sm text-gray-600">Heavy-duty sheets for warehouses and industrial applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              Why Choose Phastor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              With decades of experience, we deliver unmatched quality and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                All our products meet international standards and undergo rigorous quality testing.
              </p>
            </div>

            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-accent to-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Reliable delivery service across Ghana with our own fleet of trucks.
              </p>
            </div>

            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our experienced team provides technical advice and project consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Numbers That Speak
            </h2>
            <p className="text-xl opacity-90 animate-fade-in">
              Our track record of excellence in concrete manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2 animate-fade-in">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="text-center animate-scale-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2 animate-fade-in">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center animate-scale-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2 animate-fade-in">50K+</div>
              <div className="text-lg opacity-90">Products Delivered</div>
            </div>
            <div className="text-center animate-scale-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-bold mb-2 animate-fade-in">24/7</div>
              <div className="text-lg opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-concrete-light animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              From quote to delivery, we make ordering concrete products easy and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-2xl font-bold text-primary">1</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Quote</h3>
              <p className="text-gray-600">
                Contact us with your requirements and get an instant quote
              </p>
            </div>

            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-2xl font-bold text-primary">2</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Place Order</h3>
              <p className="text-gray-600">
                Confirm your order and make payment through our secure system
              </p>
            </div>

            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-2xl font-bold text-primary">3</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Production</h3>
              <p className="text-gray-600">
                We manufacture your products using the highest quality materials
              </p>
            </div>

            <div className="text-center animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-2xl font-bold text-primary">4</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">
                Fast and reliable delivery to your construction site
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Don't just take our word for it - hear from satisfied customers across Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-concrete-light p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent quality concrete blocks and fast delivery. Our residential project was completed on time thanks to Phastor's reliable service."
              </p>
              <div className="flex items-center">
                <div className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  K
                </div>
                <div>
                  <div className="font-semibold">Kwame Asante</div>
                  <div className="text-sm text-gray-500">Contractor, Accra</div>
                </div>
              </div>
            </div>

            <div className="bg-concrete-light p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional team and high-quality roofing sheets. The aluminum sheets we purchased have excellent durability and finish."
              </p>
              <div className="flex items-center">
                <div className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold">Ama Osei</div>
                  <div className="text-sm text-gray-500">Architect, Kumasi</div>
                </div>
              </div>
            </div>

            <div className="bg-concrete-light p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Best concrete products supplier in Ghana. Their paving stones transformed our office complex. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  Y
                </div>
                <div>
                  <div className="font-semibold">Yaw Mensah</div>
                  <div className="text-sm text-gray-500">Project Manager, Tema</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <QuickOrder />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a quote today and discover why contractors across Ghana trust Phastor for their concrete product needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-gray-800">
              <Phone className="h-5 w-5" />
              Call for Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;