import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
          <Heart className="w-5 h-5 text-rose animate-pulse" fill="currentColor" />
          <p className="text-lg">
            Made with love by <span className="font-playfair font-semibold text-rose">Your Name</span>
          </p>
          <Heart className="w-5 h-5 text-rose animate-pulse" fill="currentColor" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <p className="text-sm text-muted-foreground/60">
          Every moment with you is a treasure 💖
        </p>
      </div>
    </footer>
  );
};

export default Footer;
