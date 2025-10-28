import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Product, getProductById } from "@/data/products";

interface ProductCardProps extends Omit<Product, 'description' | 'benefits' | 'ingredients' | 'usage'> {}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  category,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const fullProduct = getProductById(id);
    if (fullProduct) {
      addToCart(fullProduct, 1);
    }
  };
  return (
    <Card className="group hover:shadow-hover transition-smooth overflow-hidden">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          {badge && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-primary transition-smooth">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="hover:bg-primary hover:text-primary-foreground"
            onClick={handleAddToCart}
            data-testid={`button-add-cart-${id}`}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
