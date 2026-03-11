"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  {
    num: 1,
    title: "Proving Track Record",
    body: "Our investment decisions are backed by comprehensive data analysis, ensuring that your portfolio is optimized for growth in the rapidly evolving ecosystem.",
  },
  {
    num: 2,
    title: "Sustainable Investing",
    body: "We offer tailored investment solutions that align with your financial objectives, risk tolerance, and timeline.",
  },
  {
    num: 3,
    title: "Transparency",
    body: "Our transparent reporting and regular updates ensure that you're always informed about the performance of your investments and any market shifts that might impact your portfolio.",
  },
];

const PortfolioControl = () => {
  // null means all closed; number = open index
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative bg-[#1E2028] py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#c8e632]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left — Content */}
        <div className="flex-1 max-w-lg order-2 lg:order-1">
          <ScrollAnimation animation="fadeLeft" duration={0.7}>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12">
              Take full control
              <br />
              of your portfolio
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <div className="space-y-2 ">
              {features.map((item, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div key={idx} className="!max-w-[21rem]">
                    {/* Accordion Row */}
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center gap-4 py-4 text-left group cursor-pointer">
                      {/* Number Badge */}
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-sm font-black text-black flex-shrink-0">
                        {item.num}
                      </div>

                      {/* Title */}
                      <span
                        className={`flex-1 font-bold text-base transition-colors duration-300 ${
                          isOpen
                            ? "text-yellow-500"
                            : "text-gray-400 group-hover:text-gray-200"
                        }`}>
                        {item.title}
                      </span>

                      {/* Chevron */}
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 text-yellow-500"
                            : "rotate-0 text-gray-600 group-hover:text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Expandable Body */}
                    <div
                      className={`ml-12 overflow-hidden transition-all duration-500   ${
                        isOpen
                          ? "max-h-48 opacity-100 pb-4 font-medium"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>

                    {/* Divider */}
                    {idx < features.length - 1 && (
                      <div className="ml-12 border-t border-white/5" />
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>

        {/* Right — 3D Phone Image */}
        <ScrollAnimation
          animation="fadeRight"
          duration={0.7}
          className="relative w-full max-w-sm lg:max-w-md flex-shrink-0 order-1 lg:order-2">
          <div className="relative aspect-square">
            <Image
              src="/hold_phone.png"
              alt="Take full control of your portfolio — mobile app"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfolioControl;
