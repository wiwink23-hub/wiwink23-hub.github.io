import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, allProducts } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams();
  const products = category ? getProductsByCategory(category) : allProducts;

  const categoryName = category
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="gradient-hero py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">
            Discover our selection of premium {categoryName?.toLowerCase()} products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="mb-6">
          <p className="text-muted-foreground">Showing {products.length} products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
