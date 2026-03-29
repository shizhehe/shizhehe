"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import usePretext from "@/hooks/usePretext";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { layoutNextLine, type LayoutCursor } from "@chenglou/pretext";

const LINE_HEIGHT_FACTOR = 1.35;
const PADDING_X = 48;
const PADDING_Y_TOP = 0.2; // fraction of canvas height
const TYPING_SPEED = 55; // ms per character
const TYPING_START_DELAY = 400; // ms before typing begins

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

interface HeroCanvasProps {
  text: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function HeroCanvas({ text, containerRef }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastDrawnScrollRef = useRef(-1);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Typing animation state
  const typingCharsRef = useRef(0);
  const typingCompleteRef = useRef(false);
  const typingStartTimeRef = useRef<number | null>(null);

  const fontSizeRef = useRef(72);
  const fontString = `${fontSizeRef.current}px "Fira Code"`;
  const { prepared, isReady } = usePretext(text, fontString);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollProgressRef.current = v;
  });

  const draw = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !prepared || !isReady) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      if (w === 0 || h === 0) return;

      // Typing progress
      if (prefersReducedMotion) {
        typingCharsRef.current = text.length;
        typingCompleteRef.current = true;
      } else {
        if (typingStartTimeRef.current === null) {
          typingStartTimeRef.current = timestamp;
        }
        const elapsed = timestamp - typingStartTimeRef.current - TYPING_START_DELAY;
        if (elapsed > 0) {
          typingCharsRef.current = Math.min(
            text.length,
            Math.floor(elapsed / TYPING_SPEED)
          );
        }
        if (typingCharsRef.current >= text.length) {
          typingCompleteRef.current = true;
        }
      }

      const visibleChars = typingCharsRef.current;
      const typingDone = typingCompleteRef.current;
      const scrollT = prefersReducedMotion ? 0 : scrollProgressRef.current;

      // Font size: large, responsive
      const isMobile = w < 500;
      const fontSize = isMobile
        ? Math.max(24, Math.min(40, w * 0.075))
        : Math.max(36, Math.min(72, w * 0.052));
      fontSizeRef.current = fontSize;
      const lineHeight = fontSize * LINE_HEIGHT_FACTOR;

      // Scroll-driven width compression (only after typing finishes)
      const maxWidthFull = w - PADDING_X * 3;
      const maxWidthCompressed = maxWidthFull * 0.35;
      const effectiveScrollT = typingDone ? scrollT : 0;
      const maxWidth = lerp(
        maxWidthFull,
        maxWidthCompressed,
        effectiveScrollT * 2.5
      );

      const blockX = PADDING_X;
      const blockY = h * lerp(PADDING_Y_TOP, 0.08, effectiveScrollT);

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Layout full text via pretext
      const lines: { text: string; x: number; y: number; width: number }[] =
        [];
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let lineY = 0;

      for (let i = 0; i < 20; i++) {
        const line = layoutNextLine(prepared, cursor, maxWidth);
        if (!line) break;

        lines.push({
          text: line.text,
          x: blockX,
          y: blockY + lineY,
          width: line.width,
        });

        cursor = line.end;
        lineY += lineHeight;
      }

      // Draw lines with typing cutoff + "excavators" accent
      ctx.textBaseline = "top";
      ctx.font = `${fontSize}px "Fira Code"`;

      let charsDrawn = 0;

      for (const line of lines) {
        const lineLen = line.text.length;

        // How many chars of this line are visible?
        const remaining = visibleChars - charsDrawn;
        if (remaining <= 0) break;
        const showChars = Math.min(lineLen, remaining);
        const visibleText = line.text.slice(0, showChars);
        charsDrawn += lineLen;

        // Check for "excavators" highlight within visible portion
        const excavatorIdx = visibleText.toLowerCase().indexOf("excavators");

        if (excavatorIdx === -1) {
          ctx.fillStyle = "#e8e8e8";
          ctx.fillText(visibleText, line.x, line.y);
        } else {
          const before = visibleText.slice(0, excavatorIdx);
          const word = visibleText.slice(
            excavatorIdx,
            Math.min(excavatorIdx + 10, showChars)
          );
          const after = visibleText.slice(excavatorIdx + word.length);

          let xPos = line.x;

          if (before) {
            ctx.fillStyle = "#e8e8e8";
            ctx.fillText(before, xPos, line.y);
            xPos += ctx.measureText(before).width;
          }

          ctx.fillStyle = "#c8ff00";
          ctx.fillText(word, xPos, line.y);
          xPos += ctx.measureText(word).width;

          if (after) {
            ctx.fillStyle = "#e8e8e8";
            ctx.fillText(after, xPos, line.y);
          }
        }

        // Blinking cursor at the end of the last visible line
        if (!typingDone && charsDrawn >= visibleChars) {
          const cursorX =
            line.x + ctx.measureText(visibleText).width;
          const blink = Math.floor(timestamp / 530) % 2 === 0;
          if (blink) {
            ctx.fillStyle = "#c8ff00";
            ctx.fillRect(
              cursorX + 2,
              line.y,
              fontSize * 0.55,
              fontSize * 1.05
            );
          }
        }
      }

      // Subtle decorative line that grows with scroll
      const lineLen = lerp(0, w * 0.6, effectiveScrollT * 3);
      if (lineLen > 0) {
        const decorY = blockY + lineY + lineHeight * 0.5;
        ctx.beginPath();
        ctx.moveTo(blockX, decorY);
        ctx.lineTo(blockX + lineLen, decorY);
        ctx.strokeStyle = "rgba(200, 255, 0, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Name in top-right
      ctx.fillStyle = "#6b6b6b";
      ctx.font = `${Math.max(11, fontSize * 0.16)}px "Fira Code"`;
      ctx.textBaseline = "top";
      ctx.fillText(
        "Shizhe He",
        w - PADDING_X - ctx.measureText("Shizhe He").width,
        PADDING_X * 0.6
      );
    },
    [prepared, isReady, prefersReducedMotion, text]
  );

  // Animation loop — runs every frame during typing, then only on scroll changes
  useEffect(() => {
    if (!isReady) return;

    const loop = (timestamp: number) => {
      const currentScroll = scrollProgressRef.current;
      const needsRedraw =
        !typingCompleteRef.current ||
        Math.abs(currentScroll - lastDrawnScrollRef.current) > 0.0005 ||
        lastDrawnScrollRef.current === -1;

      if (needsRedraw) {
        draw(timestamp);
        lastDrawnScrollRef.current = currentScroll;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isReady, draw]);

  // Resize observer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      lastDrawnScrollRef.current = -1;
    };

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);
    resize();

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="sr-only">{text}</div>
    </>
  );
}
