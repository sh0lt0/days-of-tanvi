import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    left: Math.random() * 100,
    tx: (Math.random() - 0.5) * 200,
    size: 20 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-rose/20 animate-heart-float"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            // @ts-ignore - CSS custom property
            "--tx": `${heart.tx}px`,
            "--duration": `${heart.duration}s`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
