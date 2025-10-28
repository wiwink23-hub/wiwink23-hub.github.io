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
  description: string;
  benefits: string[];
  ingredients: string;
  usage: string;
}

export const allProducts: Product[] = [
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
    description: "Our Vitamin D3 5000 IU supplement provides a high-potency dose of the 'sunshine vitamin' to support your overall health and wellbeing. Vitamin D3 is essential for maintaining strong bones and teeth, supporting immune system function, and promoting healthy mood and mental clarity. Each softgel contains 5000 IU of vitamin D3 (cholecalciferol), the most bioavailable form of vitamin D.",
    benefits: [
      "Supports bone health and calcium absorption",
      "Boosts immune system function",
      "Promotes mood and mental wellbeing",
      "Non-GMO and gluten-free"
    ],
    ingredients: "Vitamin D3 (as Cholecalciferol) 5000 IU (1250% DV). Other Ingredients: Organic Extra Virgin Olive Oil, Softgel Capsule (Bovine Gelatin, Glycerin, Purified Water)",
    usage: "Take one (1) softgel daily, preferably with a meal containing healthy fats. Consult your healthcare provider before use if pregnant or nursing."
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
    description: "Premium omega-3 fish oil supplement containing 1000mg of pure fish oil rich in EPA and DHA. Supports cardiovascular health, brain function, and joint mobility. Sourced from wild-caught fish and molecularly distilled for purity.",
    benefits: [
      "Supports heart and cardiovascular health",
      "Promotes brain function and mental clarity",
      "Reduces inflammation and joint discomfort",
      "Molecularly distilled for purity"
    ],
    ingredients: "Fish Oil Concentrate 1000mg (providing EPA 180mg, DHA 120mg). Other Ingredients: Gelatin, Glycerin, Purified Water, Natural Lemon Flavor",
    usage: "Take two (2) softgels daily with meals. Store in a cool, dry place away from direct sunlight."
  },
  {
    id: "3",
    name: "Organic Whey Protein Powder - Chocolate Flavor",
    price: 34.99,
    rating: 4,
    reviews: 892,
    image: wheyProtein,
    category: "sports",
    description: "Premium organic whey protein powder with rich chocolate flavor. Contains 25g of protein per serving to support muscle growth and recovery. Made from grass-fed cows with no artificial sweeteners or flavors.",
    benefits: [
      "25g high-quality protein per serving",
      "Supports muscle growth and recovery",
      "Organic and grass-fed sourced",
      "No artificial sweeteners or flavors"
    ],
    ingredients: "Organic Whey Protein Concentrate, Organic Cocoa Powder, Organic Stevia Leaf Extract, Natural Chocolate Flavor, Sunflower Lecithin",
    usage: "Mix one (1) scoop with 8-10oz of water, milk, or your favorite beverage. Best consumed within 30 minutes after workout or as a meal replacement."
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
    description: "Advanced probiotic formula with 50 billion CFU and 10 probiotic strains to support digestive health and immune function. Shelf-stable and designed for maximum effectiveness.",
    benefits: [
      "50 billion CFU with 10 probiotic strains",
      "Supports digestive health and regularity",
      "Boosts immune system function",
      "Shelf-stable, no refrigeration required"
    ],
    ingredients: "Probiotic Blend 50 Billion CFU (Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus plantarum, and 7 other strains). Other Ingredients: Vegetable Capsule, Rice Flour, Magnesium Stearate",
    usage: "Take one (1) capsule daily on an empty stomach or as directed by your healthcare professional. Best taken in the morning."
  },
  {
    id: "5",
    name: "Collagen Peptides Powder - For Skin, Hair & Nails",
    price: 32.99,
    rating: 5,
    reviews: 3421,
    image: collagen,
    badge: "TRENDING",
    category: "beauty",
    description: "Premium collagen peptides powder to support healthy skin, hair, and nails. Contains Types I & III collagen for maximum benefits. Unflavored and easily dissolves in any beverage.",
    benefits: [
      "Supports skin elasticity and hydration",
      "Promotes healthy hair and nail growth",
      "Supports joint and bone health",
      "Grass-fed and pasture-raised sourced"
    ],
    ingredients: "Hydrolyzed Bovine Collagen Peptides (Types I & III). No other ingredients.",
    usage: "Mix one (1) to two (2) scoops in your favorite beverage, smoothie, or recipe. Can be used daily for best results."
  },
  {
    id: "6",
    name: "Multivitamin for Women - Complete Daily Nutrition",
    price: 19.99,
    rating: 5,
    reviews: 2156,
    image: multivitamin,
    category: "beauty",
    description: "Comprehensive multivitamin specially formulated for women's health needs. Contains essential vitamins, minerals, and antioxidants to support energy, immunity, and overall wellness.",
    benefits: [
      "Complete daily nutrition for women",
      "Supports energy and metabolism",
      "Promotes immune health and vitality",
      "Includes biotin for hair, skin & nails"
    ],
    ingredients: "Vitamin A, C, D, E, K, B-Complex, Calcium, Iron, Magnesium, Zinc, Biotin, and more. Other Ingredients: Vegetable Cellulose Capsule, Rice Flour, Magnesium Stearate",
    usage: "Take two (2) tablets daily with food. Best taken with breakfast or lunch for optimal absorption."
  },
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
    description: "Potent turmeric curcumin supplement with BioPerine for enhanced absorption. Supports joint health, reduces inflammation, and provides powerful antioxidant benefits.",
    benefits: [
      "Powerful anti-inflammatory support",
      "Supports joint health and mobility",
      "Enhanced absorption with BioPerine",
      "Rich in antioxidants"
    ],
    ingredients: "Turmeric Root Extract (95% Curcuminoids) 1500mg, BioPerine Black Pepper Extract 10mg. Other Ingredients: Vegetable Capsule, Rice Flour",
    usage: "Take two (2) capsules daily with meals. For best results, use consistently for at least 8 weeks."
  },
  {
    id: "8",
    name: "Magnesium Glycinate 400mg - Sleep & Relaxation Support",
    price: 17.99,
    rating: 5,
    reviews: 967,
    image: magnesium,
    category: "home",
    description: "High-absorption magnesium glycinate to support restful sleep, relaxation, and muscle recovery. Gentle on the stomach and highly bioavailable form of magnesium.",
    benefits: [
      "Promotes restful sleep and relaxation",
      "Supports muscle and nerve function",
      "Gentle on stomach, highly absorbable",
      "Helps reduce stress and tension"
    ],
    ingredients: "Magnesium (as Magnesium Glycinate) 400mg (95% DV). Other Ingredients: Vegetable Capsule, Rice Flour, Magnesium Stearate",
    usage: "Take two (2) capsules 30-60 minutes before bedtime with water. May also be taken during the day for muscle support."
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
    description: "High-potency Vitamin C supplement providing 1000mg per serving. Supports immune health, collagen production, and acts as a powerful antioxidant. Enhanced with rose hips for additional benefits.",
    benefits: [
      "Boosts immune system function",
      "Supports collagen production",
      "Powerful antioxidant protection",
      "Enhanced with rose hips"
    ],
    ingredients: "Vitamin C (as Ascorbic Acid) 1000mg (1111% DV), Rose Hips Extract 25mg. Other Ingredients: Vegetable Capsule, Rice Flour",
    usage: "Take one (1) to two (2) tablets daily with meals. Increase to three tablets during times of immune challenge."
  },
  {
    id: "10",
    name: "B-Complex Vitamins - Energy & Metabolism Support",
    price: 18.99,
    rating: 5,
    reviews: 1876,
    image: bComplex,
    category: "supplements",
    description: "Complete B-complex vitamin formula with all 8 essential B vitamins. Supports energy production, metabolism, and nervous system health. Perfect for active lifestyles.",
    benefits: [
      "Supports energy and reduces fatigue",
      "Promotes healthy metabolism",
      "Supports nervous system function",
      "Helps convert food into energy"
    ],
    ingredients: "Thiamine (B1) 100mg, Riboflavin (B2) 100mg, Niacin (B3) 100mg, Vitamin B6 100mg, Folate 400mcg, Vitamin B12 100mcg, Biotin 300mcg, Pantothenic Acid 100mg. Other Ingredients: Vegetable Capsule, Rice Flour",
    usage: "Take one (1) capsule daily with breakfast or lunch. Best absorbed when taken with food."
  },
  {
    id: "11",
    name: "Zinc 50mg - Immune Health & Skin Support",
    price: 11.99,
    rating: 4,
    reviews: 1523,
    image: zinc,
    category: "supplements",
    description: "Essential zinc supplement providing 50mg per serving. Supports immune function, skin health, and wound healing. Chelated form for superior absorption.",
    benefits: [
      "Supports immune system health",
      "Promotes healthy skin and wound healing",
      "Supports reproductive health",
      "Chelated for better absorption"
    ],
    ingredients: "Zinc (as Zinc Gluconate) 50mg (455% DV). Other Ingredients: Vegetable Capsule, Rice Flour, Magnesium Stearate",
    usage: "Take one (1) tablet daily with food. Do not exceed recommended dose. Best taken with a meal to reduce stomach upset."
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
    description: "Premium CoQ10 supplement providing 200mg of ubiquinone. Supports heart health, cellular energy production, and acts as a powerful antioxidant.",
    benefits: [
      "Supports cardiovascular health",
      "Promotes cellular energy production",
      "Powerful antioxidant properties",
      "Supports healthy aging"
    ],
    ingredients: "Coenzyme Q10 (Ubiquinone) 200mg. Other Ingredients: Rice Bran Oil, Gelatin, Glycerin, Purified Water, Soy Lecithin",
    usage: "Take one (1) softgel daily with a meal containing fat for optimal absorption."
  },
  {
    id: "13",
    name: "Iron 65mg - Blood Health & Energy Support",
    price: 13.99,
    rating: 4,
    reviews: 1245,
    image: iron,
    category: "supplements",
    description: "Essential iron supplement with 65mg of elemental iron. Supports healthy red blood cell production, energy levels, and reduces fatigue. Gentle formula with vitamin C for enhanced absorption.",
    benefits: [
      "Supports healthy blood production",
      "Reduces fatigue and boosts energy",
      "Enhanced with Vitamin C for absorption",
      "Gentle on stomach"
    ],
    ingredients: "Iron (as Ferrous Sulfate) 65mg (361% DV), Vitamin C 60mg. Other Ingredients: Vegetable Capsule, Rice Flour, Stearic Acid",
    usage: "Take one (1) tablet daily with food or as directed by healthcare provider. Best taken on empty stomach if tolerated."
  },
  {
    id: "14",
    name: "Calcium 600mg with Vitamin D - Bone Strength",
    price: 16.99,
    rating: 5,
    reviews: 2134,
    image: calcium,
    category: "supplements",
    description: "Essential calcium supplement with vitamin D for maximum bone health support. Provides 600mg of calcium plus vitamin D3 for optimal absorption and bone density.",
    benefits: [
      "Supports strong bones and teeth",
      "Enhanced with Vitamin D for absorption",
      "Helps prevent bone loss",
      "Supports muscle function"
    ],
    ingredients: "Calcium (as Calcium Carbonate) 600mg (46% DV), Vitamin D3 400 IU. Other Ingredients: Vegetable Cellulose, Stearic Acid, Magnesium Stearate",
    usage: "Take two (2) tablets daily with meals, or as directed by your healthcare professional. Divide doses for better absorption."
  },
  {
    id: "15",
    name: "Ashwagandha 1300mg - Stress Relief & Relaxation",
    price: 22.99,
    rating: 5,
    reviews: 1765,
    image: ashwagandha,
    category: "beauty",
    description: "Premium ashwagandha root extract standardized to 5% withanolides. Adaptogenic herb that helps reduce stress, support mood, and promote relaxation. Clinically studied dosage.",
    benefits: [
      "Reduces stress and anxiety",
      "Supports healthy cortisol levels",
      "Promotes restful sleep",
      "Enhances mental clarity and focus"
    ],
    ingredients: "Ashwagandha Root Extract (Withania somnifera) 1300mg (standardized to 5% Withanolides). Other Ingredients: Vegetable Capsule, Rice Flour",
    usage: "Take two (2) capsules daily. Can be taken morning or evening. Best results seen with consistent use over 8-12 weeks."
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
    description: "High-potency biotin supplement with 10,000mcg per serving. Supports healthy hair growth, strong nails, and glowing skin. Essential B-vitamin for beauty from within.",
    benefits: [
      "Promotes healthy hair growth",
      "Strengthens nails and reduces breakage",
      "Supports glowing, healthy skin",
      "Supports energy metabolism"
    ],
    ingredients: "Biotin (as D-Biotin) 10,000mcg (33,333% DV). Other Ingredients: Vegetable Capsule, Rice Flour, Magnesium Stearate",
    usage: "Take one (1) capsule daily with water, preferably with a meal. Results typically visible in 3-6 months."
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
    description: "Premium BCAA formula with optimal 2:1:1 ratio of leucine, isoleucine, and valine. Supports muscle recovery, reduces soreness, and promotes lean muscle growth. Perfect for pre, intra, or post-workout.",
    benefits: [
      "Supports muscle recovery and growth",
      "Reduces exercise-induced muscle soreness",
      "Prevents muscle breakdown during training",
      "Optimal 2:1:1 ratio for effectiveness"
    ],
    ingredients: "L-Leucine 2500mg, L-Isoleucine 1250mg, L-Valine 1250mg. Other Ingredients: Natural Flavors, Citric Acid, Stevia Leaf Extract",
    usage: "Mix one (1) scoop with 8-10oz of water. Consume before, during, or after workout. Can be taken up to 3 times daily."
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
    description: "Advanced pre-workout formula with caffeine, beta-alanine, and citrulline for explosive energy and performance. Enhances focus, endurance, and muscle pumps.",
    benefits: [
      "Explosive energy and focus",
      "Enhanced endurance and stamina",
      "Increased muscle pumps",
      "Delays muscle fatigue"
    ],
    ingredients: "Caffeine Anhydrous 200mg, Beta-Alanine 3.2g, L-Citrulline 6g, Creatine Monohydrate 3g, B-Vitamins. Other Ingredients: Natural Flavors, Citric Acid, Sucralose",
    usage: "Mix one (1) scoop with 8-10oz of cold water 20-30 minutes before workout. Do not exceed one serving per day. Do not use within 4 hours of bedtime."
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
    description: "Pure creatine monohydrate powder providing 5g per serving. Most researched sports supplement for increasing strength, power, and muscle mass. Micronized for better mixing and absorption.",
    benefits: [
      "Increases strength and power output",
      "Supports lean muscle growth",
      "Enhances high-intensity performance",
      "Micronized for easy mixing"
    ],
    ingredients: "Creatine Monohydrate 5g (100% Pure, Micronized). No other ingredients.",
    usage: "Mix one (1) scoop with 8-12oz of water or juice. Loading phase: 20g daily for 5-7 days. Maintenance: 5g daily. Best taken post-workout."
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
    description: "Natural melatonin supplement with 10mg per tablet. Helps regulate sleep-wake cycle, reduces time to fall asleep, and promotes restful sleep. Non-habit forming formula.",
    benefits: [
      "Promotes faster sleep onset",
      "Supports healthy sleep cycle",
      "Reduces jet lag effects",
      "Non-habit forming"
    ],
    ingredients: "Melatonin 10mg. Other Ingredients: Microcrystalline Cellulose, Stearic Acid, Silica, Vegetable Magnesium Stearate",
    usage: "Take one (1) tablet 30-60 minutes before bedtime. Start with lower dose if new to melatonin. For occasional use only."
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
