import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Ruler, 
  Shield, 
  Truck, 
  MessageCircle, 
  Download,
  CheckCircle,
  Weight,
  ShoppingCart,
  Eye
} from "lucide-react";

interface ProductSpecProps {
  product: {
    id: string;
    name: string;
    description: string;
    sizes: string[];
    applications: string[];
    price: number;
    priceText: string;
    features: string[];
    image: string;
    category: string;
  };
  onAddToCart?: (product: any, size?: string) => void;
}

const ProductSpec = ({ product, onAddToCart }: ProductSpecProps) => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const specifications = {
    "Hollow Blocks": {
      strength: "15-25 MPa",
      density: "1400-1600 kg/m³",
      waterAbsorption: "< 15%",
      fireRating: "2+ hours",
    },
    "Solid Blocks": {
      strength: "20-35 MPa", 
      density: "1800-2200 kg/m³",
      waterAbsorption: "< 12%",
      fireRating: "4+ hours",
    },
    "U-Drains": {
      strength: "40+ MPa",
      loadCapacity: "25-50 kN/m",
      waterFlow: "Class A",
      durability: "50+ years",
    },
    "Culverts": {
      strength: "50+ MPa",
      loadCapacity: "100+ kN/m",
      crackWidth: "< 0.1mm",
      durability: "75+ years",
    },
    "Paving Stones": {
      strength: "35+ MPa",
      slipResistance: "Class 3",
      abrasionResistance: "Class 4",
      frostResistance: "F4",
    },
    "Interlocking Blocks": {
      strength: "20-30 MPa",
      interlockForce: "High",
      installation: "No mortar",
      reusability: "100%",
    },
  };

  const spec = specifications[product.name as keyof typeof specifications];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground animate-scale-in">
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Technical Specifications */}
        {spec ? (
          <div className="bg-concrete-light p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Weight className="h-4 w-4" />
              Technical Specifications
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(spec).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Available Sizes */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            Available Sizes
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.sizes.slice(0, 3).map((size, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}
            {product.sizes.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.sizes.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-semibold mb-2">Key Benefits</h4>
          <div className="space-y-2">
            {product.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-3 w-3 text-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div>
          <h4 className="font-semibold mb-2">Common Uses</h4>
          <div className="text-sm text-muted-foreground">
            {product.applications.join(", ")}
          </div>
        </div>

        {/* Price and Actions */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-lg font-bold text-primary">GH₵{product.price.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Quality Guaranteed
              </div>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Truck className="h-3 w-3" />
              Free Delivery*
            </div>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div className="mb-4" onClick={(e) => e.stopPropagation()}>
              <label className="text-sm font-medium mb-2 block">Select Size:</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1 flex-1"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/products/${product.id}`);
              }}
            >
              <Eye className="h-3 w-3" />
              View Details
            </Button>
            {onAddToCart && (
              <Button 
                className="flex-1 gap-2 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product, selectedSize);
                }}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="h-3 w-3" />
              Spec Sheet
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSpec;