"use client";

import Image from "next/image";
import TradingViewMiniChart from "./TradingViewMiniChart";
import ScrollAnimation from "./ScrollAnimation";

const cryptos = [
  {
    symbol: "BITSTAMP:BTCUSD",
    name: "Bitcoin",
    iconBg: "#f7931a",
    initial: "B",
  },
  {
    symbol: "BITSTAMP:ETHUSD",
    name: "Ethereum",
    iconBg: "#627eea",
    initial: "E",
  },
  {
    symbol: "COINBASE:SOLUSD",
    name: "Solana",
    iconBg: "#9945ff",
    initial: "S",
  },
];

const stocks = [
  { symbol: "NASDAQ:TSLA", name: "Tesla", iconBg: "#cc0000", initial: "T" },
  { symbol: "NASDAQ:AAPL", name: "Apple", iconBg: "#555", initial: "A" },
  { symbol: "NASDAQ:NVDA", name: "NVIDIA", iconBg: "#76b900", initial: "N" },
];

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
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-16 tracking-tight">
            Our Most Invested Cryptocurrencies &amp; Stocks
          </h2>
        </ScrollAnimation>

        {/* Crypto Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cryptos.map((item, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp" delay={idx * 0.12}>
              <div className="bg-[#0c0d0c] border border-white/5 rounded-[20px] overflow-hidden hover:border-white/10 transition-all duration-300">
                <TradingViewMiniChart
                  symbol={item.symbol}
                  height={220}
                  dateRange="12M"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stocks Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stocks.map((item, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp" delay={idx * 0.12}>
              <div className="bg-[#0c0d0c] border border-white/5 rounded-[20px] overflow-hidden hover:border-white/10 transition-all duration-300">
                <TradingViewMiniChart
                  symbol={item.symbol}
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

export default CryptoStocksSection;
