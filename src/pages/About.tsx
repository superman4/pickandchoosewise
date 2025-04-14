
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">About PickPerfect</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to help consumers make better choices, reduce food waste, 
              and enjoy the best quality produce possible.
            </p>
            
            <h2 className="heading-3 mt-10 mb-4">Our Mission</h2>
            <p>
              PickPerfect.org was created with a simple goal: to empower shoppers with the knowledge 
              to select the freshest, tastiest, and highest-quality produce available. We believe 
              that with the right information, everyone can learn to pick perfect every time.
            </p>
            <p>
              Food waste is a critical global issue, with nearly one-third of all food produced 
              going to waste. Much of this waste happens at the consumer level, often because people 
              don't know how to select produce that will be at peak ripeness when they need it.
            </p>
            
            <h2 className="heading-3 mt-10 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Comprehensive Selection Guides:</strong> Easy-to-follow, visual guidelines 
                for picking the best fruits, vegetables, and pantry items.
              </li>
              <li>
                <strong>Seasonal Information:</strong> Learn what's at peak freshness right now, 
                so you can shop seasonally for better taste, lower cost, and reduced environmental impact.
              </li>
              <li>
                <strong>Storage Tips:</strong> Make your perfect produce last longer with proper storage techniques.
              </li>
              <li>
                <strong>Educational Resources:</strong> Articles, guides, and tools to help you become 
                a more confident, knowledgeable shopper.
              </li>
            </ul>
            
            <h2 className="heading-3 mt-10 mb-4">Our Team</h2>
            <p>
              PickPerfect.org brings together experts in food science, culinary arts, agriculture, 
              and education to create the most accurate, helpful information possible. Our content 
              is continuously reviewed and updated to ensure it remains current and valuable.
            </p>
            
            <div className="bg-muted p-6 rounded-lg mt-10">
              <h3 className="heading-4 mb-4">Get Involved</h3>
              <p className="mb-4">
                Have a question about selecting produce? Want to suggest a new feature or share your own tips?
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <h2 className="heading-3 mt-10 mb-4">Our Partners</h2>
            <p>
              We're proud to work with local farms, grocers, and food organizations who share our 
              passion for quality produce and sustainable food systems. These partnerships help 
              us provide the most accurate, up-to-date information to our community.
            </p>
            <div className="flex flex-wrap gap-y-6 gap-x-12 mt-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <p className="font-medium">Farm Fresh Co</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🥕</span>
                </div>
                <p className="font-medium">Greengrocer</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🌾</span>
                </div>
                <p className="font-medium">Nature's Best</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🍎</span>
                </div>
                <p className="font-medium">Harvest Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
