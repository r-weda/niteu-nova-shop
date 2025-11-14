import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "@/lib/utils/format";
import { useCart } from "@/hooks/use-cart";
import { useDarkMode } from "@/hooks/use-dark-mode";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");
  
  const { addToCart, cartItemCount } = useCart();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam ? categories.find(c => c.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categoryParam) || "All" : "All"
  );
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (filterParam === "best-sellers") {
      filtered = filtered.filter((p) => p.badge === "Best Seller");
    } else if (filterParam === "new-arrivals") {
      filtered = filtered.filter((p) => p.badge === "New");
    } else if (filterParam === "sale") {
      filtered = filtered.filter((p) => p.badge === "Sale" || p.originalPrice);
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, searchQuery, filterParam]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          {filterParam === "best-sellers" && "Best Sellers"}
          {filterParam === "new-arrivals" && "New Arrivals"}
          {filterParam === "sale" && "Sale Items"}
          {!filterParam && selectedCategory === "All" && "All Products"}
          {!filterParam && selectedCategory !== "All" && selectedCategory}
        </h1>

        <section className="py-8 border-b border-border bg-card/50 rounded-lg px-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? "Hide" : "Show"} Filters
            </Button>
          </div>

          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-muted-foreground">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedCategory === "All" ? "default" : "outline"}
                      className="cursor-pointer transition-smooth hover:scale-105"
                      onClick={() => setSelectedCategory("All")}
                    >
                      All
                    </Badge>
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer transition-smooth hover:scale-105"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-sm text-muted-foreground">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </h3>
                  <Slider
                    min={0}
                    max={200000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full max-w-md"
                  />
                </div>

                {(selectedCategory !== "All" || searchQuery) && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    {selectedCategory !== "All" && (
                      <Badge variant="secondary" className="gap-1">
                        {selectedCategory}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => setSelectedCategory("All")}
                        />
                      </Badge>
                    )}
                    {searchQuery && (
                      <Badge variant="secondary" className="gap-1">
                        Search: {searchQuery}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => setSearchQuery("")}
                        />
                      </Badge>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange([0, 200000]);
                  setSearchQuery("");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
