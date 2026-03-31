import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const FRAME_COUNT = 40;
const ANIMATION_END_PROGRESS = 0.58;

const frameSources = Array.from({ length: FRAME_COUNT }, (_, index) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return new URL(
    `../assets/burger-motion/ezgif-frame-${frameNumber}-removebg-preview.webp`,
    import.meta.url,
  ).href;
});

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeInOutCubic = (value: number) =>
  value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;

const mapProgressToFrame = (progress: number) => {
  const safeProgress = clamp(progress, 0, 1);
  return easeInOutCubic(safeProgress) * (FRAME_COUNT - 1);
};

const storyBlocks = [
  {
    eyebrow: "Dip & Dash",
    title: "Crafted to",
    accent: "Perfection",
    body: "A signature stack engineered like a hero shot, where every ingredient lands with precision, glow, and appetite-first drama.",
    range: [0, 0.24] as const,
  },
  {
    eyebrow: "01",
    title: "Fresh Ingredients.",
    accent: "Bold Layers.",
    body: "Golden buns, molten cheese, crisp greens, and flame-finished textures separate into focus so the craft behind the craving feels unmistakable.",
    range: [0.24, 0.48] as const,
  },
  {
    eyebrow: "02",
    title: "Every Layer",
    accent: "Tells a Story",
    body: "At full explosion, the burger becomes an edible composition, revealing balance, texture, heat, and the bold architecture behind every bite.",
    range: [0.5, 0.74] as const,
  },
  {
    eyebrow: "Dip & Dash",
    title: "Taste Beyond",
    accent: "Imagination",
    body: "The layers return as one indulgent masterpiece, finished with depth, warmth, and the unmistakable energy of Dip & Dash.",
    range: [0.78, 1] as const,
  },
];

type StoryBlockProps = {
  accent: string;
  body: string;
  eyebrow: string;
  progress: number;
  range: readonly [number, number];
  title: string;
};

