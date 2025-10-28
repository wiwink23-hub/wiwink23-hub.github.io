import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Supplements", path: "/categories/supplements" },
    { name: "Sports", path: "/categories/sports" },
    { name: "Beauty", path: "/categories/beauty" },
    { name: "Grocery", path: "/categories/grocery" },
    { name: "Home", path: "/categories/home" },
    { name: "Baby", path: "/categories/baby" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b shadow-sm">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <p>Free Shipping on Orders Over $40 | 20% Off First Purchase</p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">H</span>
            </div>
            <span className="text-2xl font-bold text-foreground">HealthMart</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories - Desktop */}
        <div className="hidden md:flex items-center gap-6 pb-4 border-t pt-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              {category.name}
            </Link>
          ))}
          <Link
            to="/categories"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
          >
            All Categories
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-2">
            <Input
              type="search"
              placeholder="Search for products..."
              className="mb-4"
            />
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/categories"
              className="block py-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              All Categories
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
