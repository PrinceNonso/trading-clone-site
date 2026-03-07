"use client";

import Image from "next/image";

const cryptos = [
  {
    symbol: "BTCUSD",
    name: "BITCOIN / U.S. DOLLAR",
    price: "67,931",
    change: "-0.27%",
    absolute: "(183.00)",
    iconBg: "#f7931a",
    initial: "B",
  },
  {
    symbol: "ETHUSD",
    name: "ETHEREUM / U.S. DOLLAR",
    price: "1,975.13",
    change: "-0.17%",
    absolute: "(3.36)",
    iconBg: "#627eea",
    initial: "E",
  },
  {
    symbol: "SOLUSD",
    name: "SOLANA / U.S. DOLLAR",
    price: "84.16",
    change: "-0.60%",
    absolute: "(0.51)",
    iconBg: "#9945ff",
    initial: "S",
  },
];

const stocks = [
  {
    symbol: "TSLA",
    name: "TESLA, INC.",
    price: "396.73",
    superscript: "D",
    change: "-2.17%",
    absolute: "(8.82)",
    iconBg: "#cc0000",
    initial: "T",
  },
  {
    symbol: "AAPL",
    name: "APPLE INC",
    price: "257.46",
    superscript: "D",
    change: "-1.09%",
    absolute: "(2.83)",
    iconBg: "#555",
    initial: "A",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA CORPORATION",
    price: "177.82",
    superscript: "D",
    change: "-3.01%",
    absolute: "(5.52)",
    iconBg: "#76b900",
    initial: "N",
  },
];

// Small TradingView-style "play" icon
const TVIcon = () => (
  <div className="opacity-30">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="white" />
    </svg>
  </div>
);

const CryptoStocksSection = () => {
  return (
    <section className="bg-[#1E2028] py-24 md:py-32 relative overflow-hidden">
      {/* 3D Star Icon */}
      <div className=" hidden md:block absolute top-10 left-10 md:left-24 z-10">
        <Image
          src="/starIcon.png"
          alt="Star decoration"
          width={110}
          height={110}
          className="opacity-90 animate-pulse"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-16 tracking-tight">
          Our Most Invested Cryptocurrencies &amp; Stocks
        </h2>

        {/* Crypto Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cryptos.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d0c] border border-white/5 rounded-[20px] p-6 hover:border-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ backgroundColor: item.iconBg }}>
                    {item.initial}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {item.symbol}
                    </p>
                    <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wide">
                      {item.name}
                    </p>
                  </div>
                </div>
                <TVIcon />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-white text-2xl font-bold">
                  {item.price}
                </span>
                <span className="text-red-500 text-sm font-medium">
                  {item.change} {item.absolute}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stocks Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stocks.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d0c] border border-white/5 rounded-[20px] p-6 hover:border-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ backgroundColor: item.iconBg }}>
                    {item.initial}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm flex items-center gap-1">
                      {item.symbol}{" "}
                      <span className="text-gray-600 text-[8px]">•</span>
                    </p>
                    <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wide">
                      {item.name}
                    </p>
                  </div>
                </div>
                <TVIcon />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-white text-2xl font-bold">
                  {item.price}
                  {item.superscript && (
                    <sup className="text-[#c8e632] text-[10px] ml-0.5">
                      {item.superscript}
                    </sup>
                  )}
                </span>
                <span className="text-red-500 text-sm font-medium">
                  {item.change} {item.absolute}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoStocksSection;
