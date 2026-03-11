"use client";

import { useEffect, useRef, memo } from "react";

interface TradingViewMiniChartProps {
  symbol: string;
  dateRange?: "1D" | "1M" | "3M" | "12M" | "60M" | "ALL";
  width?: string | number;
  height?: string | number;
}

function TradingViewMiniChart({
  symbol,
  dateRange = "12M",
  width = "100%",
  height = 220,
}: TradingViewMiniChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    container.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: typeof width === "number" ? String(width) : width,
      height: typeof height === "number" ? String(height) : height,
      locale: "en",
      dateRange,
      colorTheme: "dark",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [symbol, dateRange, width, height]);

  return <div ref={containerRef} />;
}

export default memo(TradingViewMiniChart);
