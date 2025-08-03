import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle,
  Building,
  Truck
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office (Weija)",
      details: ["TEL: 0552560460"],
      phone: "0552560460",
      action: "Call Now",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Pokuase",
      details: ["TEL: 0552560461"],
      phone: "0552560461",
      action: "Call Now",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adjiriganor",
      details: ["TEL: 0552560462"],
      phone: "0552560462",
      action: "Call Now",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Cape Coast",
      details: ["TEL: 0552560463"],
      phone: "0552560463",
      action: "Call Now",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Takoradi",
      details: ["TEL: 0552560464"],
      phone: "0552560464",
      action: "Call Now",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
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
                Contact Us
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Let's Build Your Project Together
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto opacity-90"
              variants={fadeInUp}
            >
              Ready to start your construction project? Get in touch with our team 
              for expert advice, competitive quotes, and reliable concrete solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Contact */}
      <motion.section 
        className="py-12 bg-accent text-accent-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-2xl font-bold mb-2">Need a Quick Quote?</h2>
              <p className="opacity-90">WhatsApp us your requirements and get an instant estimate!</p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="gap-2 bg-success hover:bg-success/90 text-white">
                <MessageCircle className="h-5 w-5" />
                WhatsApp +233 XX XXX XXXX
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
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
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Choose the most convenient way to reach us. We're here to help!
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <motion.div 
                      className="text-accent mx-auto mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {info.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={`${info.title}-detail-${i}`} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                    <a href={`tel:${info.phone}`} style={{ textDecoration: 'none' }}>
                      <Button variant="outline" size="sm" className="w-full">
                        {info.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form & Info */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeInLeft}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem}>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem}>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+233 XX XXX XXXX"
                          required
                        />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="e.g., Residential, Commercial, Infrastructure"
                      />
                    </motion.div>

                    <motion.div variants={staggerItem}>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, quantities needed, delivery location, etc."
                        rows={5}
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={staggerItem}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                    </motion.form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Working Hours & Additional Info */}
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Working Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                      <p className="text-sm text-accent font-medium">
                        Emergency concrete supply available 24/7 for urgent projects
                      </p>
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
                  <CardHeader>
                    <CardTitle>Why Choose Phastor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm">Free delivery within Accra</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm">24-48 hour production time</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm">Quality guaranteed products</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm">Competitive bulk pricing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm">Expert technical support</span>
                      </div>
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
                  <CardHeader>
                    <CardTitle>Our Locations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">Head Office (Weija): +233552560475</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">Pokuase: +233552560465</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">Adjiriganor: +233552560464</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">Cape Coast: +233552560467</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">Takoradi: +233552560468</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">More locations coming soon</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>

      {/* Map Section */}
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
              Visit Our Facility
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              See our modern production facility and quality control processes in action.
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden rounded-lg shadow-lg"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2345!2d-0.2345!3d5.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPhastor%20Limited%2C%20Weija!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phastor Limited Location"
              className="w-full h-96 md:h-[400px]"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="font-semibold text-sm">Phastor Limited</p>
              <p className="text-xs text-muted-foreground">Weija, Accra</p>
              <motion.a
                href="https://maps.app.goo.gl/2H3YXdaczmguEy4m6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-2"
              >
                <Button size="sm" className="gap-2 text-xs">
                  <MapPin className="h-3 w-3" />
                  Get Directions
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;