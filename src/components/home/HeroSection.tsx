
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-100/80 to-accent/50" />
        <div className="absolute top-0 right-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format')] bg-cover bg-right opacity-[0.15]" />
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="heading-1 mb-6">
            Learn to{" "}
            <span className="text-leaf-600">Pick Perfect</span>{" "}
            Every Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Your comprehensive guide to selecting the freshest, ripest, and highest quality produce. 
            Say goodbye to disappointing fruits and vegetables.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-leaf-600 hover:bg-leaf-700">
              <Link to="/guides">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/seasonal">
                What's In Season
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mt-12">
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Trusted By
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="flex flex-wrap items-center gap-8 mt-6">
            {["Farm Fresh Co", "Greengrocer", "Nature's Best", "Harvest Daily"].map((partner) => (
              <div key={partner} className="text-muted-foreground font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
