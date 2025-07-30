import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-accent text-accent-foreground p-2 rounded-lg mr-3">
                <div className="w-6 h-6 bg-accent-foreground rounded-sm"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold">Phastor</h2>
                <p className="text-sm opacity-90">Concrete Products Ltd</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Your trusted partner for quality concrete products in Ghana. 
              Building the future with excellence and reliability.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Our Products</Link></li>
              <li><Link to="/projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Projects</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/news" className="text-sm opacity-80 hover:opacity-100 transition-opacity">News & Tips</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Hollow Blocks</li>
              <li className="text-sm opacity-80">Solid Blocks</li>
              <li className="text-sm opacity-80">U-Drains</li>
              <li className="text-sm opacity-80">Culverts</li>
              <li className="text-sm opacity-80">Paving Stones</li>
              <li className="text-sm opacity-80">Custom Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm opacity-80">123 Industrial Area</p>
                  <p className="text-sm opacity-80">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <p className="text-sm opacity-80">+233 XX XXX XXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <p className="text-sm opacity-80">info@phastor.com</p>
              </div>
              <Button className="w-full gap-2 bg-success hover:bg-success/90 mt-4">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2024 Phastor Concrete Products Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;