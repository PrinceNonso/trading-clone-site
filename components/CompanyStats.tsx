"use client";

import Image from "next/image";

const stats = [
  {
    label: "Total Invested",
    value: "$19,374,034",
    image: "/total_invested.png",
  },
  {
    label: "Global Nation",
    value: "196",
    image: "/global_nation.png",
    highlight: true,
  },
  {
    label: "Remittances",
    value: "$929,915,448",
    image: "/cash.png",
  },
  {
    label: "Total Members",
    value: "40216+",
    image: "/total_members.png",
  },
];

const CompanyStats = () => {
  return (
    <section className="bg-[#1E2028] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-[#0c0d0c] rounded-[24px] p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 ${
                stat.highlight
                  ? "border border-[#c8e632]/40 shadow-[0_0_20px_rgba(200,230,50,0.05)]"
                  : "border border-white/5"
              }`}>
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">
                {stat.label}
              </h3>
              <p className="text-[#c8e632] text-xl font-bold tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
