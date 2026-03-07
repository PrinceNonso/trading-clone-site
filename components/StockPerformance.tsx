"use client";

import Image from "next/image";

const stocks = [
  {
    symbol: "NVDA",
    name: "NVIDIA CORPORATION",
    price: "177.82",
    change: "-3.01%",
    absolute: "(5.52)",
    color: "text-red-500",
    chart: "https://s3.tradingview.com/i/iO1fP3z0_mid.png", // Just a placeholder for the look
  },
  {
    symbol: "TSLA",
    name: "TESLA, INC.",
    price: "396.73",
    change: "-2.17%",
    absolute: "(8.82)",
    color: "text-red-500",
  },
  {
    symbol: "AAPL",
    name: "APPLE INC.",
    price: "257.46",
    change: "-1.09%",
    absolute: "(2.83)",
    color: "text-red-500",
  },
  {
    symbol: "AMZN",
    name: "AMAZON.COM, INC.",
    price: "213.21",
    change: "-2.62%",
    absolute: "(5.73)",
    color: "text-red-500",
  },
  {
    symbol: "META",
    name: "META PLATFORMS, INC.",
    price: "644.86",
    change: "-2.38%",
    absolute: "(15.71)",
    color: "text-red-500",
  },
  {
    symbol: "GOOGL",
    name: "ALPHABET INC (GOOGLE) CLASS A",
    price: "298.52",
    change: "-0.78%",
    absolute: "(2.36)",
    color: "text-red-500",
  },
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
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16 tracking-tight">
          Stock Performance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocks.map((stock, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d0c] border border-white/5 rounded-[20px] p-6 hover:border-[#c8e632]/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                    {stock.symbol[0]}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm flex items-center gap-1">
                      {stock.symbol}{" "}
                      <span className="text-[8px] text-gray-500 opacity-50">
                        •
                      </span>
                    </h3>
                    <p className="text-[10px] text-gray-500 font-medium">
                      {stock.name}
                    </p>
                  </div>
                </div>
                {/* Simplified TradingView-like logo logo */}
                <div className="opacity-40">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM10 15L10 9L15 12L10 15Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-white">
                  {stock.price}
                </span>
                <span className="text-[10px] text-[#c8e632] italic">D</span>
                <span className={`text-xs ml-auto ${stock.color} font-medium`}>
                  {stock.change} {stock.absolute}
                </span>
              </div>

              {/* Fake Sparkline / Chart */}
              <div className="relative h-16 w-full mt-4 flex items-end">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none">
                  <path
                    d="M0 60 Q 50 40 100 70 T 200 50 T 300 65"
                    fill="none"
                    stroke="#00f2fe"
                    strokeWidth="2"
                    className="opacity-40"
                  />
                  <path
                    d="M0 80 Q 50 60 100 90 T 200 70 T 300 85"
                    fill="none"
                    stroke="#c8e632"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-[8px] text-gray-600 mt-2 uppercase tracking-widest font-bold">
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockPerformance;
