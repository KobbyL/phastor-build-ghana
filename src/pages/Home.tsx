import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Users, Shield, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import concreteProducts from "@/assets/concrete-products.jpg";

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

      {/* Trust Indicators - Reviews Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Our company is a top-rated service provider
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Star className="h-12 w-12 text-yellow-400 mb-2" />
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold">4.8 on Google</div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Star className="h-12 w-12 text-yellow-400 mb-2" />
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold">4.9 on Facebook</div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Star className="h-12 w-12 text-yellow-400 mb-2" />
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold">4.7 on Reviews.io</div>
              </div>
            </div>
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              We offer a wide range of products
            </h2>
            <Button variant="outline" size="lg">
              Discover all products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Let us be your partner in creating structures that reflect quality and meet your practical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src={concreteProducts} 
                alt="Hollow Blocks" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Hollow Blocks</h3>
                <p className="text-sm opacity-90 mb-3">6", 8", 9" blocks • Load bearing • Standard & custom sizes</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src={concreteProducts} 
                alt="Solid Blocks" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Solid Blocks</h3>
                <p className="text-sm opacity-90 mb-3">High density • Weather resistant • Foundation grade</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src={concreteProducts} 
                alt="Paving Stones" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Paving Stones</h3>
                <p className="text-sm opacity-90 mb-3">Multiple colors • Non-slip • Decorative patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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