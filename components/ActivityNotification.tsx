"use client";

import { useState, useEffect, useCallback } from "react";
import { X, CircleCheck } from "lucide-react";

const notifications = [
  { action: "withdrew", amount: "$8,253", country: "Estonia" },
  { action: "deposited", amount: "$15,000", country: "United States" },
  { action: "withdrew", amount: "$3,420", country: "Germany" },
  { action: "deposited", amount: "$22,500", country: "United Kingdom" },
  { action: "withdrew", amount: "$6,780", country: "Canada" },
  { action: "deposited", amount: "$11,200", country: "Australia" },
  { action: "withdrew", amount: "$4,950", country: "Japan" },
  { action: "deposited", amount: "$9,800", country: "Singapore" },
  { action: "withdrew", amount: "$7,300", country: "Switzerland" },
  { action: "deposited", amount: "$18,600", country: "France" },
  { action: "withdrew", amount: "$5,100", country: "Brazil" },
  { action: "deposited", amount: "$13,750", country: "South Korea" },
];

export default function ActivityNotification() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % notifications.length);
      setDismissed(false);
      setVisible(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance, dismissed]);

  const dismiss = () => {
    setDismissed(true);
    setVisible(false);
    // Re-appear after 8s with the next notification
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % notifications.length);
      setDismissed(false);
      setVisible(true);
    }, 8000);
  };

  const notif = notifications[currentIdx];

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
      <div className="flex items-center gap-3 bg-[#1c1e26]/95 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[280px] max-w-[340px]">
        <CircleCheck className="w-6 h-6 text-emerald-400 shrink-0" />
        <p className="text-gray-200 text-sm leading-snug flex-1">
          A member from {notif.country} {notif.action}{" "}
          <span className="text-white font-semibold">{notif.amount}</span> ...
        </p>
        <button
          onClick={dismiss}
          className="text-gray-500 hover:text-gray-300 transition-colors shrink-0 ml-1"
          aria-label="Dismiss notification">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
