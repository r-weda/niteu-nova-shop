import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const FAQ = () => {
  const { cartItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const { darkMode, toggleDarkMode } = useDarkMode();

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, all major credit/debit cards, and Cash on Delivery for orders within Kenya."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping within Kenya takes 2-5 business days. Express shipping is available for next-day delivery in major cities like Nairobi, Mombasa, and Kisumu."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over KSh 5,000 within Kenya."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Visit our Returns page for more details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track orders from your account dashboard."
    },
    {
      question: "Are products genuine?",
      answer: "Yes, all our products are 100% genuine and sourced directly from authorized distributors and manufacturers."
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">Find answers to common questions about shopping with Niteu</p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
