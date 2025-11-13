import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Niteu's website and services, you agree to be bound by these Terms of
                  Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Use the service in any way that violates any applicable law or regulation</li>
                  <li>Engage in any fraudulent activity</li>
                  <li>Impersonate or attempt to impersonate Niteu or another user</li>
                  <li>Interfere with or disrupt the service or servers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Orders and Payments</h2>
                <p className="text-muted-foreground mb-4">
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel
                  any order for any reason. Prices are subject to change without notice.
                </p>
                <p className="text-muted-foreground">
                  Payment must be made in full before shipment. We accept M-Pesa, credit/debit cards, and cash
                  on delivery (where available).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
                <p className="text-muted-foreground">
                  We strive to deliver products within the estimated timeframe. However, delivery times are
                  estimates and not guarantees. Niteu is not responsible for delays caused by shipping carriers
                  or circumstances beyond our control.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Niteu shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your use of our service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at robertweda993@gmail.com or
                  call +254 742 756 074.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
