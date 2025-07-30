import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, MessageCircle, Building, Lightbulb } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Phastor Expands Production Capacity to Meet Growing Demand",
      excerpt: "We're pleased to announce the expansion of our production facility with new state-of-the-art equipment, increasing our daily output by 40%.",
      content: "Our investment in modern concrete block manufacturing equipment will allow us to better serve the growing construction industry in Ghana while maintaining our high quality standards.",
      date: "2024-01-15",
      author: "Phastor Team",
      category: "Company News",
      featured: true,
    },
    {
      id: 2,
      title: "5 Essential Tips for Choosing the Right Concrete Blocks",
      excerpt: "Not all concrete blocks are created equal. Here's how to select the best blocks for your construction project.",
      content: "Understanding the different types of concrete blocks and their applications can save you time and money on your construction project.",
      date: "2024-01-10",
      author: "Engineering Team",
      category: "Tips & Guides",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Construction: Our Environmental Commitment",
      excerpt: "Learn about Phastor's initiatives to reduce environmental impact while producing high-quality concrete products.",
      content: "We're committed to sustainable manufacturing practices that protect Ghana's environment for future generations.",
      date: "2024-01-05",
      author: "Sustainability Team",
      category: "Sustainability",
      featured: false,
    },
    {
      id: 4,
      title: "Why Proper Drainage is Critical for Construction Projects",
      excerpt: "Discover how quality U-drains and culverts protect your investment and ensure long-lasting structures.",
      content: "Proper drainage systems are essential for preventing water damage and ensuring the longevity of construction projects in Ghana's climate.",
      date: "2023-12-28",
      author: "Technical Team",
      category: "Tips & Guides",
      featured: false,
    },
    {
      id: 5,
      title: "New Partnership with Ghana Standards Authority",
      excerpt: "Phastor strengthens its commitment to quality with enhanced certification processes and regular quality audits.",
      content: "This partnership ensures our products consistently meet international standards for strength, durability, and safety.",
      date: "2023-12-20",
      author: "Quality Team",
      category: "Company News",
      featured: false,
    },
    {
      id: 6,
      title: "Understanding Concrete Block Strength Grades",
      excerpt: "A comprehensive guide to concrete block classifications and their appropriate applications in construction.",
      content: "Learn how to choose the right strength grade for your specific construction needs and local building requirements.",
      date: "2023-12-15",
      author: "Engineering Team",
      category: "Tips & Guides",
      featured: false,
    },
  ];

  const categories = ["All", "Company News", "Tips & Guides", "Sustainability"];

  const tips = [
    {
      title: "Storage Best Practices",
      description: "Keep concrete blocks dry and stacked properly to maintain quality before use.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Quality Inspection",
      description: "Check blocks for cracks, proper dimensions, and uniform color before installation.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Project Planning",
      description: "Order 5-10% extra blocks to account for breakage and cutting requirements.",
      icon: <Calendar className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              News & Tips
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with Phastor
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Get the latest news, construction tips, and industry insights from 
              Ghana's leading concrete products manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {newsArticles.filter(article => article.featured).map(article => (
        <section key={article.id} className="py-20 bg-concrete-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">{article.category}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {article.title}
              </h2>
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
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
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.content}
              </p>
              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Discuss This News
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* Quick Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Construction Tips
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional advice from our experienced team to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 flex justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-concrete-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest news and helpful construction guides.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get construction tips, product updates, and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
              <MessageCircle className="h-5 w-5" />
              Follow on WhatsApp
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Get instant updates and tips via WhatsApp
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;