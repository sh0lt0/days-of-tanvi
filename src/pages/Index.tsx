import DayCard from "@/components/DayCard";
import FloatingHearts from "@/components/FloatingHearts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MusicToggle from "@/components/MusicToggle";
import { memories } from "@/data/memories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        <Hero />
        
        <main className="container mx-auto px-4 py-20 space-y-32 max-w-6xl">
          {memories.map((memory, index) => (
            <DayCard key={memory.day} memory={memory} index={index} />
          ))}
        </main>
        
        <Footer />
      </div>
      
      <MusicToggle />
    </div>
  );
};

export default Index;
