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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 hidden mix-blend-screen md:block">
      <div
        className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(184,111,60,0.22)_0%,rgba(184,111,60,0.1)_25%,transparent_70%)] blur-3xl transition-transform duration-150 ease-out"
        style={{ transform: `translate(${position.x - 144}px, ${position.y - 144}px)` }}
      />
    </div>
  );
}
