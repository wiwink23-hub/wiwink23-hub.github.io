import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Shield, Truck, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your health and satisfaction are our top priorities. We're here to support your wellness journey.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products are carefully selected and tested to meet the highest quality standards.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your wellness products to you when you need them.",
    },
    {
      icon: Award,
      title: "Trusted Brands",
      description: "We partner with renowned brands known for their commitment to health and quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About HealthMart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in health and wellness, providing premium supplements and natural products for over 10 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2014, HealthMart began with a simple mission: to make high-quality health and wellness products accessible to everyone. We understand that navigating the world of supplements and health products can be overwhelming, which is why we've dedicated ourselves to becoming your trusted source for premium wellness solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of health enthusiasts and nutrition experts carefully curates every product we offer, ensuring that you receive only the best. We work directly with manufacturers and brands that share our commitment to quality, sustainability, and transparency.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to serve thousands of customers worldwide, helping them achieve their health goals with products they can trust.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Years in Business" },
            { number: "5000+", label: "Products" },
            { number: "50K+", label: "Happy Customers" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
