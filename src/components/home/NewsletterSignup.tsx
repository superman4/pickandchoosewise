
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been signed up for seasonal updates.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-leaf-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-3">Stay Updated with Seasonal Picks</h2>
          <p className="text-leaf-100 mb-8 text-lg">
            Get monthly guides on what's freshest right now, along with expert selection tips and seasonal recipes.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 placeholder:text-white/70 text-white"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-white text-leaf-700 hover:bg-leaf-50 hover:text-leaf-800"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-leaf-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
