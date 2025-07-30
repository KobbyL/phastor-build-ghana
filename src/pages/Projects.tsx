import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building, Users, MessageCircle } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Ghana's Future, One Project at a Time
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Explore our portfolio of successful projects across Ghana. From government 
              buildings to residential developments, we've supplied quality concrete 
              products that stand the test of time.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Project Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our quality concrete products have contributed to major construction projects across Ghana.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-concrete-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Project Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              We handle projects of all sizes across multiple sectors in Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government Projects</h3>
              <p className="text-muted-foreground">
                Official supplier for major government infrastructure and building projects across Ghana.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg">
              <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Private Developments</h3>
              <p className="text-muted-foreground">
                Trusted partner for residential estates, commercial complexes, and industrial facilities.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg">
              <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Specialized concrete products designed and manufactured for unique project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing list of satisfied clients. Let's discuss how Phastor 
            can contribute to your project's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
              <MessageCircle className="h-5 w-5" />
              Discuss Your Project
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Building className="h-5 w-5" />
              View Our Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;