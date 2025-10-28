import vitaminD3 from "@/assets/products/vitamin-d3.jpg";
import omega3 from "@/assets/products/omega-3.jpg";
import wheyProtein from "@/assets/products/whey-protein.jpg";
import probiotic from "@/assets/products/probiotic.jpg";
import collagen from "@/assets/products/collagen.jpg";
import multivitamin from "@/assets/products/multivitamin.jpg";
import turmeric from "@/assets/products/turmeric.jpg";
import magnesium from "@/assets/products/magnesium.jpg";
import vitaminC from "@/assets/products/vitamin-c.jpg";
import bComplex from "@/assets/products/b-complex.jpg";
import zinc from "@/assets/products/zinc.jpg";
import coq10 from "@/assets/products/coq10.jpg";
import iron from "@/assets/products/iron.jpg";
import calcium from "@/assets/products/calcium.jpg";
import ashwagandha from "@/assets/products/ashwagandha.jpg";
import biotin from "@/assets/products/biotin.jpg";
import bcaa from "@/assets/products/bcaa.jpg";
import preworkout from "@/assets/products/preworkout.jpg";
import creatine from "@/assets/products/creatine.jpg";
import melatonin from "@/assets/products/melatonin.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
}

export const allProducts: Product[] = [
  // Supplements Category
  {
    id: "1",
    name: "Vitamin D3 5000 IU - Supports Bone Health & Immune System",
    price: 12.99,
    originalPrice: 19.99,
    rating: 5,
    reviews: 2840,
    image: vitaminD3,
    badge: "20% OFF",
    category: "supplements",
  },
  {
    id: "9",
    name: "Vitamin C 1000mg - Immune System Booster",
    price: 15.99,
    originalPrice: 22.99,
    rating: 5,
    reviews: 3214,
    image: vitaminC,
    badge: "30% OFF",
    category: "supplements",
  },
  {
    id: "10",
    name: "B-Complex Vitamins - Energy & Metabolism Support",
    price: 18.99,
    rating: 5,
    reviews: 1876,
    image: bComplex,
    category: "supplements",
  },
  {
    id: "11",
    name: "Zinc 50mg - Immune Health & Skin Support",
    price: 11.99,
    rating: 4,
    reviews: 1523,
    image: zinc,
    category: "supplements",
  },
  {
    id: "12",
    name: "CoQ10 200mg - Heart Health & Energy Production",
    price: 28.99,
    originalPrice: 39.99,
    rating: 5,
    reviews: 987,
    image: coq10,
    badge: "25% OFF",
    category: "supplements",
  },
  {
    id: "13",
    name: "Iron 65mg - Blood Health & Energy Support",
    price: 13.99,
    rating: 4,
    reviews: 1245,
    image: iron,
    category: "supplements",
  },
  {
    id: "14",
    name: "Calcium 600mg with Vitamin D - Bone Strength",
    price: 16.99,
    rating: 5,
    reviews: 2134,
    image: calcium,
    category: "supplements",
  },

  // Sports Nutrition Category
  {
    id: "3",
    name: "Organic Whey Protein Powder - Chocolate Flavor",
    price: 34.99,
    rating: 4,
    reviews: 892,
    image: wheyProtein,
    category: "sports",
  },
  {
    id: "17",
    name: "BCAA Amino Acids 2:1:1 - Muscle Recovery",
    price: 26.99,
    originalPrice: 34.99,
    rating: 5,
    reviews: 1654,
    image: bcaa,
    badge: "BEST SELLER",
    category: "sports",
  },
  {
    id: "18",
    name: "Pre-Workout Energy Formula - Maximum Performance",
    price: 29.99,
    rating: 5,
    reviews: 2345,
    image: preworkout,
    badge: "TRENDING",
    category: "sports",
  },
  {
    id: "19",
    name: "Creatine Monohydrate 5g - Strength & Power",
    price: 19.99,
    originalPrice: 27.99,
    rating: 5,
    reviews: 3421,
    image: creatine,
    badge: "30% OFF",
    category: "sports",
  },
  {
    id: "2",
    name: "Omega-3 Fish Oil 1000mg - Heart & Brain Support",
    price: 24.99,
    originalPrice: 34.99,
    rating: 5,
    reviews: 1523,
    image: omega3,
    badge: "BEST SELLER",
    category: "sports",
  },

  // Beauty Category
  {
    id: "5",
    name: "Collagen Peptides Powder - For Skin, Hair & Nails",
    price: 32.99,
    rating: 5,
    reviews: 3421,
    image: collagen,
    badge: "TRENDING",
    category: "beauty",
  },
  {
    id: "16",
    name: "Biotin 10,000mcg - Hair, Skin & Nails Formula",
    price: 14.99,
    originalPrice: 21.99,
    rating: 5,
    reviews: 2876,
    image: biotin,
    badge: "32% OFF",
    category: "beauty",
  },
  {
    id: "6",
    name: "Multivitamin for Women - Complete Daily Nutrition",
    price: 19.99,
    rating: 5,
    reviews: 2156,
    image: multivitamin,
    category: "beauty",
  },
  {
    id: "15",
    name: "Ashwagandha 1300mg - Stress Relief & Relaxation",
    price: 22.99,
    rating: 5,
    reviews: 1765,
    image: ashwagandha,
    category: "beauty",
  },

  // Grocery Category
  {
    id: "7",
    name: "Turmeric Curcumin with BioPerine - Anti-Inflammatory",
    price: 21.99,
    originalPrice: 29.99,
    rating: 4,
    reviews: 1834,
    image: turmeric,
    badge: "25% OFF",
    category: "grocery",
  },
  {
    id: "4",
    name: "Probiotic 50 Billion CFU - Digestive Health Support",
    price: 29.99,
    originalPrice: 44.99,
    rating: 5,
    reviews: 1687,
    image: probiotic,
    badge: "33% OFF",
    category: "grocery",
  },

  // Home Category
  {
    id: "8",
    name: "Magnesium Glycinate 400mg - Sleep & Relaxation Support",
    price: 17.99,
    rating: 5,
    reviews: 967,
    image: magnesium,
    category: "home",
  },
  {
    id: "20",
    name: "Melatonin 10mg - Natural Sleep Aid",
    price: 12.99,
    originalPrice: 18.99,
    rating: 5,
    reviews: 2543,
    image: melatonin,
    badge: "NEW",
    category: "home",
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.slice(0, 8);
};

export const getTrendingProducts = (): Product[] => {
  return allProducts.filter((p) => p.badge === "TRENDING" || p.reviews > 2000).slice(0, 8);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((product) => product.id === id);
};
