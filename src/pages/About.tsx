import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Users, Award, Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const About = () => {
  const { cartItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">About Niteu</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Your trusted e-commerce destination in Kenya
          </p>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Niteu was founded with a simple mission: to provide Kenyans with access to high-quality products
                across multiple categories, all in one convenient online marketplace. We believe shopping should be
                easy, reliable, and enjoyable.
              </p>
              <p className="text-muted-foreground">
                From electronics to fashion, home goods to beauty products, we carefully curate our inventory to
                ensure each item meets our standards of quality and value. We're committed to excellent customer
                service and fast, reliable delivery across Kenya.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <ShoppingBag className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p className="text-muted-foreground">
                  Thousands of products across 8+ categories, all genuine and carefully selected
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Dedicated support team ready to help with any questions or concerns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  100% genuine products from authorized distributors and manufacturers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
                <p className="text-muted-foreground">
                  Fast delivery across Kenya with dedicated local support
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
