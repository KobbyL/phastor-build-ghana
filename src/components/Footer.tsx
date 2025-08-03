import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem, hoverScale, buttonVariants } from "@/lib/motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div 
            key="company-info"
            className="space-y-4"
            variants={staggerItem}
          >
            <motion.div 
              key="logo"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-accent text-accent-foreground p-2 rounded-lg mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-6 h-6 bg-accent-foreground rounded-sm"></div>
              </motion.div>
              <div>
                <h2 className="text-lg font-bold">Phastor</h2>
                <p className="text-sm opacity-90">Concrete Products Ltd</p>
              </div>
            </motion.div>
            <p className="text-sm opacity-80 max-w-xs">
              Your trusted partner for quality concrete products in Ghana. 
              Building the future with excellence and reliability.
            </p>
            <motion.div 
              key="social-links"
              className="flex space-x-3"
              variants={staggerContainer}
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, index) => (
                <motion.div
                  key={social.icon.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                    <social.icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div key="quick-links" variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <motion.ul 
              className="space-y-2"
              variants={staggerContainer}
            >
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Projects", href: "/projects" },
                { name: "Contact Us", href: "/contact" },
                { name: "News & Tips", href: "/news" }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Products */}
          <motion.div key="products" variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <motion.ul 
              className="space-y-2"
              variants={staggerContainer}
            >
              {[
                "Hollow Blocks", "Solid Blocks", "U-Drains", 
                "Culverts", "Paving Stones", "Custom Products"
              ].map((product, index) => (
                <motion.li 
                  key={product}
                  className="text-sm opacity-80"
                  variants={staggerItem}
                  whileHover={{ x: 5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {product}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <motion.div 
              className="space-y-3"
              variants={staggerContainer}
            >
              <motion.div 
                key="address"
                className="flex items-start gap-3"
                variants={staggerItem}
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm opacity-80">123 Industrial Area</p>
                  <p className="text-sm opacity-80">Accra, Ghana</p>
                </div>
              </motion.div>
              <motion.div 
                key="phone"
                className="flex items-center gap-3"
                variants={staggerItem}
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4 text-accent" />
                <p className="text-sm opacity-80">0552560460</p>
              </motion.div>
              <motion.div 
                key="email"
                className="flex items-center gap-3"
                variants={staggerItem}
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 text-accent" />
                <p className="text-sm opacity-80">info@phastor.com</p>
              </motion.div>
              <motion.div
                key="whatsapp"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="initial"
              >
                <Button className="w-full gap-2 bg-success hover:bg-success/90 mt-4">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
          variants={fadeInUp}
        >
          <p className="text-sm opacity-60">
            © 2024 Phastor Concrete Products Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;