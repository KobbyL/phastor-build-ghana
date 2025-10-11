import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, MessageCircle, Building, Lightbulb } from "lucide-react";
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

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Phastor Expands Production Capacity to Meet Growing Demand",
      excerpt: "We're pleased to announce the expansion of our production facility with new state-of-the-art equipment, increasing our daily output by 40%.",
      content: "Our investment in modern concrete block manufacturing equipment will allow us to better serve the growing construction industry in Ghana while maintaining our high quality standards. The new automated production line can produce 5,000 blocks per day.",
      date: "2024-01-15",
      author: "Phastor Management",
      category: "Company News",
      featured: true,
    },
    {
      id: 2,
      title: "5 Essential Tips for Choosing the Right Concrete Blocks",
      excerpt: "Not all concrete blocks are created equal. Here's how to select the best blocks for your construction project.",
      content: "Understanding the different types of concrete blocks and their applications can save you time and money on your construction project. Consider factors like load-bearing requirements, environmental conditions, and aesthetic preferences.",
      date: "2024-01-10",
      author: "Engineering Team",
      category: "Tips & Guides",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Construction: Our Environmental Commitment",
      excerpt: "Learn about Phastor's initiatives to reduce environmental impact while producing high-quality concrete products.",
      content: "We're committed to sustainable manufacturing practices that protect Ghana's environment for future generations. Our new recycling program reduces waste by 30% and our solar-powered facility cuts energy consumption.",
      date: "2024-01-05",
      author: "Sustainability Team",
      category: "Sustainability",
      featured: false,
    },
    {
      id: 4,
      title: "Why Proper Drainage is Critical for Construction Projects",
      excerpt: "Discover how quality U-drains and culverts protect your investment and ensure long-lasting structures.",
      content: "Proper drainage systems are essential for preventing water damage and ensuring the longevity of construction projects in Ghana's climate. Poor drainage can lead to foundation issues and structural damage.",
      date: "2023-12-28",
      author: "Technical Team",
      category: "Tips & Guides",
      featured: false,
    },
    {
      id: 5,
      title: "New Partnership with Ghana Standards Authority",
      excerpt: "Phastor strengthens its commitment to quality with enhanced certification processes and regular quality audits.",
      content: "This partnership ensures our products consistently meet international standards for strength, durability, and safety. Regular audits and testing protocols maintain our high-quality standards.",
      date: "2023-12-20",
      author: "Quality Team",
      category: "Company News",
      featured: false,
    },
    {
      id: 6,
      title: "Understanding Concrete Block Strength Grades",
      excerpt: "A comprehensive guide to concrete block classifications and their appropriate applications in construction.",
      content: "Learn how to choose the right strength grade for your specific construction needs and local building requirements. Different grades are suitable for different structural applications.",
      date: "2023-12-15",
      author: "Engineering Team",
      category: "Tips & Guides",
      featured: false,
    },
    {
      id: 7,
      title: "Phastor Wins Best Concrete Supplier Award 2023",
      excerpt: "We're honored to receive recognition for excellence in quality and customer service from the Ghana Construction Association.",
      content: "This award recognizes our commitment to providing superior concrete products and exceptional customer service to contractors and developers across Ghana.",
      date: "2023-11-30",
      author: "Phastor Team",
      category: "Company News",
      featured: false,
    },
    {
      id: 8,
      title: "Construction Safety: Working with Concrete Products",
      excerpt: "Essential safety guidelines for handling and installing concrete blocks, drains, and other concrete products.",
      content: "Safety is paramount in construction. Follow these guidelines for proper handling, lifting, and installation of concrete products to prevent injuries and ensure project success.",
      date: "2023-11-15",
      author: "Safety Team",
      category: "Tips & Guides",
      featured: false,
    },
  ];

  const categories = ["All", "Company News", "Tips & Guides", "Sustainability"];

  const tips = [
    {
      title: "Storage Best Practices",
      description: "Keep concrete blocks dry and stacked properly to maintain quality before use. Store on pallets and cover with waterproof material.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Quality Inspection",
      description: "Check blocks for cracks, proper dimensions, and uniform color before installation. Reject any damaged products.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Project Planning",
      description: "Order 5-10% extra blocks to account for breakage and cutting requirements. Plan delivery schedules carefully.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Installation Tips",
      description: "Use proper mortar mix ratios and ensure level foundations. Allow adequate curing time for optimal strength.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Weather Considerations",
      description: "Avoid installation during heavy rain. Protect newly laid blocks from extreme weather conditions.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Cost Optimization",
      description: "Buy in bulk for better pricing. Consider transportation costs when planning delivery locations.",
      icon: <Calendar className="h-6 w-6" />,
    },
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
                News & Tips
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Stay Updated with Phastor
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90"
              variants={fadeInUp}
            >
              Get the latest news, construction tips, and industry insights from 
              Ghana's leading concrete products manufacturer.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Article */}
      {newsArticles.filter(article => article.featured).map(article => (
        <motion.section 
          key={article.id} 
          className="py-20 bg-concrete-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <Badge className="mb-4">{article.category}</Badge>
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-primary mb-4"
                variants={fadeInUp}
              >
                {article.title}
              </motion.h2>
              <motion.div 
                className="flex items-center gap-6 text-muted-foreground mb-6"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
              </motion.div>
              <motion.p 
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                {article.content}
              </motion.p>
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Discuss This News
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* Quick Tips Section */}
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
              Quick Construction Tips
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Professional advice from our experienced team to help you succeed.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <motion.div 
                      className="text-accent mb-4 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tip.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* News Articles */}
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
              Latest Articles
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Stay informed with our latest news and helpful construction guides.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2 p-0">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
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
            Stay Informed
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Get construction tips, product updates, and industry news delivered to your inbox.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://wa.me/+233552560460" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                  <MessageCircle className="h-5 w-5" />
                  Follow on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-sm opacity-70 mt-4"
            variants={fadeInUp}
          >
            Get instant updates and tips via WhatsApp
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default News;