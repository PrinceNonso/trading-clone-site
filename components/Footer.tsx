import React from "react";
import { Facebook, Send, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Send, href: "#" }, // Using Send for Telegram
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black py-6 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Empty div for flex pacing so the center text stays perfectly centered on desktop */}
          <div className="hidden md:block flex-1" />

          {/* Copyright Text */}
          <div className="flex-1 text-center text-[13px] text-gray-300 font-medium whitespace-nowrap">
            © 2024 Infinity Digital Trade All Rights Reserved
          </div>

          {/* Social Icons */}
          <div className="flex-1 flex justify-center md:justify-end gap-3 mt-4 md:mt-0">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-[#1a1c23] hover:bg-[#2a2c35] flex items-center justify-center transition-colors duration-300"
                  aria-label={`Social link ${idx + 1}`}>
                  <Icon className="w-4 h-4 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
