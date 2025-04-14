
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Page Not Found | PickPerfect.org</title>
        <meta name="description" content="The requested page could not be found." />
      </Helmet>
      <div className="text-center max-w-md px-4">
        <div className="text-leaf-600 text-7xl mb-4">🥕</div>
        <h1 className="heading-1 mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/seasonal">Browse Seasonal Produce</Link>
          </Button>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-4">Looking for something specific?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="link">
              <Link to="/fruits">Fruits</Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/vegetables">Vegetables</Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/blog">Blog</Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/guides">Guides</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
