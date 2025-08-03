import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building, Users, MessageCircle } from "lucide-react";
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

// Import project images
import projectOfficeImg from "@/assets/project-office.jpg";
import projectResidentialImg from "@/assets/project-residential.jpg";
import projectIndustrialImg from "@/assets/project-industrial.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Accra Metropolitan Assembly Office Complex",
      location: "Accra, Greater Accra",
      year: "2024",
      category: "Government",
      description: "Supply of 50,000 hollow blocks and 2,000 meters of U-drains for the new AMA office complex. This project showcases our ability to handle large-scale government contracts with timely delivery.",
      products: ["Hollow Blocks (8\" & 12\")", "U-Drains (600mm)", "Solid Blocks"],
      client: "Ghana Government",
      status: "Completed",
      image: projectOfficeImg,
    },
    {
      title: "East Legon Residential Estate",
      location: "East Legon, Accra",
      year: "2023",
      category: "Residential",
      description: "Comprehensive concrete product supply for a 120-unit residential development. Included custom paving stones for driveways and walkways.",
      products: ["Hollow Blocks", "Paving Stones", "U-Drains", "Culverts"],
      client: "Prime Properties Ltd",
      status: "Completed",
      image: projectResidentialImg,
    },
    {
      title: "Tema Industrial Zone Warehouse",
      location: "Tema, Greater Accra",
      year: "2023",
      category: "Industrial",
      description: "Large-scale warehouse construction requiring high-strength solid blocks and specialized drainage solutions for the industrial complex.",
      products: ["Solid Blocks (12\")", "Heavy-duty U-Drains", "Custom Culverts"],
      client: "Industrial Corp Ghana",
      status: "Completed",
      image: projectIndustrialImg,
    },
    {
      title: "University of Ghana Student Housing",
      location: "Legon, Accra",
      year: "2022",
      category: "Educational",
      description: "Student accommodation project requiring 35,000 concrete blocks and comprehensive drainage systems for the new dormitory complex.",
      products: ["Hollow Blocks", "Solid Blocks", "U-Drains", "Paving Stones"],
      client: "University of Ghana",
      status: "Completed",
      image: projectOfficeImg,
    },
    {
      title: "Kotoka International Airport Expansion",
      location: "Airport City, Accra",
      year: "2022",
      category: "Infrastructure",
      description: "Critical infrastructure project supplying specialized concrete products for runway extensions and terminal building construction.",
      products: ["High-strength Solid Blocks", "Custom Culverts", "Heavy-duty U-Drains"],
      client: "Ghana Airports Company",
      status: "Completed",
      image: projectIndustrialImg,
    },
    {
      title: "Kumasi Central Market Reconstruction",
      location: "Kumasi, Ashanti Region",
      year: "2021",
      category: "Commercial",
      description: "Market reconstruction project featuring modern drainage systems and durable concrete block construction for vendor stalls.",
      products: ["Hollow Blocks", "U-Drains", "Paving Stones", "Solid Blocks"],
      client: "Kumasi Metropolitan Assembly",
      status: "Completed",
      image: projectResidentialImg,
    },
  ];

  const categories = ["All", "Government", "Residential", "Industrial", "Educational", "Infrastructure", "Commercial"];
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "2M+", label: "Blocks Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
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
                Our Projects
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Building Ghana's Future, One Project at a Time
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90 mb-8"
              variants={fadeInUp}
            >
              Explore our portfolio of successful projects across Ghana. From government 
              buildings to residential developments, we've supplied quality concrete 
              products that stand the test of time.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-accent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
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
              Recent Project Highlights
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              See how our quality concrete products have contributed to major construction projects across Ghana.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Products Supplied:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.products.map((product, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-sm font-medium">Client: {project.client}</div>
                          <div className="text-xs text-muted-foreground">Status: {project.status}</div>
                        </div>
                        <div className="flex items-center gap-1 text-success text-sm">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">Completed</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section 
        className="py-20 bg-concrete-light"
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
              Project Capabilities
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              We handle projects of all sizes across multiple sectors in Ghana.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center p-6 bg-card rounded-lg"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Building className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Government Projects</h3>
              <p className="text-muted-foreground">
                Official supplier for major government infrastructure and building projects across Ghana.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-card rounded-lg"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Private Developments</h3>
              <p className="text-muted-foreground">
                Trusted partner for residential estates, commercial complexes, and industrial facilities.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-card rounded-lg"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Specialized concrete products designed and manufactured for unique project requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
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
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-accent text-2xl font-bold">"</div>
                    <p className="text-muted-foreground italic">
                      Phastor's blocks were exactly what we needed for our residential project. 
                      Quality products, timely delivery, and excellent customer service.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">John Mensah</div>
                    <div className="text-sm text-muted-foreground">Project Manager, Prime Properties</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-accent text-2xl font-bold">"</div>
                    <p className="text-muted-foreground italic">
                      We've been working with Phastor for 3 years. Their consistency in 
                      quality and reliability makes them our go-to supplier.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">Mary Asante</div>
                    <div className="text-sm text-muted-foreground">Construction Manager, BuildCorp Ghana</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-accent text-2xl font-bold">"</div>
                    <p className="text-muted-foreground italic">
                      Exceptional products and service. Phastor helped us complete our 
                      project on time and within budget.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">Kwame Osei</div>
                    <div className="text-sm text-muted-foreground">Director, Osei Construction Ltd</div>
                  </div>
                </CardContent>
              </Card>
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
            Ready to Start Your Next Project?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Join our growing list of satisfied clients. Let's discuss how Phastor 
            can contribute to your project's success.
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
                Discuss Your Project
              </Button>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Building className="h-5 w-5" />
                View Our Products
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;