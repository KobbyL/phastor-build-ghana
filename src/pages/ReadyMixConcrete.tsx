import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Building,
  Wrench,
  Award,
  ArrowRight
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn
} from "@/lib/motion";

const ReadyMixConcrete = () => {
  const grades = [
    {
      name: "Grade 15 (1:2:4)",
      strength: "15 MPa",
      applications: ["Mass concrete work", "Blinding", "Non-structural elements"],

    },
    {
      name: "Grade 20 (1:1.5:3)",
      strength: "20 MPa",
      applications: ["Floor slabs", "Pathways", "Light foundations"],

      popular: true
    },
    {
      name: "Grade 25 (1:1:2)",
      strength: "25 MPa",
      applications: ["Structural elements", "Beams", "Columns"],

      popular: true
    },
    {
      name: "Grade 30 (1:0.75:1.5)",
      strength: "30 MPa",
      applications: ["High-strength structures", "Heavy-duty floors", "Commercial buildings"],

    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Consistent Quality",
      description: "Computer-controlled batching ensures every batch meets exact specifications and GSA standards."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Savings",
      description: "Eliminate on-site mixing, reduce labor costs, and accelerate your construction schedule."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Effective",
      description: "Reduce material waste, labor costs, and equipment rental. Pay only for what you use."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Flexible Delivery",
      description: "Scheduled deliveries to match your construction timeline. Available 6 days a week."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "GSA Approved",
      description: "All our concrete mixes meet Ghana Standards Authority requirements and international benchmarks."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Support",
      description: "Expert advice on mix selection, placement techniques, and curing requirements."
    }
  ];

  const features = [
    "Fresh concrete delivered to your site",
    "Various grades available (15-30 MPa)",
    "Custom mix designs available",
    "Professional batching and quality control",
    "Modern fleet of concrete mixer trucks",
    "Experienced drivers and operators",
    "Flexible delivery schedules",
    "Technical consultation included",
    "Competitive bulk pricing",
    "Emergency/weekend delivery available"
  ];

  const specifications = [
    { label: "Compressive Strength", value: "15-40 MPa (grade dependent)" },
    { label: "Slump Range", value: "50-150mm (adjustable)" },
    { label: "Cement Content", value: "250-400 kg/m³" },
    { label: "Water-Cement Ratio", value: "0.45-0.65" },
    { label: "Maximum Aggregate Size", value: "20-40mm" },
    { label: "Setting Time", value: "2-4 hours (initial)" },
    { label: "Full Strength", value: "28 days" },
    { label: "Delivery Time", value: "Within 90 minutes of batching" }
  ];

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
                <Truck className="h-4 w-4 mr-2" />
                Ready Mix Concrete
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Fresh Concrete Delivered to Your Site
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90 mb-8"
              variants={fadeInUp}
            >
              Professional-grade ready-mix concrete for all your construction needs.
              Consistent quality, flexible delivery, and expert support.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <a href="tel:0552560460">
                  <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                    <Phone className="h-5 w-5" />
                    Call for Quote: 0552560460
                  </Button>
                </a>
              </motion.div>
              <motion.div variants={staggerItem}>
                <a href="https://wa.me/+233552560460" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 bg-black border-white text-white hover:bg-gray-900">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Order
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Concrete Grades */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Available Concrete Grades
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the right grade for your specific construction needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {grades.map((grade, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`relative ${grade.popular ? 'border-accent border-2' : ''}`}>
                  {grade.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{grade.name}</h3>
                    <div className="text-3xl font-bold text-accent mb-4">{grade.strength}</div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-muted-foreground">Best For:</p>
                      {grade.applications.map((app, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 bg-concrete-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our Ready Mix Concrete?
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional solutions that save you time and money
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="text-accent mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features & Specifications */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Product Features
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-concrete-light rounded-lg"
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Technical Specifications
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0">
                        <span className="font-medium text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold text-primary">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="py-20 bg-concrete-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to Order
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process to get fresh concrete delivered to your site
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { step: "1", title: "Contact Us", description: "Call or WhatsApp with your requirements" },
              { step: "2", title: "Get Quote", description: "We'll provide pricing based on grade and quantity" },
              { step: "3", title: "Schedule Delivery", description: "Choose your preferred delivery time" },
              { step: "4", title: "Receive & Pour", description: "Fresh concrete delivered and ready to use" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            Get fresh, high-quality concrete delivered to your construction site.
            Our team is ready to help you choose the right grade for your project.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <a href="tel:0552560460">
                <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                  <Phone className="h-5 w-5" />
                  Call: 0552560460
                </Button>
              </a>
            </motion.div>
            <motion.div variants={staggerItem}>
              <a href="https://wa.me/+233552560460" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-black border-white text-white hover:bg-gray-900">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
            <motion.div variants={staggerItem}>
              <a href="/contact">
                <Button size="lg" variant="outline" className="gap-2 bg-black border-white text-white hover:bg-gray-900">
                  <ArrowRight className="h-5 w-5" />
                  Request Quote
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ReadyMixConcrete;

