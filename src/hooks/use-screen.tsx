"use client";

import { useEffect, useState } from "react";

const BREAKPOINTS = {
  desktop: 1024,
  tablet: 768,
  mobile: 640,
};

export function useScreen() {
  const [screen, setScreen] = useState<keyof typeof BREAKPOINTS>("mobile");
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function updateScreenSize() {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      if (currentWidth >= BREAKPOINTS.desktop) {
        setScreen("desktop");
      } else if (currentWidth >= BREAKPOINTS.tablet) {
        setScreen("tablet");
      } else {
        setScreen("mobile");
      }
    }

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return {
    width,
    isMobile: screen === "mobile",
    isTablet: screen === "tablet",
    isDesktop: screen === "desktop",
  };
}
