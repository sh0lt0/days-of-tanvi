import { DayMemory } from "@/data/memories";
import { useEffect, useRef, useState } from "react";

interface DayCardProps {
  memory: DayMemory;
  index: number;
}

const DayCard = ({ memory, index }: DayCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 items-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      style={{ animationDelay: "0.2s" }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-3xl shadow-card group">
          <img
            src={memory.imageUrl}
            alt={`Memory from ${memory.date}`}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="inline-block">
          <span className="text-sm font-medium text-rose bg-rose/10 px-4 py-2 rounded-full">
            Day {memory.day}
          </span>
        </div>
        
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
          {memory.date}
        </h2>
        
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-rose rounded-full" />
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {memory.story}
        </p>
      </div>
    </div>
  );
};

export default DayCard;
