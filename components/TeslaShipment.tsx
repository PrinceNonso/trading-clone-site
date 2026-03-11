"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const shipments = [
  {
    label: "Fright",
    image: "/fedex.png",
  },
  {
    label: "Cargo Truck Shipment",
    image: "/trucker_blue.png",
  },
  {
    label: "Cargo Fright",
    image: "/cargo_fright.png",
  },
];

const TeslaShipment = () => {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Decorative ring star — top left */}
      <div className="hidden md:block absolute top-10 left-10 md:left-20 z-10">
        <Image
          src="/ring2.png"
          alt="Star decoration"
          width={110}
          height={110}
          className="opacity-90 animate-pulse"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight mb-16">
            Track Your Tesla
            <br />
            Shipment
          </h2>
        </ScrollAnimation>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {shipments.map((item, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp" delay={idx * 0.15}>
              <div className="bg-[#111217] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group">
                {/* Image */}
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover:brightness-110"
                  />
                </div>

                {/* Label */}
                <div className="px-6 py-5">
                  <p className="text-[#c8e632] font-semibold text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <a
            href="#tracking"
            className="inline-flex items-center px-6 py-4 bg-[#c8e632] text-black text-sm font-bold rounded-lg hover:bg-[#d4f04a] hover:shadow-[0_0_24px_rgba(200,230,50,0.35)] transition-all duration-300">
            Start Tracking
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TeslaShipment;
