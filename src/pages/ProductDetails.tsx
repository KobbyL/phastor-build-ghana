import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Download, 
  MessageCircle, 
  Phone,
  Ruler, 
  Shield, 
  Truck, 
  Weight,
  CheckCircle,
  Star,
  MapPin,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  buttonVariants
} from "@/lib/motion";
import { useCart } from "@/components/CartContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: "hollow-blocks",
      category: "blocks",
      name: "Hollow Blocks",
      description: "High-quality hollow concrete blocks ideal for wall construction. Lightweight yet strong, perfect for residential and commercial buildings.",
      longDescription: "Our premium hollow blocks are manufactured using high-grade concrete and advanced production techniques. These blocks feature hollow cores that provide excellent thermal insulation while maintaining structural integrity. Perfect for both load-bearing and non-load-bearing walls, they offer significant cost savings in construction while ensuring superior performance.",
      sizes: ["6 inch (150mm)", "8 inch (200mm)", "9 inch (225mm)", "12 inch (300mm)"],
      applications: ["Wall construction", "Partition walls", "Load-bearing walls", "Exterior walls", "Interior walls"],
      price: 2.50,
      priceText: "From GHS 2.50 per block",
      features: ["Lightweight", "High strength", "Thermal insulation", "Sound dampening", "Fire resistant", "Cost-effective"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/hollow_blocks_over_pallets_txroam.webp",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/hollow_blocks_over_pallets_txroam.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/Valid-From-1-10-May-2024-While-stock-lasts-52-1_glkqu6.png",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420729/concrete_masonry_unit_cg7xbp.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421371/1K8A9890_qri0iz.jpg"
      ],
      specifications: {
        strength: "15-25 MPa",
        density: "1400-1600 kg/m³",
        waterAbsorption: "< 15%",
        fireRating: "2+ hours",
        compressiveStrength: "15-25 MPa",
        thermalConductivity: "0.8-1.2 W/mK",
        soundTransmission: "45-50 dB"
      },
      benefits: [
        "Reduces construction time and costs",
        "Excellent thermal and sound insulation",
        "Lightweight for easy handling",
        "Consistent quality and dimensions",
        "Environmentally friendly"
      ]
    },
    {
      id: "solid-blocks",
      category: "blocks",
      name: "Solid Blocks",
      description: "Dense, solid concrete blocks for structural applications requiring maximum strength and durability.",
      longDescription: "Our solid concrete blocks are engineered for maximum strength and durability, making them ideal for structural applications where load-bearing capacity is critical. These blocks are manufactured using high-density concrete and undergo rigorous quality control to ensure they meet or exceed industry standards.",
      sizes: ["4 inch (100mm)", "6 inch (150mm)", "8 inch (200mm)"],
      applications: ["Foundation walls", "Retaining walls", "Structural walls", "Basement walls", "Heavy-duty construction"],
      price: 3.00,
      priceText: "From GHS 3.00 per block",
      features: ["Maximum strength", "Weather resistant", "Fire resistant", "Long-lasting", "High density", "Structural integrity"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420961/constronics-blocks-and-bricks-12-03-2021-01-222972614-954t8_rs9ctt.avif",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420961/constronics-blocks-and-bricks-12-03-2021-01-222972614-954t8_rs9ctt.avif",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420961/concrete-compressed_oeivab.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420961/Untitled-1_h9mq8y.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754420962/80ec324dfb9a41778eee64716b2c019f_jmwuzh.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421375/1K8A9855_ghamk3.jpg"
      ],
      specifications: {
        strength: "20-35 MPa",
        density: "1800-2200 kg/m³",
        waterAbsorption: "< 12%",
        fireRating: "4+ hours",
        compressiveStrength: "20-35 MPa",
        thermalConductivity: "1.5-2.0 W/mK",
        soundTransmission: "50-55 dB"
      },
      benefits: [
        "Maximum structural strength",
        "Superior load-bearing capacity",
        "Excellent weather resistance",
        "Long service life",
        "Fire and impact resistant"
      ]
    },
    {
      id: "u-drains",
      category: "drainage",
      name: "U-Drains",
      description: "Precast concrete U-shaped drainage channels for effective water management in urban and rural areas.",
      longDescription: "Our U-drains are precision-engineered drainage solutions designed for efficient water management in various environments. These precast concrete channels feature smooth internal surfaces for optimal water flow and are reinforced for durability under heavy loads.",
      sizes: ["300mm width", "450mm width", "600mm width", "Custom sizes"],
      applications: ["Road drainage", "Residential drainage", "Commercial drainage", "Industrial drainage", "Agricultural drainage"],
      price: 45.00,
      priceText: "From GHS 45.00 per meter",
      features: ["Easy installation", "Durable", "Smooth water flow", "Cost-effective", "Load-bearing", "Weather resistant"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421164/c11336bc9097be247e9b9fad2ded43b3_1739411046_ggitgc.webp",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421164/c11336bc9097be247e9b9fad2ded43b3_1739411046_ggitgc.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421164/precast-rcc-u-drains-500x500_oxpgx3.webp"
      ],
      specifications: {
        strength: "40+ MPa",
        loadCapacity: "25-50 kN/m",
        waterFlow: "Class A",
        durability: "50+ years",
        compressiveStrength: "40+ MPa",
        crackWidth: "< 0.2mm",
        abrasionResistance: "High"
      },
      benefits: [
        "Efficient water drainage",
        "Easy and quick installation",
        "Durable and long-lasting",
        "Cost-effective solution",
        "Low maintenance requirements"
      ]
    },
    {
      id: "culverts",
      category: "drainage",
      name: "Culverts",
      description: "Heavy-duty concrete culverts for major drainage and infrastructure projects. Built to withstand heavy loads.",
      longDescription: "Our heavy-duty culverts are designed for major infrastructure projects where reliability and durability are paramount. These precast concrete culverts are engineered to withstand extreme loads and harsh environmental conditions while providing efficient water flow.",
      sizes: ["600mm diameter", "900mm diameter", "1200mm diameter", "Custom sizes"],
      applications: ["Road crossings", "Bridge drainage", "Large infrastructure", "Highway drainage", "Railway drainage"],
      price: 350.00,
      priceText: "From GHS 350.00 per meter",
      features: ["Heavy-duty", "Load-bearing", "Weather resistant", "Long service life", "High strength", "Corrosion resistant"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421370/1K8A9877_x0qf2g.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421370/1K8A9877_x0qf2g.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421366/1K8A9878_l3zbnx.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421486/concretepipe-500x500h_jekmw4.gif",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421486/bigstock-Concrete-Drainage-Pipe-On-A-Co-372351190-800x600_vr4j9t.jpg"
      ],
      specifications: {
        strength: "50+ MPa",
        loadCapacity: "100+ kN/m",
        crackWidth: "< 0.1mm",
        durability: "75+ years",
        compressiveStrength: "50+ MPa",
        impactResistance: "High",
        chemicalResistance: "Excellent"
      },
      benefits: [
        "Extreme load-bearing capacity",
        "Long service life",
        "Minimal maintenance",
        "Superior strength",
        "Weather and corrosion resistant"
      ]
    },
    {
      id: "paving-stones",
      category: "paving",
      name: "Paving Stones",
      description: "Decorative and functional concrete paving stones available in various patterns and colors for beautiful outdoor spaces.",
      longDescription: "Our paving stones combine aesthetic appeal with functional performance, creating beautiful and durable outdoor surfaces. Available in various patterns, colors, and textures, these interlocking stones provide excellent drainage and are designed to withstand heavy foot and vehicle traffic.",
      sizes: ["200x100x60mm", "200x200x60mm", "300x300x60mm", "Custom patterns"],
      applications: ["Driveways", "Walkways", "Patios", "Public spaces", "Commercial areas", "Residential landscaping"],
      price: 18.00,
      priceText: "From GHS 18.00 per m²",
      features: ["Non-slip surface", "Weather resistant", "Easy maintenance", "Attractive finish", "Interlocking design", "Permeable"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421886/interlocking-driveway-bricks-qm2qy3yobu923zbyz7oy9pplv0wxyxfd67t5yr7b4s_nmvuef.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421886/interlocking-driveway-bricks-qm2qy3yobu923zbyz7oy9pplv0wxyxfd67t5yr7b4s_nmvuef.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421888/bigstock-New-Sidewalk-Made-Of-Concrete-472659757-1_y2eubc.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421887/quick-efficient-interlocking-installation-services-img1_m3xxfj.jpg"
      ],
      specifications: {
        strength: "35+ MPa",
        slipResistance: "Class 3",
        abrasionResistance: "Class 4",
        frostResistance: "F4",
        compressiveStrength: "35+ MPa",
        waterAbsorption: "< 6%",
        freezeThawResistance: "Excellent"
      },
      benefits: [
        "Beautiful and durable finish",
        "Excellent drainage properties",
        "Easy to maintain and clean",
        "Slip-resistant surface",
        "Environmentally friendly"
      ]
    },
    {
      id: "interlocking-blocks",
      category: "blocks",
      name: "Interlocking Blocks",
      description: "Self-locking concrete blocks that require no mortar for construction. Perfect for quick and efficient building.",
      longDescription: "Our interlocking blocks feature a unique design that allows them to lock together without mortar, enabling rapid construction while maintaining structural integrity. These blocks are perfect for temporary structures, emergency housing, and projects requiring quick assembly.",
      sizes: ["Standard 390x190x190mm", "Half block 190x190x190mm"],
      applications: ["Quick construction", "Temporary structures", "Emergency housing", "Modular buildings", "Retaining walls"],
      price: 3.50,
      priceText: "From GHS 3.50 per block",
      features: ["No mortar needed", "Quick installation", "Reusable", "Cost-effective", "Modular design", "Easy disassembly"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421667/paver-block-1643805619-6184337_hu8spg.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421667/paver-block-1643805619-6184337_hu8spg.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421667/img-20210713-wa0038-jpg-500x500_jojtmi.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754421668/Homepage_Pavement-Block_Thumbnail_w2wbxr.jpg"
      ],
      specifications: {
        strength: "20-30 MPa",
        interlockForce: "High",
        installation: "No mortar",
        reusability: "100%",
        compressiveStrength: "20-30 MPa",
        density: "1600-1800 kg/m³",
        waterAbsorption: "< 15%"
      },
      benefits: [
        "Rapid construction capability",
        "No mortar required",
        "Reusable and cost-effective",
        "Easy to assemble and disassemble",
        "Modular and flexible design"
      ]
    },
    {
      id: "aluminum-sheets",
      category: "roofing",
      name: "Aluminum Roofing Sheets",
      description: "Lightweight, corrosion-resistant aluminum sheets with excellent durability and thermal properties.",
      longDescription: "Our premium aluminum roofing sheets are manufactured from high-grade aluminum alloy, offering superior corrosion resistance and longevity. These sheets are lightweight yet strong, making them ideal for both residential and commercial roofing applications. The natural oxide layer provides excellent weather protection.",
      sizes: ["0.5mm thickness", "0.7mm thickness", "0.9mm thickness", "Custom lengths available"],
      applications: ["Residential roofing", "Commercial buildings", "Industrial structures", "Agricultural buildings", "Canopies and awnings"],
      price: 45.00,
      priceText: "From GHS 45.00 per m²",
      features: ["Corrosion resistant", "Lightweight", "Recyclable", "Low maintenance", "Thermal efficient", "Fire resistant"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422029/image_kr0jzj.webp",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422029/image_kr0jzj.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422031/jsw-roofing-sheets_yssu1y.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422030/aluminum-roofing-sheet_qhehfr.jpg"
      ],
      specifications: {
        material: "Aluminum Alloy",
        thickness: "0.5-0.9mm",
        coating: "Mill finish/Painted",
        thermalExpansion: "23.1 × 10⁻⁶/°C",
        tensileStrength: "270-310 MPa",
        density: "2.70 g/cm³",
        meltingPoint: "660°C"
      },
      benefits: [
        "Excellent corrosion resistance",
        "Lightweight and easy to install",
        "100% recyclable material",
        "Superior thermal performance",
        "Long-lasting durability"
      ]
    },
    {
      id: "galvanized-sheets",
      category: "roofing",
      name: "Galvanized Steel Sheets",
      description: "Durable galvanized steel roofing sheets with zinc coating for superior corrosion protection.",
      longDescription: "Our galvanized steel sheets feature a protective zinc coating that provides excellent corrosion resistance and longevity. These sheets are ideal for harsh weather conditions and offer exceptional strength-to-weight ratio, making them perfect for various roofing applications.",
      sizes: ["0.4mm thickness", "0.5mm thickness", "0.7mm thickness", "Standard 3m lengths"],
      applications: ["Industrial roofing", "Warehouse construction", "Agricultural buildings", "Residential roofing", "Shed construction"],
      price: 35.00,
      priceText: "From GHS 35.00 per m²",
      features: ["Zinc coated", "High strength", "Weather resistant", "Cost effective", "Easy installation", "Fire resistant"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422125/GI-Roof-Panels_cuslve.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422125/GI-Roof-Panels_cuslve.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422126/Wavy-GI-Roofing-Sheet_v8ahfg.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422127/Corrugated-Galvanized-Steel-Sheets_yvvy8q.jpg"
      ],
      specifications: {
        material: "Galvanized Steel",
        coating: "Z275 Zinc coating",
        thickness: "0.4-0.7mm",
        yieldStrength: "280-350 MPa",
        tensileStrength: "370-500 MPa",
        elongation: "20-22%",
        hardness: "HRB 60-85"
      },
      benefits: [
        "Superior corrosion protection",
        "High strength and durability",
        "Cost-effective solution",
        "Weather resistant coating",
        "Easy maintenance"
      ]
    },
    {
      id: "corrugated-sheets",
      category: "roofing",
      name: "Corrugated Roofing Sheets",
      description: "Classic corrugated metal sheets perfect for industrial and residential roofing applications.",
      longDescription: "Our corrugated roofing sheets feature the traditional wave pattern that provides excellent structural strength and water drainage. These sheets are manufactured to precise specifications and offer reliable performance in various weather conditions.",
      sizes: ["Standard corrugation", "Deep corrugation", "Custom profiles", "Various lengths"],
      applications: ["Industrial roofing", "Farm buildings", "Workshops", "Storage facilities", "Residential extensions"],
      price: 28.00,
      priceText: "From GHS 28.00 per m²",
      features: ["Corrugated profile", "Water drainage", "Structural strength", "Versatile", "Traditional design", "Cost effective"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422241/coloured-roofing-sheet-500x500-1_jvwf2h.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422241/coloured-roofing-sheet-500x500-1_jvwf2h.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422241/819ExA-QrAL._AC_SL1500__s2aju6.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422243/tata-galvanized-roofing-sheets-500x500_q1lhsm.webp"
      ],
      specifications: {
        profile: "Corrugated 76/18",
        pitch: "76mm",
        depth: "18mm",
        coverage: "762mm effective",
        material: "Galvanized steel",
        thickness: "0.5-0.7mm",
        weight: "4.5-6.3 kg/m²"
      },
      benefits: [
        "Excellent water drainage",
        "High structural strength",
        "Traditional and reliable",
        "Cost-effective solution",
        "Easy installation"
      ]
    },
    {
      id: "polycarbonate-sheets",
      category: "roofing",
      name: "Polycarbonate Sheets",
      description: "Transparent polycarbonate sheets for natural lighting while providing weather protection.",
      longDescription: "Our polycarbonate sheets offer the perfect combination of transparency and durability. These sheets allow natural light to pass through while providing excellent weather protection. They are virtually unbreakable and offer superior impact resistance compared to glass.",
      sizes: ["4mm twin-wall", "6mm twin-wall", "10mm twin-wall", "Solid sheets available"],
      applications: ["Skylights", "Canopies", "Greenhouses", "Carports", "Walkway covers", "Patio roofing"],
      price: 55.00,
      priceText: "From GHS 55.00 per m²",
      features: ["UV protected", "Impact resistant", "Lightweight", "Transparent", "Thermal insulation", "Easy to cut"],
      image: "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422030/aluminum-roofing-sheet_qhehfr.jpg",
      gallery: [
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422030/aluminum-roofing-sheet_qhehfr.jpg",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422029/image_kr0jzj.webp",
        "https://res.cloudinary.com/dhs1h58bs/image/upload/v1754422031/jsw-roofing-sheets_yssu1y.jpg"
      ],
      specifications: {
        material: "Polycarbonate",
        lightTransmission: "80-90%",
        impactStrength: "250x glass",
        thermalInsulation: "Excellent",
        uvProtection: "Co-extruded",
        temperature: "-40°C to +120°C",
        warranty: "10 years"
      },
      benefits: [
        "Natural light transmission",
        "Virtually unbreakable",
        "Excellent thermal insulation",
        "UV protection included",
        "Lightweight and flexible"
      ]
    }
  ];

  const product = products.find(p => p.id === productId);

  const handleContact = () => {
    toast({
      title: "Contact Information",
      description: "Please call us at +233 XX XXX XXXX or WhatsApp for more details.",
    });
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        stock_quantity: 100,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        sizes: product.sizes,
        applications: product.applications,
        features: product.features,
        priceText: product.priceText
      }, quantity);

      toast({
        title: "Added to Cart",
        description: `${quantity} ${product.name}(s) added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-background pt-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div variants={staggerItem} className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/products")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </motion.div>

        {/* Product Header */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          variants={staggerContainer}
        >
          {/* Product Images */}
          <motion.div variants={staggerItem}>
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 capitalize">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg mb-6">
                {product.longDescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  {product.priceText}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 10, 20, 50].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 gap-2"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="gap-2" onClick={handleContact}>
                <MessageCircle className="h-4 w-4" />
                WhatsApp Quote
              </Button>
              <Button variant="outline" className="gap-2" onClick={handleContact}>
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Spec
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Detailed Information */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {/* Specifications */}
          <motion.div variants={staggerItem}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Weight className="h-5 w-5 text-accent" />
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Applications */}
          <motion.div variants={staggerItem}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-accent" />
                  Applications
                </h3>
                <div className="space-y-2">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={staggerItem}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Key Benefits
                </h3>
                <div className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center"
          variants={staggerItem}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us today for competitive pricing and expert advice on {product.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90" onClick={handleContact}>
              <MessageCircle className="h-5 w-5" />
              WhatsApp Quote
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={handleContact}>
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
              <Download className="h-5 w-5" />
              Download Spec Sheet
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
