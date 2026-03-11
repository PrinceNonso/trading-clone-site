"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  {
    title: "Indicators for Trade Success",
    body: "We take pride in our ability to identify key opportunities and act swiftly to capitalize on them, ensuring safe returns on every invested capital for our clients.",
    image: "/indicators.png",
  },
  {
    title: "Pro Tools for Risk Mastery",
    body: "We specialize in curating investment strategies that maximize returns while mitigating risks associated with the volatility of the crypto, tech and automotive sectors.",
    image: "/pro_tools.png",
  },
  {
    title: "Aim for Success",
    body: "By investing with us, you're not just growing your wealth—you're also supporting a sustainable and innovative company that's shaping the future of transportation and energy.",
    image: "/aim.png",
  },
];

const TradingFeatures = () => {
  return (
    <section className="bg-[#0a0a0c] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative 4-pointed star — top left */}
      <div className="hidden md:block absolute top- left-10 md:left-32 z-10">
        <Image
          src="/2star.png"
          alt="Star decoration"
          width={90}
          height={90}
          className="opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight mb-20">
            Key Trading Features for
            <br />
            Success
          </h2>
        </ScrollAnimation>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp" delay={idx * 0.15}>
              <div className="bg-[#14151f] border border-white/5 rounded-2xl p-8 hover:border-[#c8e632]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,230,50,0.04)] hover:-translate-y-1 group">
                {/* Icon */}
                <div className="mb-8 w-16 h-16 relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-4 group-hover:text-[#c8e632]`}>
                  {feature.title}
                </h3>

                {/* Body */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.body}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingFeatures;
