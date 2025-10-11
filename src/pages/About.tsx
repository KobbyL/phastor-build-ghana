import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  Building, 
  Truck,
  Factory,
  Shield
} from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";
import factoryInteriorImg from "@/assets/factory-interior.jpg";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem,
  scaleIn,
  cardHover
} from "@/lib/motion";

const About = () => {
  useEffect(() => {
    document.title = "About Phastor Limited | Concrete Products & Roofing Ghana";
    const content = "Phastor Ltd, established in 1988, is Ghana's innovative, fast-growing concrete products and standing seam roofing manufacturer.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
    const canonicalHref = `${window.location.origin}/about`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (link) {
      link.setAttribute("href", canonicalHref);
    } else {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalHref);
      document.head.appendChild(link);
    }
  }, []);
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Excellent Customer Care",
      description: "We serve our cherished customers with responsiveness, courtesy, and support.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Respect for Customers",
      description: "We treat every customer with respect and prioritize their needs in every engagement.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Doing the Right Thing",
      description: "We uphold integrity, safety, and quality in our processes and decisions.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Strong Relationships",
      description: "We build lasting relationships with customers—growing together as one family.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "37+", label: "Years of Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Ghana Standards Authority Certified",
    "Building & Construction Authority Approved",
    "Environmental Management System",
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
                About Phastor
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              About Phastor Limited
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90"
              variants={fadeInUp}
            >
              Phastor Ltd is Ghana's most innovative and fastest-growing manufacturer of concrete products and quality standing seam roofing, serving projects nationwide since 1988.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
                variants={fadeInUp}
              >
                Our Story
              </motion.h2>
              <motion.div 
                className="space-y-4 text-muted-foreground"
                variants={staggerContainer}
              >
                <motion.p variants={staggerItem}>
<<<<<<< HEAD
                  Established in 1988, Phastor Ltd began with a simple but powerful vision: 
                  to deliver durable, high-quality building materials that builders and 
                  homeowners across Ghana could trust. From our humble beginnings as a small 
                  local operation, we've grown steadily, driven by innovation, integrity, 
                  and a commitment to excellence.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Over the years, our dedication to quality and customer satisfaction has 
                  transformed Phastor Ltd into one of Ghana's most innovative and fastest-growing 
                  manufacturers of concrete products and standing seam roofing.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Today, with 5 branches across the country, we continue to expand our reach 
                  while staying true to our roots. We believe in building more than just 
                  structures; we build relationships, reliability, and resilience.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Whether you're constructing a home, a commercial space, or an infrastructure 
                  project, Phastor Ltd is your partner in progress.
=======
                  Phastor Limited was established in 1988 and has grown into one of Ghana's most innovative and fastest-growing manufacturers of concrete products and quality standing seam roofing.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Our products meet Ghana Standards Authority requirements and international benchmarks, made possible by state-of-the-art technology and rigorous quality control.
                </motion.p>
                <motion.p variants={staggerItem}>
                  We specialize in pre-stressed beams and ceiling blocks for storey buildings (PHASTOR KWICK FLOORS), culvert pipes, building blocks, pavement blocks, septic tanks, kerbs, walkway slabs, and more.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Beyond concrete, we also produce long span Aluzinc roofing sheets and undertake real estate development.
>>>>>>> 9336e793e6e8eeb9d49e460dd8bfc44e5a4a1ab0
                </motion.p>
              </motion.div>

              <motion.div 
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={staggerContainer}
              >
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-concrete-light rounded-lg"
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-accent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        delay: index * 0.1 
                      }}
                    >
                      {achievement.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={aboutTeamImage} 
                alt="Phastor team and facilities"
                className="rounded-lg shadow-xl"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Factory className="h-6 w-6" />
                  <div>
                    <div className="font-bold">Modern Facility</div>
                    <div className="text-sm">Latest Technology</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-20 bg-concrete-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-l-4 border-accent">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Target className="h-8 w-8 text-accent" />
                      <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                    </motion.div>
                    <p className="text-muted-foreground leading-relaxed">
                      To deliver quality concrete products to your doorstep at very affordable and competitive prices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-l-4 border-accent">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Building className="h-8 w-8 text-accent" />
                      <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                    </motion.div>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the first and preferred choice concrete products manufacturer and supplier within Ghana and beyond.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <motion.div 
                      className="text-accent mb-4 flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications */}
      <section className="py-20 bg-concrete-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Modern Manufacturing Facility
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our state-of-the-art production facility uses the latest technology 
                to ensure consistent quality and efficient production of all our 
                concrete products.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Automated production lines for consistent quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Quality control testing at every stage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Environmentally responsible production</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Modern fleet for reliable delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={factoryInteriorImg} 
                alt="Phastor manufacturing facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Factory className="h-6 w-6" />
                  <div>
                    <div className="font-bold">ISO Certified</div>
                    <div className="text-sm">Quality Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Certifications & Standards
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to quality is validated by industry certifications and standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
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
            Why Choose Phastor?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Experience the difference that quality, reliability, and local expertise make. 
            Join hundreds of satisfied customers who trust Phastor for their concrete needs.
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
                <Truck className="h-5 w-5" />
                Request a Quote
              </Button>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="h-5 w-5" />
                Meet Our Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;