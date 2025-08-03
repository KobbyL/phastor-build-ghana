import { motion } from "framer-motion";
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
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product undergoes rigorous testing to meet international standards.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Our customers' success is our success. We provide personalized service and support throughout every project.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product manufacturing to customer service.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously invest in modern technology and innovative processes to deliver superior products.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years of Experience" },
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
              Building Ghana's Future with Quality Concrete Products
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90"
              variants={fadeInUp}
            >
              Since 2015, Phastor Concrete Products Ltd has been a trusted partner 
              in Ghana's construction industry, delivering premium concrete solutions 
              that stand the test of time.
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
                  Phastor Concrete Products Ltd was founded in 2015 with a simple mission: 
                  to provide Ghana with the highest quality concrete products that contractors, 
                  developers, and homeowners can trust.
                </motion.p>
                <motion.p variants={staggerItem}>
                  What started as a small operation has grown into one of Ghana's most 
                  reliable concrete product manufacturers. Our commitment to quality, 
                  innovation, and customer satisfaction has earned us the trust of 
                  hundreds of clients across the country.
                </motion.p>
                <motion.p variants={staggerItem}>
                  Today, we operate state-of-the-art production facilities and maintain 
                  a modern fleet of delivery vehicles to ensure your projects stay on 
                  schedule. Our team of experienced professionals is dedicated to 
                  providing you with the best products and service in the industry.
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
                      To provide Ghana's construction industry with premium quality concrete 
                      products that exceed expectations while maintaining the highest standards 
                      of customer service, reliability, and environmental responsibility.
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
                      To be West Africa's leading manufacturer of concrete products, 
                      recognized for innovation, quality, and our contribution to building 
                      sustainable infrastructure that serves communities for generations.
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