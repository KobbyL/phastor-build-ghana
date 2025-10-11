import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Users, Shield, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import concreteProducts from "@/assets/concrete-products.jpg";
import ProductCategories from "@/components/ProductCategories";
import QuickOrder from "@/components/QuickOrder";
import { heroVariants, heroItem, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem, cardHover, buttonVariants, pulse } from "@/lib/motion";
const Home = () => {
  return <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={heroVariants}>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden hero-behind-header w-full">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe src="https://www.youtube.com/embed/d2JL7W6KuwI?autoplay=1&mute=1&controls=0&loop=1&playlist=d2JL7W6KuwI&modestbranding=1&showinfo=0&rel=0" title="Phastor Hero Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full border-0 outline-0" style={{
          position: 'absolute',
          /* Changed back to absolute to restrict to hero section */
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1' /* Ensure it stays behind content */
        }}></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        </div>
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
          {/* Hero Content */}
          <motion.div className="text-white space-y-8 max-w-3xl text-center" variants={heroItem}>
            <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight" variants={fadeInUp}>
              Your trusted partner for concrete products
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-white/80" variants={fadeInUp}>
              Building Ghana's future with strength, reliability, and premium quality concrete solutions for projects of any scale.
            </motion.p>
            
            <motion.div className="flex flex-row items-center justify-center gap-6" variants={fadeInUp}>
              <motion.div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">0552560460</span>
              </motion.div>
              
              <motion.a href="tel:0552560460" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} variants={buttonVariants}>
                <Phone className="h-5 w-5" />
                Call Us Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <motion.section className="py-16 bg-primary overflow-hidden" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center text-white mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by leading construction companies
            </h2>
            <p className="text-lg opacity-90">
              Join hundreds of satisfied customers across Ghana
            </p>
          </motion.div>
          
          {/* Infinite scrolling logos */}
          <motion.div className="relative" variants={fadeInUp}>
            <motion.div className="flex space-x-16" animate={{
            x: [0, -1000]
          }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}>
              {/* Logos */} 
              {[...Array(2)].map((_, i) => [{
              src: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754223216/oswal-logo-white-final_hbozyi.png",
              alt: "Oswal Logo"
            }, {
              src: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754223215/68095b961d68dbda228fcf15_Consar_Logo-White_szhxpt.svg",
              alt: "Consar Logo"
            }, {
              src: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754223215/Group-5_z1ht4v.webp",
              alt: "Client Logo"
            }].map((logo, index) => <motion.div key={`${i}-${index}`} className="flex items-center justify-center px-8 py-4 min-w-[200px]" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.2
            }}>
                    <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
                  </motion.div>))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section className="py-20 bg-gray-50" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" variants={fadeInUp}>
                Get professional concrete products
              </motion.h2>
              <motion.p className="text-xl text-gray-600 mb-8" variants={fadeInUp}>
                Our team of skilled professionals is ready to supply any concrete product, big or small, to enhance your construction projects. From building foundations to decorative elements, you're covered.
              </motion.p>
              
              <motion.div className="grid grid-cols-2 gap-8 mb-8" variants={staggerContainer}>
                <motion.div className="text-center" variants={staggerItem} whileHover={{
                scale: 1.05
              }}>
                  <motion.div className="text-4xl font-bold text-primary mb-2" animate={{
                  scale: [1, 1.1, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    24/7
                  </motion.div>
                  <div className="text-gray-600">availability</div>
                </motion.div>
                <motion.div className="text-center" variants={staggerItem} whileHover={{
                scale: 1.05
              }}>
                  <motion.div className="text-4xl font-bold text-primary mb-2" animate={{
                  scale: [1, 1.1, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}>
                    2 hours
                  </motion.div>
                  <div className="text-gray-600">delivery time</div>
                </motion.div>
              </motion.div>

              <motion.div className="space-y-4" variants={staggerContainer}>
                <motion.details className="bg-white p-4 rounded-lg border" variants={staggerItem} whileHover={{
                y: -2
              }}>
                  <summary className="font-semibold cursor-pointer">Do you offer bulk discounts?</summary>
                  <p className="mt-2 text-gray-600">Yes, we provide competitive pricing for bulk orders. Contact us for volume pricing and special rates for contractors.</p>
                </motion.details>
                
                <motion.details className="bg-white p-4 rounded-lg border" variants={staggerItem} whileHover={{
                y: -2
              }}>
                  <summary className="font-semibold cursor-pointer">Can you deliver on weekends?</summary>
                  <p className="mt-2 text-gray-600">Absolutely! We offer weekend delivery services to meet your project deadlines.</p>
                </motion.details>
                
                <motion.details className="bg-white p-4 rounded-lg border" variants={staggerItem} whileHover={{
                y: -2
              }}>
                  <summary className="font-semibold cursor-pointer">Are your products certified?</summary>
                  <p className="mt-2 text-gray-600">All our concrete products meet Ghana Standards Authority specifications and undergo regular quality testing.</p>
                </motion.details>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInRight} whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              <img src="https://res.cloudinary.com/dhs1h58bs/image/upload/v1754235549/1K8A9965_z8feqj.jpg" alt="Concrete products showcase" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Categories Section */}
      <ProductCategories onCategorySelect={category => window.location.href = `/products?category=${category}`} />

      {/* Roofing Solutions Section */}
      <motion.section className="py-20 bg-concrete-light" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Premium Roofing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Durable, weather-resistant roofing sheets that provide excellent protection 
              and longevity for your construction projects.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
            {[{
            icon: Shield,
            title: "Aluminum Sheets",
            description: "Lightweight, corrosion-resistant sheets perfect for modern buildings."
          }, {
            icon: Users,
            title: "Corrugated Sheets",
            description: "Classic corrugated design offering excellent water drainage."
          }, {
            icon: Award,
            title: "Tile Profile Sheets",
            description: "Aesthetic appeal with the durability of metal roofing."
          }, {
            icon: Clock,
            title: "Industrial Sheets",
            description: "Heavy-duty sheets for warehouses and industrial applications."
          }].map((item, index) => <motion.div key={item.title} className="bg-white p-6 rounded-lg shadow-md" variants={staggerItem} whileHover={{
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }} transition={{
            duration: 0.3
          }}>
                <motion.div className="bg-accent text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }}>
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="py-20 bg-white" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Phastor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With decades of experience, we deliver unmatched quality and service.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[{
            icon: Shield,
            title: "Premium Quality",
            description: "All our products meet international standards and undergo rigorous quality testing.",
            gradient: "from-primary to-accent"
          }, {
            icon: Clock,
            title: "Fast Delivery",
            description: "Reliable delivery service across Ghana with our own fleet of trucks.",
            gradient: "from-accent to-primary"
          }, {
            icon: MessageCircle,
            title: "Expert Support",
            description: "Our experienced team provides technical advice and project consultation.",
            gradient: "from-primary to-accent"
          }].map((item, index) => <motion.div key={item.title} className="text-center" variants={staggerItem} whileHover={{
            scale: 1.05,
            y: -5
          }} transition={{
            duration: 0.3
          }}>
                <motion.div className={`bg-gradient-to-br ${item.gradient} text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg`} whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }}>
                  <item.icon className="h-10 w-10" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section className="py-20 bg-gradient-to-r from-primary to-accent text-white" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Numbers That Speak
            </h2>
            <p className="text-xl opacity-90">
              Our track record of excellence in concrete manufacturing
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" variants={staggerContainer}>
            {[{
            number: "37+",
            label: "Years Experience"
          }, {
            number: "500+",
            label: "Projects Completed"
          }, {
            number: "50K+",
            label: "Products Delivered"
          }, {
            number: "24/7",
            label: "Customer Support"
          }].map((stat, index) => <motion.div key={stat.label} className="text-center" variants={staggerItem} whileHover={{
            scale: 1.1,
            y: -10
          }} transition={{
            duration: 0.3
          }}>
                <motion.div className="text-5xl font-bold mb-2" initial={{
              scale: 0
            }} whileInView={{
              scale: 1
            }} transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.1
            }}>
                  {stat.number}
                </motion.div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-20 bg-concrete-light" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From quote to delivery, we make ordering concrete products easy and hassle-free
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" variants={staggerContainer}>
            {[{
            step: "1",
            title: "Get Quote",
            description: "Contact us with your requirements and get an instant quote"
          }, {
            step: "2",
            title: "Place Order",
            description: "Confirm your order and make payment through our secure system"
          }, {
            step: "3",
            title: "Production",
            description: "We manufacture your products using the highest quality materials"
          }, {
            step: "4",
            title: "Delivery",
            description: "Fast and reliable delivery to your construction site"
          }].map((item, index) => <motion.div key={item.step} className="text-center" variants={staggerItem} whileHover={{
            scale: 1.05,
            y: -5
          }} transition={{
            duration: 0.3
          }}>
                <motion.div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }}>
                  <motion.div className="text-2xl font-bold text-primary" initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1
              }}>
                    {item.step}
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-20 bg-white" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Ghana
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[{
            stars: 5,
            quote: "Excellent quality concrete blocks and fast delivery. Our residential project was completed on time thanks to Phastor's reliable service.",
            name: "Kwame Asante",
            role: "Contractor, Accra",
            initial: "K"
          }, {
            stars: 5,
            quote: "Professional team and high-quality roofing sheets. The aluminum sheets we purchased have excellent durability and finish.",
            name: "Ama Osei",
            role: "Architect, Kumasi",
            initial: "A"
          }, {
            stars: 5,
            quote: "Best concrete products supplier in Ghana. Their paving stones transformed our office complex. Highly recommended!",
            name: "Yaw Mensah",
            role: "Project Manager, Tema",
            initial: "Y"
          }].map((testimonial, index) => <motion.div key={testimonial.name} className="bg-concrete-light p-8 rounded-lg shadow-md" variants={staggerItem} whileHover={{
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }} transition={{
            duration: 0.3
          }}>
                <motion.div className="flex items-center mb-4" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: index * 0.1
            }}>
                  {[...Array(testimonial.stars)].map((_, i) => <motion.div key={i} initial={{
                scale: 0,
                rotate: -180
              }} whileInView={{
                scale: 1,
                rotate: 0
              }} transition={{
                delay: index * 0.1 + i * 0.1
              }}>
                      <Star className="h-5 w-5 text-accent fill-current" />
                    </motion.div>)}
                </motion.div>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <motion.div className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3" whileHover={{
                scale: 1.1,
                rotate: 360
              }} transition={{
                duration: 0.3
              }}>
                    {testimonial.initial}
                  </motion.div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Order Section */}
      <QuickOrder />

      {/* CTA Section */}
      <motion.section className="py-20 bg-gray-900 text-white" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={staggerContainer}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeInUp}>
            Ready to Start Your Project?
          </motion.h2>
          <motion.p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" variants={fadeInUp}>
            Get a quote today and discover why contractors across Ghana trust Phastor for their concrete product needs.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="https://wa.me/+233552560460" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us Now
                </Button>
              </a>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" variant="outline" className="gap-2 border-white text-gray-50 bg-amber-400 hover:bg-amber-300">
                <Phone className="h-5 w-5" />
                Call for Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>;
};
export default Home;