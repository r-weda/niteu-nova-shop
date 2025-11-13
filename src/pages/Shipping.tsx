import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

const Shipping = () => {
  const { cartItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-muted-foreground mb-12">Everything you need to know about delivery</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground mb-2">KSh 200 - 500 (based on location)</p>
                <p className="text-sm text-muted-foreground">Delivery in 2-5 business days</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
                <p className="text-muted-foreground mb-2">KSh 800 - 1,200</p>
                <p className="text-sm text-muted-foreground">Next-day delivery in major cities</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Package className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                  <p className="text-muted-foreground">
                    Enjoy free standard shipping on all orders over <strong>KSh 5,000</strong> anywhere in Kenya!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Delivery Locations</h3>
                  <p className="text-muted-foreground mb-4">We deliver to all major cities and towns in Kenya:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Nairobi & Surrounding Areas</li>
                    <li>Mombasa</li>
                    <li>Kisumu</li>
                    <li>Nakuru</li>
                    <li>Eldoret</li>
                    <li>And more locations across Kenya</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

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

export default Shipping;
