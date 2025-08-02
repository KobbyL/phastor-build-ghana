import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Home, 
  Factory, 
  Ruler, 
  Shield, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

interface ProductCategoriesProps {
  onCategorySelect: (category: string) => void;
}

const ProductCategories = ({ onCategorySelect }: ProductCategoriesProps) => {
  const categories = [
    {
      id: "blocks",
      name: "Concrete Blocks",
      description: "High-quality hollow and solid blocks for construction",
      icon: <Building className="h-8 w-8" />,
      features: ["Load bearing", "Thermal insulation", "Multiple sizes"],
      gradient: "from-primary to-accent"
    },
    {
      id: "drainage",
      name: "Drainage Solutions",
      description: "U-drains and culverts for effective water management",
      icon: <Factory className="h-8 w-8" />,
      features: ["Heavy duty", "Weather resistant", "Custom sizes"],
      gradient: "from-accent to-primary"
    },
    {
      id: "paving",
      name: "Paving Solutions",
      description: "Decorative stones and interlocking blocks",
      icon: <Ruler className="h-8 w-8" />,
      features: ["Non-slip", "Multiple colors", "Easy maintenance"],
      gradient: "from-primary/80 to-accent/80"
    },
    {
      id: "roofing",
      name: "Roofing Sheets",
      description: "Premium aluminum and corrugated roofing sheets",
      icon: <Shield className="h-8 w-8" />,
      features: ["Lightweight", "Corrosion resistant", "Long lasting"],
      gradient: "from-accent/80 to-primary/80"
    }
  ];

  return (
    <section className="py-20 bg-concrete-light animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground animate-scale-in">
            Product Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
            Explore Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            From foundation to roof, we provide comprehensive construction solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in hover-scale border-0 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onCategorySelect(category.id)}
            >
              <div className={`bg-gradient-to-br ${category.gradient} text-white p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg w-fit mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  View Products
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;