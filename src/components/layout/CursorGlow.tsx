"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 hidden md:block">
      <div
        className="absolute h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(184,111,60,0.12)_0%,rgba(184,111,60,0.03)_35%,transparent_70%)] blur-3xl transition-transform duration-150 ease-out"
        style={{ transform: `translate(${position.x - 192}px, ${position.y - 192}px)` }}
      />
    </div>
  );
}

