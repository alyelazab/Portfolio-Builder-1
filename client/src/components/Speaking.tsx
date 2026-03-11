import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { speakingTalks } from "@/lib/data";
import masareefLaunch from "@/assets/masareef-launch.mp4";

const localVideos: Record<string, string> = {
  "masareef-launch": masareefLaunch,
};

export default function Speaking() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoModalRef = useRef<HTMLVideoElement>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > *")?.offsetWidth ?? 300;
    el.scrollBy({ left: direction === "right" ? cardWidth + 16 : -(cardWidth + 16), behavior: "smooth" });
  };

  const handlePlay = (talk: (typeof speakingTalks)[number]) => {
    if (talk.localVideo) {
      setPlayingVideo(localVideos[talk.localVideo]);
    } else if (talk.url) {
      window.open(talk.url, "_blank", "noopener,noreferrer");
    }
  };

  // Start playback once modal video is mounted
  useEffect(() => {
    if (playingVideo && videoModalRef.current) {
      videoModalRef.current.play();
    }
  }, [playingVideo]);

  return (
    <section id="speaking" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Speaking 🎤</h2>

          <div className="relative group/carousel">
            {/* Left arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute -left-4 top-[calc(50%-40px)] -translate-y-1/2 z-10 w-10 h-10 bg-aly-violet text-white rounded-full flex items-center justify-center shadow-lg hover:bg-aly-violet/85 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Scrollable row */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {speakingTalks.map((talk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] cursor-pointer group"
                  onClick={() => handlePlay(talk)}
                >
                  <div className="bg-background border border-border/50 rounded-[20px] p-3 shadow-sm hover:shadow-md hover:border-aly-violet/20 transition-all">
                    {/* Thumbnail */}
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                      {talk.localVideo ? (
                        <video
                          src={localVideos[talk.localVideo]}
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={talk.thumbnail}
                          alt={talk.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      {/* Hover overlay with play icon */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Info below thumbnail */}
                    <div className="mt-3 px-1 pb-1 h-[60px] space-y-1">
                      <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-aly-violet transition-colors">
                        {talk.title}
                      </h3>
                      <p className="text-xs text-secondary-foreground/60">{talk.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute -right-4 top-[calc(50%-40px)] -translate-y-1/2 z-10 w-10 h-10 bg-aly-violet text-white rounded-full flex items-center justify-center shadow-lg hover:bg-aly-violet/85 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Video modal for local videos */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoModalRef}
              src={playingVideo}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            />
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
