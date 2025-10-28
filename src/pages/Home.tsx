import { Link } from "react-router-dom";
import { ArrowRight, Pill, Dumbbell, Sparkles, Apple, Baby, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedProducts, getTrendingProducts } from "@/data/products";

const Home = () => {
  const categories = [
    { name: "Supplements", icon: Pill, path: "/categories/supplements", color: "bg-blue-100 text-blue-600" },
    { name: "Sports", icon: Dumbbell, path: "/categories/sports", color: "bg-orange-100 text-orange-600" },
    { name: "Beauty", icon: Sparkles, path: "/categories/beauty", color: "bg-pink-100 text-pink-600" },
    { name: "Grocery", icon: Apple, path: "/categories/grocery", color: "bg-green-100 text-green-600" },
    { name: "Baby", icon: Baby, path: "/categories/baby", color: "bg-purple-100 text-purple-600" },
    { name: "Home", icon: HomeIcon, path: "/categories/home", color: "bg-indigo-100 text-indigo-600" },
  ];

  const featuredProducts = getFeaturedProducts();
  const trendingProducts = getTrendingProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your Health,
              <br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover premium vitamins, supplements, and wellness products from trusted brands worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group"
            >
              <div className="flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-hover transition-smooth">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-bounce`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <span className="font-medium text-center">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="link" asChild>
              <Link to="/shop">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <Button variant="link" asChild>
            <Link to="/shop">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Wellness Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get exclusive deals, health tips, and early access to new products.
          </p>
          <Button variant="hero" size="lg">
            Sign Up Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
