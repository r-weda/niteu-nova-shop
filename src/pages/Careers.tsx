import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const Careers = () => {
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
          <h1 className="text-4xl font-bold mb-4">Careers at Niteu</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join our growing team and help shape the future of e-commerce in Kenya
          </p>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <Briefcase className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground mb-4">
                At Niteu, we're building more than just an e-commerce platform. We're creating a community of
                passionate individuals dedicated to making online shopping better for everyone in Kenya.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Competitive salaries and benefits</li>
                <li>Flexible work arrangements</li>
                <li>Professional development opportunities</li>
                <li>Collaborative team environment</li>
                <li>Impact-driven work culture</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team. Check back soon for available positions,
                or send us your resume to be considered for future opportunities.
              </p>
              <Link to="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
