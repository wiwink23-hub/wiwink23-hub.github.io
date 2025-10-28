import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pill, Dumbbell, Sparkles, Apple, Baby, Home, Heart, Leaf, TestTube } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Supplements",
      icon: Pill,
      path: "/categories/supplements",
      description: "Vitamins, minerals, and nutritional supplements",
      color: "bg-blue-100 text-blue-600",
      count: 1250,
    },
    {
      name: "Sports Nutrition",
      icon: Dumbbell,
      path: "/categories/sports",
      description: "Protein, pre-workout, and fitness supplements",
      color: "bg-orange-100 text-orange-600",
      count: 820,
    },
    {
      name: "Beauty & Personal Care",
      icon: Sparkles,
      path: "/categories/beauty",
      description: "Skincare, haircare, and cosmetics",
      color: "bg-pink-100 text-pink-600",
      count: 960,
    },
    {
      name: "Grocery",
      icon: Apple,
      path: "/categories/grocery",
      description: "Healthy foods, snacks, and beverages",
      color: "bg-green-100 text-green-600",
      count: 540,
    },
    {
      name: "Baby & Kids",
      icon: Baby,
      path: "/categories/baby",
      description: "Baby care, nutrition, and wellness",
      color: "bg-purple-100 text-purple-600",
      count: 380,
    },
    {
      name: "Home & Garden",
      icon: Home,
      path: "/categories/home",
      description: "Home essentials and eco-friendly products",
      color: "bg-indigo-100 text-indigo-600",
      count: 420,
    },
    {
      name: "Heart Health",
      icon: Heart,
      path: "/categories/heart-health",
      description: "Cardiovascular support supplements",
      color: "bg-red-100 text-red-600",
      count: 180,
    },
    {
      name: "Herbal Supplements",
      icon: Leaf,
      path: "/categories/herbal",
      description: "Natural herbs and botanicals",
      color: "bg-emerald-100 text-emerald-600",
      count: 290,
    },
    {
      name: "Testing & Health",
      icon: TestTube,
      path: "/categories/testing",
      description: "Health tests and monitoring devices",
      color: "bg-cyan-100 text-cyan-600",
      count: 95,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
          <p className="text-xl text-muted-foreground">
            Explore our comprehensive range of health and wellness categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group"
            >
              <div className="h-full p-8 rounded-xl border bg-card hover:shadow-hover transition-smooth">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {category.count} products →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
