"use client";

import Image from "next/image";
import TradingViewMiniChart from "./TradingViewMiniChart";
import ScrollAnimation from "./ScrollAnimation";

const stocks = [
  { symbol: "NASDAQ:NVDA", name: "NVIDIA" },
  { symbol: "NASDAQ:TSLA", name: "Tesla" },
  { symbol: "NASDAQ:AAPL", name: "Apple" },
  { symbol: "NASDAQ:AMZN", name: "Amazon" },
  { symbol: "NASDAQ:META", name: "Meta" },
  { symbol: "NASDAQ:GOOGL", name: "Google" },
];

const StockPerformance = () => {
  return (
    <section className="bg-[#1E2028] py-24 md:py-32 relative overflow-hidden">
      {/* 3D Star Icon from Public Folder */}
      <div className="hidden md:block absolute top-10 left-10 md:left-24">
        <Image
          src="/starIcon.png"
          alt="Decorative star"
          width={150}
          height={150}
          className="opacity-80 animate-pulse"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16 tracking-tight">
            Stock Performance
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocks.map((stock, idx) => (
            <ScrollAnimation key={idx} animation="scaleUp" delay={idx * 0.1}>
              <div className="bg-[#0c0d0c] border border-white/5 rounded-[20px] overflow-hidden hover:border-[#c8e632]/20 transition-all duration-300">
                <TradingViewMiniChart
                  symbol={stock.symbol}
                  height={220}
                  dateRange="12M"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockPerformance;
