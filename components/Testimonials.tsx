"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    name: "Matthew Turner",
    text: "I've tried several digital trading platforms, but Infinity Digital Trade stands out. The ease of use and the range of features make it a clear winner. It's a must-have for anyone serious about digital investments.",
    image: "/man1.png",
  },
  {
    name: "Emma Walker",
    text: "The analytics tools provided by Infinity Digital Trade are second to none. They've allowed me to fine-tune my strategies and maximize my returns!",
    image: "/harper_wilson.png",
  },
  {
    name: "Daniel Carter",
    text: "Infinity Digital Trade offers everything I need in one place. The flexibility and control I have with Infinity Digital Trade are unparalleled.",
    image: "/noah_turner.png",
  },
  {
    name: "Olivia Johnson",
    text: "The customer service is outstanding, and the interface is highly intuitive. Highly recommend for both beginners and seasoned traders.",
    image: "/olivia_johnson.png",
  },
  {
    name: "Benjamin Mitchell",
    text: "Consistent uptime, rapid execution speeds, and deeply detailed charts. I can confidently say this is my go-to trading platform.",
    image: "/ben_mitchel.png",
  },
];

const GAP = 32; // px gap between cards
const TOTAL = testimonials.length;

const Testimonials = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // 1 on mobile, 3 on desktop
  const [currentStep, setCurrentStep] = useState(0);
  const [transition, setTransition] = useState(true);
  const [dotIndex, setDotIndex] = useState(0);
  const isJumping = useRef(false);

  // Derive how many cards are visible based on viewport width
  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const vw = viewportRef.current.offsetWidth;
    const vis = vw < 1024 ? 1 : 3;
    setVisibleCount(vis);
    setCardWidth((vw - GAP * (vis - 1)) / vis);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Reset step when visibleCount changes so clone offset stays correct
  useEffect(() => {
    setTransition(false);
    setCurrentStep(visibleCount); // first real card sits after visibleCount clones
    setDotIndex(0);
  }, [visibleCount]);

  const step = cardWidth + GAP;

  // Auto-advance every 3s
  useEffect(() => {
    if (cardWidth === 0) return;
    const id = setInterval(() => {
      setTransition(true);
      setCurrentStep((s) => s + 1);
      setDotIndex((d) => (d + 1) % TOTAL);
    }, 3000);
    return () => clearInterval(id);
  }, [cardWidth]);

  // Seamless loop: jump back silently after entering a clone zone
  const onTransitionEnd = () => {
    if (isJumping.current) {
      isJumping.current = false;
      return;
    }
    if (currentStep >= TOTAL + visibleCount) {
      isJumping.current = true;
      setTransition(false);
      setCurrentStep(visibleCount);
    }
    if (currentStep < visibleCount) {
      isJumping.current = true;
      setTransition(false);
      setCurrentStep(TOTAL + visibleCount - 1);
    }
  };

  const goTo = (dotIdx: number) => {
    const diff = dotIdx - dotIndex;
    setTransition(true);
    setCurrentStep((s) => s + diff);
    setDotIndex(dotIdx);
  };

  // Build the cloned array
  const cloned = [
    ...testimonials.slice(-visibleCount),
    ...testimonials,
    ...testimonials.slice(0, visibleCount),
  ];

  const offset = cardWidth ? currentStep * step : 0;

  return (
    <section className="bg-[#060b09] py-24 md:py-32 relative overflow-hidden">
      <div className="hidden md:block absolute top-20 left-10 md:left-32 ">
        <Image
          src="/star3.png"
          alt="Decorative star"
          width={100}
          height={100}
          className="opacity-90 animate-pulse"
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 leading-tight">
            What Our Clients Are <br /> Saying
          </h2>
        </ScrollAnimation>
        {/* Viewport */}
        <div ref={viewportRef} className="overflow-hidden py-8">
          {cardWidth > 0 && (
            <div
              className="flex items-center"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${offset}px)`,
                transition: transition ? "transform 0.6s ease-in-out" : "none",
                willChange: "transform",
              }}
              onTransitionEnd={onTransitionEnd}>
              {cloned.map((item, idx) => {
                const isActive =
                  idx === currentStep + Math.floor(visibleCount / 2);

                return (
                  <div
                    key={idx}
                    style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                    className={`rounded-[16px] p-8 md:p-10 transition-all duration-500
                      ${
                        isActive
                          ? "bg-[#1b1c23] border border-yellow-500 scale-[1.05]"
                          : "bg-transparent border border-transparent opacity-60 scale-95"
                      }
                    `}>
                    <div className="flex items-center gap-4 mb-8">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover w-14 h-14"
                      />
                      <span className="text-white font-bold text-xl">
                        - {item.name}
                      </span>
                    </div>

                    <p
                      className={`text-[15px] leading-relaxed mb-10 ${isActive ? "text-gray-100" : "text-gray-400"}`}>
                      &quot;{item.text}&quot;
                    </p>

                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="#facc15"
                          stroke="#facc15"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Square Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, dot) => (
            <button
              key={dot}
              onClick={() => goTo(dot)}
              className={`w-3 h-3 rounded-[2px] transition-all duration-300 ${
                dot === dotIndex
                  ? "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                  : "bg-[#2a271b]"
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
