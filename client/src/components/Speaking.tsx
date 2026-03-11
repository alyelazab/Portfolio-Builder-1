import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { speakingTalks } from "@/lib/data";
import masareefLaunch from "@/assets/masareef-launch.mp4";

const localVideos: Record<string, string> = {
  "masareef-launch": masareefLaunch,
};

export default function Speaking() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const talk = speakingTalks[currentIndex];
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < speakingTalks.length - 1;

  const goTo = (index: number) => {
    setPlayingIndex(null);
    setCurrentIndex(index);
  };

  const handleLocalVideoClick = useCallback(() => {
    if (playingIndex === currentIndex) {
      // Already playing, pause
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setPlayingIndex(null);
    } else {
      setPlayingIndex(currentIndex);
      // Use rAF to ensure the video element with controls is mounted
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      });
    }
  }, [currentIndex, playingIndex]);

  return (
    <section id="speaking" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Speaking 🎤</h2>

          {/* Main video card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {talk.localVideo ? (
                  <div
                    className="group relative bg-background rounded-[24px] overflow-hidden border border-border/50 shadow-sm cursor-pointer aspect-video"
                    onClick={playingIndex !== currentIndex ? handleLocalVideoClick : undefined}
                  >
                    {playingIndex === currentIndex ? (
                      <video
                        ref={videoRef}
                        src={localVideos[talk.localVideo]}
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <video
                          src={localVideos[talk.localVideo]}
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-aly-violet ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {talk.year}
                    </div>
                    {playingIndex !== currentIndex && (
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
                        <div className="text-xl font-bold">{talk.title}</div>
                        <div className="text-sm opacity-80">{talk.event}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-background rounded-[24px] overflow-hidden border border-border/50 shadow-sm cursor-pointer aspect-video block"
                  >
                    <img
                      src={talk.thumbnail}
                      alt={talk.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-aly-violet ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {talk.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <div className="text-xl font-bold">{talk.title}</div>
                      <div className="text-sm opacity-80">{talk.event}</div>
                    </div>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {speakingTalks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentIndex
                      ? "bg-aly-violet w-8"
                      : "bg-border hover:bg-secondary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => canGoPrev && goTo(currentIndex - 1)}
                disabled={!canGoPrev}
                className="w-10 h-10 rounded-full border border-border/50 bg-background flex items-center justify-center hover:border-aly-violet/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => canGoNext && goTo(currentIndex + 1)}
                disabled={!canGoNext}
                className="w-10 h-10 rounded-full border border-border/50 bg-background flex items-center justify-center hover:border-aly-violet/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Counter */}
          <div className="text-sm text-secondary-foreground/50 mt-3">
            {currentIndex + 1} of {speakingTalks.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
