// hooks/useScrollFadeIn.ts
import { useRef, useEffect, useState } from "react";

export const useScrollFadeIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  duration = 1.2,
  delay = 0
) => {
  const [triggered, setTriggered] = useState(false);
  const dom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (dom.current) observer.observe(dom.current);
    return () => observer.disconnect();
  }, []);

  const translate = {
    up: "translateY(60px)",
    down: "translateY(-60px)",
    left: "translateX(-60px)",   // ← 이동 거리 ↑
    right: "translateX(60px)",
  };

  return {
    ref: dom,
    style: {
      opacity: triggered ? 1 : 0,
      transform: triggered ? "none" : translate[direction],
      transition: `all ${duration}s ease-out ${delay}s`,
    },
  };
};
