import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import {
  ShoppingCart,
  Eye,
  Building,
  Home,
  Factory,
  Ruler,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover
} from "@/lib/motion";

const Products = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    { id: "all", name: "All Products", icon: <Building className="h-4 w-4" /> },
    { id: "blocks", name: "Blocks", icon: <Home className="h-4 w-4" /> },
    { id: "drainage", name: "Drainage", icon: <Factory className="h-4 w-4" /> },
    { id: "paving", name: "Paving", icon: <Ruler className="h-4 w-4" /> },
    { id: "roofing", name: "Roofing", icon: <Shield className="h-4 w-4" /> },
  ];

  const products = [
    {
      id: "hollow-blocks",
      category: "blocks",
      name: "Hollow Blocks",
      description: "High-quality hollow concrete blocks ideal for wall construction.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/hollow_blocks_over_pallets_txroam.webp",
    },
    {
      id: "solid-blocks",
      category: "blocks",
      name: "Solid Blocks",
      description: "Dense, solid concrete blocks for structural applications.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420961/constronics-blocks-and-bricks-12-03-2021-01-222972614-954t8_rs9ctt.avif",
    },
    {
      id: "u-drains",
      category: "drainage",
      name: "U-Drains",
      description: "Precast concrete U-shaped drainage channels for water management.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421164/c11336bc9097be247e9b9fad2ded43b3_1739411046_ggitgc.webp",
    },
    {
      id: "culverts",
      category: "drainage",
      name: "Culverts",
      description: "Heavy-duty concrete culverts for major drainage projects.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421370/1K8A9877_x0qf2g.jpg",
    },
    {
      id: "paving-stones",
      category: "paving",
      name: "Paving Stones",
      description: "Decorative concrete paving stones for walkways and driveways.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421667/paver-block-1643805619-6184337_hu8spg.jpg",
    },
    {
      id: "ready-mix-concrete",
      category: "concrete",
      name: "Ready Mix Concrete",
      description: "High-quality ready-mix concrete delivered to your site for all construction needs.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/hollow_blocks_over_pallets_txroam.webp",
    },
    {
      id: "interlocking-blocks",
      category: "paving",
      name: "Interlocking Blocks",
      description: "Versatile interlocking concrete blocks for various applications.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421886/interlocking-driveway-bricks-qm2qy3yobu923zbyz7oy9pplv0wxyxfd67t5yr7b4s_nmvuef.jpg",
    },
    {
      id: "aluminum-sheets",
      category: "roofing",
      name: "Aluminum Roofing Sheets",
      description: "Lightweight, corrosion-resistant aluminum sheets with excellent durability.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422029/image_kr0jzj.webp",
    },
    {
      id: "galvanized-sheets",
      category: "roofing",
      name: "Galvanized Steel Sheets",
      description: "Durable galvanized steel roofing sheets for long-lasting protection.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422125/GI-Roof-Panels_cuslve.jpg",
    },
    {
      id: "corrugated-sheets",
      category: "roofing",
      name: "Corrugated Roofing Sheets",
      description: "Classic corrugated metal sheets perfect for industrial and residential use.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422241/coloured-roofing-sheet-500x500-1_jvwf2h.jpg",
    },
    {
      id: "polycarbonate-sheets",
      category: "roofing",
      name: "Polycarbonate Sheets",
      description: "Transparent polycarbonate sheets for natural lighting and weather protection.",

      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422030/aluminum-roofing-sheet_qhehfr.jpg",
    },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: 0,
      image: product.image,
      description: product.description,
      category: product.category,
      stock_quantity: 100,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sizes: ["Standard"],
      applications: ["Construction"],
      features: ["High Quality"],
    }, 1);

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              High-quality concrete products for all your construction needs
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        className="py-20"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
          >
            {productCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                  }`}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                whileHover="hover"
              >
                <Link to={product.id === 'ready-mix-concrete' ? '/ready-mix-concrete' : `/products/${product.id}`} className="block">
                  <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="capitalize">
                          {product.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {product.description}
                      </p>

                      <div className="space-y-4">

                        <div className="flex gap-2">
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleAddToCart(product);
                            }}
                            className="flex-1 gap-2"
                            size="sm"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (product.id === 'ready-mix-concrete') {
                                navigate('/ready-mix-concrete');
                              } else {
                                navigate(`/products/${product.id}`);
                              }
                            }}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Eye className="h-4 w-4" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Products;
