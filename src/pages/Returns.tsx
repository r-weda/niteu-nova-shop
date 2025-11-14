import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const Returns = () => {
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
          <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
          <p className="text-muted-foreground mb-12">Our hassle-free return policy</p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order,
                you can return it within 30 days of delivery for a full refund or exchange.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unused items in original packaging</li>
                  <li>• Products with all tags attached</li>
                  <li>• Items with proof of purchase</li>
                  <li>• Defective or damaged items</li>
                  <li>• Wrong items shipped</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold">Non-Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Used or worn items</li>
                  <li>• Items without original packaging</li>
                  <li>• Personalized products</li>
                  <li>• Hygiene products (opened)</li>
                  <li>• Sale items (final sale)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">How to Return an Item</h2>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Contact our customer service team via email or phone</li>
                <li>Provide your order number and reason for return</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship the item to the address provided by our team</li>
                <li>Receive your refund within 7-10 business days after we receive the item</li>
              </ol>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;
