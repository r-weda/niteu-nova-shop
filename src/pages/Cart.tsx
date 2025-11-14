import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "@/lib/utils/format";
import { useToast } from "@/hooks/use-toast";
import { useDarkMode } from "@/hooks/use-dark-mode";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Promo codes (in real app, this would be validated server-side)
  const promoCodes = {
    "WELCOME10": 0.10,
    "SAVE20": 0.20,
    "FREESHIP": 0.05,
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code as keyof typeof promoCodes]) {
      setAppliedPromo({
        code,
        discount: promoCodes[code as keyof typeof promoCodes],
      });
      toast({
        title: "Promo code applied!",
        description: `You saved ${(promoCodes[code as keyof typeof promoCodes] * 100).toFixed(0)}% on your order.`,
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please check your code and try again.",
        variant: "destructive",
      });
    }
  };

  const subtotal = cartTotal;
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal >= 5000 ? 0 : 500;
  const tax = (subtotal - discount) * 0.16; // 16% VAT in Kenya
  const total = subtotal - discount + shipping + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure checkout...",
    });
    
    // In real app, this would navigate to checkout page
    setTimeout(() => {
      navigate("/checkout");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartItemCount={cart.length}
        onSearchChange={() => {}}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-smooth">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <ShoppingBag className="w-10 h-10 text-primary" />
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some products to get started!</p>
            <Button onClick={() => navigate("/products")} size="lg">
              Start Shopping
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="hover:shadow-lg transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <Link to={`/product/${item.id}`} className="shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition-smooth"
                            />
                          </Link>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <Link to={`/product/${item.id}`} className="hover:text-primary transition-smooth">
                                  <h3 className="font-semibold text-lg">{item.name}</h3>
                                </Link>
                                <p className="text-sm text-muted-foreground">{item.category}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-5 h-5" />
                              </Button>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-8 w-8"
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-semibold w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-8 w-8"
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                              
                              <div className="text-right">
                                <p className="font-bold text-xl text-primary">
                                  {formatPrice(item.price * item.quantity)}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {formatPrice(item.price)} each
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>

              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full text-destructive hover:bg-destructive/10"
              >
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({cart.length} items)</span>
                    <span className="font-semibold">{formatPrice(subtotal)}</span>
                  </div>

                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Discount ({appliedPromo.code})
                      </span>
                      <span className="font-semibold">-{formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <Badge variant="secondary">Free</Badge>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  {subtotal < 5000 && (
                    <p className="text-xs text-muted-foreground">
                      Add {formatPrice(5000 - subtotal)} more for free shipping!
                    </p>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (16% VAT)</span>
                    <span className="font-semibold">{formatPrice(tax)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && applyPromoCode()}
                      />
                      <Button onClick={applyPromoCode} variant="outline">
                        Apply
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Try: WELCOME10, SAVE20, FREESHIP
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleCheckout}
                    size="lg"
                    className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
                  >
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
