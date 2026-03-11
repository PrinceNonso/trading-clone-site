"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, ArrowRight } from "lucide-react";
import { FaCoins, FaSackDollar } from "react-icons/fa6";
import { BsGiftFill } from "react-icons/bs";
import SproutIcon from "@/app/assets/svg";

type MoneyBagIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const MoneyBagIcon = ({
  size = 24,
  strokeWidth = 1.6,
  ...props
}: MoneyBagIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M9 7c-1.6 0-3.1-.5-4-1.3C6 4.7 8.1 3 12 3s6 1.7 7 2.7C18.1 6.5 16.6 7 15 7H9Z" />
    <path d="M8.6 7.6C6.4 9.1 5 11.6 5 15c0 4 2.5 6 7 6s7-2 7-6c0-3.4-1.4-5.9-3.6-7.4" />
    <path d="M12 10v6" />
    <path d="M10.6 12h2.8a1.4 1.4 0 1 1 0 2.8h-2.8a1.4 1.4 0 1 0 0 2.8h2.8" />
  </svg>
);

export default function DashboardHome() {
  const miniChartRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mini Chart Widget (top section) - TSLA candlestick chart
    if (miniChartRef.current && !miniChartRef.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.textContent = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:TSLA",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        allow_symbol_change: false,
        support_host: "https://www.tradingview.com",
        backgroundColor: "rgba(0, 0, 0, 0)",
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        calendar: false,
        hide_volume: false,
        width: "100%",
        height: "100%",
      });
      miniChartRef.current.appendChild(script);
    }

    // Symbol Overview Widget (Market Overview)
    if (overviewRef.current && !overviewRef.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.async = true;
      script.textContent = JSON.stringify({
        symbols: [["NASDAQ:TSLA|1D"]],
        chartOnly: false,
        width: "100%",
        height: "100%",
        locale: "en",
        colorTheme: "dark",
        autosize: true,
        showVolume: false,
        showMA: false,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: "right",
        scaleMode: "Normal",
        fontFamily: "inherit",
        fontSize: "10",
        noTimeScale: false,
        valuesTracking: "1",
        changeMode: "price-and-percent",
        chartType: "area",
        lineWidth: 2,
        lineType: 0,
        dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
        isTransparent: true,
      });
      overviewRef.current.appendChild(script);
    }

    // Timeline Widget (Market News)
    if (timelineRef.current && !timelineRef.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.textContent = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: true,
        displayMode: "regular",
        width: "100%",
        height: "100%",
        colorTheme: "dark",
        locale: "en",
        autosize: true,
      });
      timelineRef.current.appendChild(script);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://infinitydigitaltrade.com/ref/User");
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white">
        Welcome, User!
      </h1>

      {/* Account Balance Section */}
      <div className="bg-[#141c18] border border-white/5 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
          Account Balance
        </p>
        <p className="text-3xl md:text-4xl font-bold text-white mb-1">$0.00</p>
        <p className="text-sm text-gray-400">
          <span className="text-[#22c55e]">↑ Up by $0.00</span> since you began
          investing
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Mini Chart */}
          <div className="bg-[#111916] border border-white/5 rounded-xl overflow-hidden h-[260px] ">
            <div
              ref={miniChartRef}
              className="tradingview-widget-container h-full w-full"
            />
          </div>

          {/* Stat Cards - 2x2 grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: "TOTAL DEPOSIT", value: "$0.00", icon: FaSackDollar },
              { label: "TOTAL PROFIT", value: "$0.00", icon: SproutIcon },
              { label: "REFFERAL BONUS", value: "$0.00", icon: BsGiftFill },
              { label: "WITHDRAWALS", value: "$0.00", icon: FaCoins },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gradient-to-r  from-[#4b4a4a] to-[#2a2a2a] rounded-2xl pl-6 pr-0 py-0 flex items-center justify-between shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
                  <div className="py-5">
                    <p className="text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-white/80 mt-1">
                      {stat.label}
                    </p>
                  </div>
                  <div className="bg-[#1f1f1f] border border-white/5 h-full w-16 flex items-center justify-center rounded-r-2xl">
                    {stat.label === "TOTAL PROFIT" ? (
                      <Icon size={30} color="#ffffff" />
                    ) : (
                      <Icon size={30} className="text-white" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Investments */}
      <div className="bg-[#141c18] border border-white/5 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-4">
          Active Investments
        </h2>
        <div className="border border-white/5 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 mb-4">
            You do not have an active investment at the moment.
          </p>
          <Link
            href="/dashboard/packages"
            className="inline-block px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors">
            Invest
          </Link>
        </div>
      </div>

      {/* Asset */}
      <div className="bg-[#141c18] border border-white/5 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-4">Asset</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link
            href="/dashboard/purchase-stock"
            className="px-5 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-medium rounded-md transition-colors">
            Buy Assets / Stocks
          </Link>
          <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-gray-300 text-sm font-medium rounded-md transition-colors">
            Track Your Goods
          </button>
        </div>
        <Link
          href="/dashboard/transactions"
          className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-1 transition-colors">
          View all transactions <ArrowRight size={14} />
        </Link>
      </div>

      {/* Market Overview + Market News */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Overview */}
        <div className="bg-[#0e1512] border border-[#22c55e]/20 rounded-2xl p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-white mb-4">
            Market Overview
          </h2>
          <div
            ref={overviewRef}
            className="tradingview-widget-container !h-[400px] "
          />
        </div>

        {/* Market News */}
        <div className="bg-[#0e1512] border border-[#22c55e]/20 rounded-2xl p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-white mb-4">Market News</h2>
          <div
            ref={timelineRef}
            className="tradingview-widget-container h-[400px]"
          />
        </div>
      </div>

      {/* Refer Us & Earn */}
      <div className="bg-[#0e1512] border border-[#22c55e]/20 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-1">Refer Us & Earn</h2>
        <p className="text-sm text-gray-400 italic mb-4">
          Use the below link to invite your friends.
        </p>
        <div className="flex items-center gap-2 bg-[#111916] border border-white/10 rounded-xl px-4 py-3">
          <p className="flex-1 text-sm text-white truncate">
            https://infinitydigitaltrade.com/ref/Brown
          </p>
          <button
            onClick={handleCopy}
            className="shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Copy referral link">
            <Copy size={16} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-gray-500 py-4">
        All Rights Reserved © Infinity Digital Trade 2024
      </p>
    </div>
  );
}
