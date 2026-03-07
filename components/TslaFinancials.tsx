"use client";

import React from "react";

const leftData = [
  {
    category: "",
    items: [
      { label: "Fiscal year end", value: "2023-12-31" },
      { label: "Last fiscal period", value: "2023 Q4" },
      { label: "Last fiscal period end date", value: "2023-12-31" },
    ],
  },
  {
    category: "Valuation",
    items: [
      { label: "Market capitalization", value: "1.49T" },
      { label: "Enterprise value", value: "1.46T" },
      { label: "Enterprise value/EBITDA (TTM)", value: "132.74" },
      { label: "P/E ratio", value: "376.91" },
      { label: "P/S ratio", value: "15.14" },
      { label: "P/B ratio", value: "18.52" },
      { label: "P/CF ratio", value: "97.32" },
      { label: "P/FCF ratio", value: "230.75" },
    ],
  },
  {
    category: "Income Statement",
    items: [
      { label: "Total revenue (TTM)", value: "94.83B" },
      { label: "Revenue per share (TTM)", value: "26.79" },
      { label: "Gross profit (TTM)", value: "17.09B" },
      { label: "Operating income (TTM)", value: "4.85B" },
      { label: "Net income (TTM)", value: "3.79B" },
      { label: "EPS diluted (TTM)", value: "1.08" },
      { label: "EPS diluted (FQ)", value: "0.24" },
      { label: "Total shares outstanding", value: "3.15B" },
      { label: "Shares float", value: "2.69B" },
    ],
  },
  {
    category: "Balance Sheet",
    items: [
      { label: "Total assets (FQ)", value: "137.81B" },
      { label: "Total liabilities (FQ)", value: "54.94B" },
      { label: "Total equity (FQ)", value: "82.86B" },
      { label: "Total debt (FQ)", value: "14.72B" },
      { label: "Book value per share (FQ)", value: "21.90" },
      { label: "Current ratio (FQ)", value: "2.16" },
      { label: "Debt to equity ratio (FQ)", value: "0.18" },
      { label: "Asset turnover (FQ)", value: "0.73" },
    ],
  },
];

const rightData = [
  {
    category: "Cash Flow",
    items: [
      { label: "Operating cash flow (TTM)", value: "14.75B" },
      { label: "Investing cash flow (TTM)", value: "-15.48B" },
      { label: "Financing cash flow (TTM)", value: "1.14B" },
      { label: "Free cash flow (TTM)", value: "6.22B" },
      { label: "CapEx (TTM)", value: "-8.53B" },
    ],
  },
  {
    category: "Profitability",
    items: [
      { label: "Gross margin (TTM)", value: "18.03%" },
      { label: "Operating margin (TTM)", value: "5.11%" },
      { label: "Pretax margin (TTM)", value: "5.57%" },
      { label: "Net margin (TTM)", value: "4.00%" },
    ],
  },
  {
    category: "Efficiency",
    items: [
      { label: "Return on assets (TTM)", value: "2.92%" },
      { label: "Return on equity (TTM)", value: "4.89%" },
      { label: "Return on invested capital (TTM)", value: "4.27%" },
      { label: "Revenue per employee (FY)", value: "703.54K" },
      { label: "Net income per employee (FY)", value: "28.15K" },
    ],
  },
  {
    category: "Price History",
    items: [
      { label: "Average volume (10 day)", value: "59.55M" },
      { label: "1-Year beta", value: "1.56" },
      { label: "52 Week high", value: "498.83" },
      { label: "52 Week low", value: "214.25" },
      { label: "1 year price target", value: "426.61" },
    ],
  },
  {
    category: "Dividends",
    items: [
      { label: "Dividend yield indicated", value: "-" },
      { label: "Dividends per share (FY)", value: "0.00" },
      { label: "Next payment amount", value: "-" },
      { label: "Next payment date", value: "-" },
      { label: "Dividend payout ratio (TTM)", value: "0.00%" },
    ],
  },
];

const TslaFinancials = () => {
  return (
    <section className="bg-[#97A6B3] relative overflow-hidden">
      <div className="max-w-[1400px mx-auto px-">
        {/* Sticky Container */}
        <div className="bg-[#121318] rounded-[20px  flex flex-col h-[75vh] min-h-[500px] shadow-2xl overflow-hidden relative">
          {/* Fixed Header */}
          <div className="shrink-0 pt-3 pb-3 px-8 md:px-12 bg-[#121318] z-10 shadow-sm flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              <span className="text-[#3b82f6]">TSLA</span> Financials
            </h2>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {/* Left Column */}
              <div className="space-y-8">
                {leftData.map((group, groupIdx) => (
                  <div key={groupIdx}>
                    {group.category && (
                      <h3 className="text-white font-medium text-[12px] mb-3">
                        {group.category}
                      </h3>
                    )}
                    <div className="space-y-[6px]">
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex justify-between items-center text-[10px] leading-snug">
                          <span className="text-gray-300">{item.label}</span>
                          <span className="text-white font-semibold text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {rightData.map((group, groupIdx) => (
                  <div key={groupIdx}>
                    {group.category && (
                      <h3 className="text-white font-medium text-[12px] mb-3">
                        {group.category}
                      </h3>
                    )}
                    <div className="space-y-[6px]">
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex justify-between items-center text-[10px] leading-snug">
                          <span className="text-gray-300">{item.label}</span>
                          <span className="text-white font-semibold text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #121318;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2a2b36;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f4152;
        }
      `}</style>
    </section>
  );
};

export default TslaFinancials;
