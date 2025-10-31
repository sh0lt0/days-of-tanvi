import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Heart className="text-rose animate-float" size={32} fill="currentColor" />
          <Heart className="text-rose/70 animate-float" size={40} fill="currentColor" style={{ animationDelay: "0.5s" }} />
          <Heart className="text-rose animate-float" size={32} fill="currentColor" style={{ animationDelay: "1s" }} />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-4">
          16 Days of Tanvi
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-rose to-secondary mx-auto rounded-full" />
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
          A Story for Every Day of November 💖
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto pt-4">
          Celebrating the moments that made this month magical
        </p>
      </div>
    </section>
  );
};

export default Hero;
