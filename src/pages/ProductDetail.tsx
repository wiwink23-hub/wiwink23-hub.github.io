import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Share2, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { getProductById, allProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : allProducts[0];
  const relatedProducts = allProducts.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="rounded-xl overflow-hidden bg-muted mb-4">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-smooth">
                  <img
                    src={product?.image}
                    alt={`${product?.name} view ${i}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              {product?.badge && (
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded mb-2">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl font-bold mb-2">
                {product?.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < (product?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product?.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-primary">${product?.price.toFixed(2)}</span>
                {product?.originalPrice && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-semibold text-green-600">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-muted-foreground">
                {product?.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {product?.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1" 
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12" data-testid="button-favorite">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12" data-testid="button-share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-between py-2 border-b">
                <span className="text-muted-foreground">SKU:</span>
                <span className="font-medium">VIT-D3-5000</span>
              </p>
              <p className="flex items-center justify-between py-2 border-b">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">Vitamins</span>
              </p>
              <p className="flex items-center justify-between py-2 border-b">
                <span className="text-muted-foreground">In Stock:</span>
                <span className="font-medium text-primary">Available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (2,840)</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product?.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="font-semibold mb-3">Supplement Facts</h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {product?.ingredients}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product?.usage}
                </p>
                <p className="mt-4 font-semibold">Important Notes:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Consult your healthcare provider before use if you are pregnant, nursing, or taking medications</li>
                  <li>Keep out of reach of children</li>
                  <li>Store in a cool, dry place</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <p className="text-muted-foreground">Customer reviews section would go here.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
