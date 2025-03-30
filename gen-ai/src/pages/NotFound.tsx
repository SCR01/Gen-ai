
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 p-8">
        <AlertTriangle className="h-20 w-20 text-destructive mx-auto" />
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for can't be found.</p>
        <div className="space-x-4">
          <Button asChild variant="default">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/query-builder">Go to Query Builder</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
