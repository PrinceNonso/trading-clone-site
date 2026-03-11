"use client";

import { useEffect, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function TradingViewChart() {
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
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        ["Tesla", "NASDAQ:TSLA|1D"],
        ["Apple", "NASDAQ:AAPL|1D"],
        ["NVIDIA", "NASDAQ:NVDA|1D"],
        ["Amazon", "NASDAQ:AMZN|1D"],
        ["Bitcoin", "BITSTAMP:BTCUSD|1D"],
      ],
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
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
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

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="bg-[#0a0f0d] py-12 ">
      <div className="">
        <ScrollAnimation animation="fadeUp">
          <div
            ref={containerRef}
            className="rounded-2xl overflow-hidden border border-white/5"
            style={{ height: "500px" }}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
