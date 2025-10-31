import { Music, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a romantic piano music from a free source
  const musicUrl = "https://cdn.pixabay.com/audio/2022/03/10/audio_2c8d86f20f.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
      </audio>
      
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-2 border-rose/20 shadow-card hover:shadow-lg hover:scale-110 transition-all duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Music className="w-6 h-6 text-rose animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </Button>
    </>
  );
};

export default MusicToggle;
