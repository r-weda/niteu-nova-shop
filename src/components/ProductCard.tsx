import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-smooth"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="gradient-primary text-primary-foreground font-semibold px-3 py-1">
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="destructive" className="font-semibold">
            -{discount}%
          </Badge>
        </div>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Quick Actions Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-2 transition-smooth"
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
            <Heart className="w-4 h-4" />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          <Button
            size="sm"
            className="gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
            onClick={() => onAddToCart(product)}
          >
            Add
          </Button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <Badge variant="destructive" className="mt-2 w-full justify-center">
            Out of Stock
          </Badge>
        )}
      </div>
    </motion.div>
  );
};
