"use client";

import { useEffect, useRef } from "react";

export function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const starCount = 150;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
      star.style.setProperty("--delay", `${Math.random() * 3}s`);
      star.style.width = `${1 + Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.opacity = `${0.2 + Math.random() * 0.6}`;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
