import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TradingBenefits from "@/components/TradingBenefits";
import TradingOpportunities from "@/components/TradingOpportunities";
import InvestmentSolutions from "@/components/InvestmentSolutions";
import StockPerformance from "@/components/StockPerformance";
import TeslaStock from "@/components/TeslaStock";
import CompanyStats from "@/components/CompanyStats";
import TradingTeam from "@/components/TradingTeam";
import CryptoStocksSection from "@/components/CryptoStocksSection";
import PortfolioControl from "@/components/PortfolioControl";
import TeslaShipment from "@/components/TeslaShipment";
import TradingFeatures from "@/components/TradingFeatures";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import TslaFinancials from "@/components/TslaFinancials";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className="bg-[#060b09] min-h-screen">
      <Navbar />
      <HeroSection />
      <TradingBenefits />
      <TradingOpportunities />
      <StockPerformance />
      <InvestmentSolutions />
      <TeslaStock />
      <CompanyStats />
      <TradingTeam />
      <CryptoStocksSection />
      <PortfolioControl />
      <TeslaShipment />
      <TradingFeatures />
      <Testimonials />
      <FaqSection />
      <TslaFinancials />
      <Footer />
    </main>
  );
};

export default Page;
