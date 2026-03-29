"use client";

import { useState, useEffect, useRef } from "react";
import type { PreparedTextWithSegments } from "@chenglou/pretext";

export default function usePretext(text: string, font: string) {
  const [prepared, setPrepared] = useState<PreparedTextWithSegments | null>(
    null
  );
  const [isReady, setIsReady] = useState(false);
  const fontRef = useRef(font);
  fontRef.current = font;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      // Wait for the font to be available
      try {
        await document.fonts.load(font);
      } catch {
        // Font might already be loaded or load API may not be fully supported
      }
      await document.fonts.ready;

      if (cancelled) return;

      const { prepareWithSegments } = await import("@chenglou/pretext");
      const result = prepareWithSegments(text, fontRef.current);

      if (!cancelled) {
        setPrepared(result);
        setIsReady(true);
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [text, font]);

  return { prepared, isReady };
}
