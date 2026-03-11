"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const teslaModels = [
  {
    name: "Model Y",
    price: "31,490",
    image: "/car-white.png",
  },
  {
    name: "Model 3",
    price: "34,490",
    image: "/car-red.png",
  },
  {
    name: "Model S",
    price: "68,490",
    image: "/car-blue.png",
  },
  {
    name: "Model X",
    price: "65,890",
    image: "/car1.png",
  },
  {
    name: "Cyber Truck",
    price: "91,890",
    image: "/cybertruck.png",
  },
];

const TeslaStock = () => {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* 3D Round Star Icon */}
      <div className="hidden md:block absolute top-10 left-10 md:left-24">
        <Image
          src="/starRound.png"
          alt="Decorative star"
          width={100}
          height={100}
          className="opacity-90 animate-pulse"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 leading-tight">
            Purchase Our Limited
            <br />
            Stock Tesla
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teslaModels.map((car, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp" delay={idx * 0.12}>
              <div className="bg-[#1c1e26] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-gray-400 text-xs font-medium mb-3">
                    Buy for ${car.price} .
                  </p>
                  <h3 className="text-white text-lg font-bold mb-6">
                    Get a {car.name} For ${car.price}
                  </h3>
                  <a
                    href="#buy"
                    className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors">
                    Buy Now <MoveRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeslaStock;
