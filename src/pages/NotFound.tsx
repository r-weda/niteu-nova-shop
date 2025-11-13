import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center px-4 max-w-lg">
        <h1 className="mb-4 text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/">
            <Button size="lg" className="w-full sm:w-auto">
              Go to Homepage
            </Button>
          </a>
          <a href="/products">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Browse Products
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