function StoryBlock({
  accent,
  body,
  eyebrow,
  progress,
  range,
  title,
}: StoryBlockProps) {
  const [start, end] = range;
  const mid = (start + end) / 2;
  const half = (end - start) / 2 || 0.001;
  const normalized = clamp(1 - Math.abs(progress - mid) / half, 0, 1);
  const eased = easeInOutCubic(normalized);
  const translateY = 32 * (1 - eased);

  return (
    <div className="absolute inset-0 z-20 hidden md:block">
      <div
        className="flex h-full flex-col justify-center text-left"
        style={{
          opacity: eased,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.46em] text-[#ff8c00]">
          {eyebrow}
        </p>
        <h2
          className="max-w-[12ch] text-4xl leading-[0.92] text-white md:text-5xl xl:text-6xl"
          style={{ fontFamily: "'Abril Fatface', serif" }}
        >
          <span className="block text-white">{title}</span>
          <span className="block bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15] bg-clip-text text-transparent">
            {accent}
          </span>
        </h2>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15]/50" />
        <p className="mt-6 max-w-[31rem] text-base font-medium leading-8 text-white/82 md:text-lg">
          {body}
        </p>
      </div>
    </div>
  );
}

const DipDashCard = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const storyProgressRef = useRef(0);
  const maxForwardProgressRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [storyProgress, setStoryProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const mobileStoryOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [0.88, 1, 1, 0.88],
  );

  const mobileStoryY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const activeMobileStory = useMemo(() => {
    if (storyProgress < 0.3) return storyBlocks[0];
    if (storyProgress < 0.55) return storyBlocks[1];
    if (storyProgress < 0.82) return storyBlocks[2];
    return storyBlocks[3];
  }, [storyProgress]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaChange = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    handleMediaChange(mediaQuery);

    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }

    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let readyCount = 0;

    const loaders = frameSources.map((source) => {
      const image = new Image();
      image.decoding = "async";
      image.src = source;

      return new Promise<HTMLImageElement>((resolve, reject) => {
        image.onload = () => {
          readyCount += 1;
          if (!cancelled) {
            setLoadProgress(readyCount / FRAME_COUNT);
          }
          resolve(image);
        };
        image.onerror = () =>
          reject(new Error(`Failed to load burger frame: ${source}`));
      });
    });

    Promise.all(loaders)
      .then((images) => {
        if (cancelled) {
          return;
        }

        loadedImagesRef.current = images;
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    storyProgressRef.current = latest;
    setStoryProgress(latest);
    const sensitivity = isMobile ? 0.92 : 1;
    const normalizedForwardProgress = clamp(
      latest / ANIMATION_END_PROGRESS,
      0,
      1,
    );

    if (latest <= 0.01) {
      maxForwardProgressRef.current = 0;
    } else {
      maxForwardProgressRef.current = Math.max(
        maxForwardProgressRef.current,
        normalizedForwardProgress,
      );
    }

    targetFrameRef.current = mapProgressToFrame(
      clamp(maxForwardProgressRef.current * sensitivity, 0, 1),
    );
  });

  useEffect(() => {
    if (!isLoaded) {
      return undefined;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return undefined;
    }

    const renderFrame = () => {
      const images = loadedImagesRef.current;
      const image = images[Math.round(currentFrameRef.current)];

      if (!image) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      if (
        canvas.width !== Math.round(viewportWidth * dpr) ||
        canvas.height !== Math.round(viewportHeight * dpr)
      ) {
        canvas.width = Math.round(viewportWidth * dpr);
        canvas.height = Math.round(viewportHeight * dpr);
        canvas.style.width = `${viewportWidth}px`;
        canvas.style.height = `${viewportHeight}px`;
      }

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.scale(dpr, dpr);

      const liveProgress = storyProgressRef.current;

      const containScale = Math.min(
        (viewportWidth * (isMobile ? 0.84 : 0.72)) / image.width,
        (viewportHeight * (isMobile ? 0.5 : 0.8)) / image.height,
      );

      const cinematicZoom =
        0.98 + Math.sin(liveProgress * Math.PI) * (isMobile ? 0.05 : 0.11);
      const drawWidth = image.width * containScale * cinematicZoom;
      const drawHeight = image.height * containScale * cinematicZoom;
      const x = isMobile ? (viewportWidth - drawWidth) / 2 : viewportWidth * 0.5;
      const y = viewportHeight * (isMobile ? 0.28 : 0.14);

      const assemblyStrength =
        1 - Math.min(Math.abs(currentFrameRef.current - (FRAME_COUNT - 1)) / (FRAME_COUNT - 1), 1);
      const finalGlow = clamp((liveProgress - 0.78) / 0.22, 0, 1);

      const shadowY = y + drawHeight - (isMobile ? 8 : 12);
      const shadowWidth = drawWidth * (0.56 + finalGlow * 0.08);
      const shadowHeight = drawHeight * (0.08 + finalGlow * 0.015);

      const burgerCenterX = x + drawWidth / 2;

      const shadowGradient = context.createRadialGradient(
        burgerCenterX,
        shadowY,
        shadowHeight * 0.2,
        burgerCenterX,
        shadowY,
        shadowWidth * 0.55,
      );

      shadowGradient.addColorStop(0, `rgba(0, 0, 0, ${0.26 + finalGlow * 0.12})`);
      shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = shadowGradient;
      context.beginPath();
      context.ellipse(
        burgerCenterX,
        shadowY,
        shadowWidth / 2,
        shadowHeight / 2,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.save();
      context.shadowColor = `rgba(245, 158, 11, ${0.12 + finalGlow * 0.18})`;
      context.shadowBlur = isMobile ? 28 : 42;
      context.drawImage(image, x, y, drawWidth, drawHeight);
      context.restore();

      if (assemblyStrength > 0.4) {
        const steamOpacity = 0.035 + finalGlow * 0.05;
        const steamGradient = context.createLinearGradient(
          burgerCenterX,
          y - drawHeight * 0.18,
          burgerCenterX,
          y + drawHeight * 0.1,
        );

        steamGradient.addColorStop(0, `rgba(255, 255, 255, ${steamOpacity})`);
        steamGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.fillStyle = steamGradient;
        context.beginPath();
        context.ellipse(
          burgerCenterX,
          y - drawHeight * 0.04,
          drawWidth * 0.18,
          drawHeight * 0.14,
          0,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    };

    const tick = () => {
      const delta = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(delta) < 0.015) {
        currentFrameRef.current = targetFrameRef.current;
      } else {
        currentFrameRef.current += delta * 0.065;
      }

      renderFrame();
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    currentFrameRef.current = targetFrameRef.current;
    renderFrame();
    animationFrameRef.current = window.requestAnimationFrame(tick);

    const handleResize = () => renderFrame();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, isMobile]);

  return (
    <section
      id="dipdash"
      ref={sectionRef}
      className="relative h-[350vh] overflow-clip bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#1a0d05] text-white"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Base dark premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0f05] to-[#050505]" />
        
        {/* Animated moving gradient background with dark premium base + fiery orange/red energy + cheese yellow highlights */}
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          animate={{
            background: [
              "radial-gradient(circle at 15% 25%, rgba(255, 90, 31, 0.45) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(250, 204, 21, 0.35) 0%, transparent 50%)",
              "radial-gradient(circle at 35% 55%, rgba(255, 140, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(250, 204, 21, 0.38) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 35%, rgba(255, 107, 53, 0.42) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(245, 158, 11, 0.36) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 15%, rgba(255, 140, 0, 0.38) 0%, transparent 50%), radial-gradient(circle at 80% 65%, rgba(250, 204, 21, 0.34) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 40%, rgba(255, 90, 31, 0.41) 0%, transparent 50%), radial-gradient(circle at 75% 80%, rgba(250, 204, 21, 0.37) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary moving gradient layer for richer colors */}
        <motion.div
          className="absolute inset-0 mix-blend-overlay"
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.25) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(255, 90, 31, 0.2) 0%, transparent 45%)",
              "radial-gradient(circle at 60% 70%, rgba(250, 204, 21, 0.22) 0%, transparent 45%), radial-gradient(circle at 30% 30%, rgba(255, 140, 0, 0.25) 0%, transparent 45%)",
              "radial-gradient(circle at 40% 20%, rgba(255, 107, 53, 0.23) 0%, transparent 45%), radial-gradient(circle at 90% 50%, rgba(250, 204, 21, 0.2) 0%, transparent 45%)",
              "radial-gradient(circle at 70% 80%, rgba(255, 140, 0, 0.24) 0%, transparent 45%), radial-gradient(circle at 15% 60%, rgba(250, 204, 21, 0.21) 0%, transparent 45%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.25) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(255, 90, 31, 0.2) 0%, transparent 45%)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-y-0 left-0 z-0 w-full bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.78)_36%,rgba(5,5,5,0.2)_58%,rgba(5,5,5,0)_78%)]" />
        
        {/* Animated premium glow orbs - fiery energy with movement */}
        <motion.div
          className="absolute left-[4%] top-1/2 z-10 hidden h-[30rem] w-[38rem] -translate-y-1/2 rounded-full blur-3xl md:block"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255, 140, 0, 0.25) 0%, rgba(255, 90, 31, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(255, 90, 31, 0.28) 0%, rgba(255, 140, 0, 0.18) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(250, 204, 21, 0.22) 0%, rgba(255, 140, 0, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(255, 140, 0, 0.25) 0%, rgba(255, 90, 31, 0.15) 50%, transparent 100%)",
            ],
            x: [0, 30, -15, 0],
            y: [0, -35, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Right side accent glow */}
        <motion.div
          className="absolute right-[5%] top-[35%] z-5 hidden h-[25rem] w-[32rem] rounded-full blur-3xl md:block"
          animate={{
            background: [
              "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(250, 204, 21, 0.1) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(255, 140, 0, 0.12) 0%, rgba(250, 204, 21, 0.08) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 100%)",
            ],
            x: [0, -25, 10, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute left-1/2 top-10 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#f59e0b]/25 bg-white/5 px-4 py-2 backdrop-blur-xl md:left-8 md:translate-x-0">
          <span className="h-2 w-2 rounded-full bg-[#ff8c00] shadow-[0_0_16px_rgba(255,140,0,0.95)]" />
          <span className="text-[11px] uppercase tracking-[0.42em] text-white/70 md:text-xs">
            Dip & Dash
          </span>
        </div>

        <canvas
          ref={canvasRef}
          className={`relative z-10 h-screen w-full transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-[#050505]/88 backdrop-blur-xl">
            <div className="h-14 w-14 rounded-full border border-white/10 border-t-[#ff8c00] animate-spin" />
            <div className="space-y-2 text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-[#f59e0b]/80">
                Rendering Flavor
              </p>
              <p className="text-sm text-white/60">
                Loading cinematic sequence {Math.round(loadProgress * 100)}%
              </p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute left-[6%] top-1/2 hidden h-[66%] w-[min(42vw,34rem)] -translate-y-1/2 px-2 md:block">
            {storyBlocks.map((block) => (
              <StoryBlock key={block.title} progress={storyProgress} {...block} />
            ))}
          </div>

          <div className="absolute bottom-12 left-4 right-4 md:hidden">
            <motion.div
              className="flex flex-col text-left"
              style={{
                opacity: mobileStoryOpacity,
                y: mobileStoryY,
              }}
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-[#ff8c00]">
                {activeMobileStory.eyebrow}
              </p>
              <h2
                className="max-w-[12ch] text-3xl leading-[0.94] text-white"
                style={{ fontFamily: "'Abril Fatface', serif" }}
              >
                <span className="block text-white">{activeMobileStory.title}</span>
                <span className="block bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15] bg-clip-text text-transparent">
                  {activeMobileStory.accent}
                </span>
              </h2>
              <div className="mt-4 h-px w-20 bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15]/50" />
              <p className="mt-4 text-base font-medium leading-7 text-white/82">
                {activeMobileStory.body}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>
    </section>
  );
};

export default DipDashCard;
