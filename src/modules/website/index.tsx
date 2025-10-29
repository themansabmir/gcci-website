import Hero from "./components/Hero";
import Features from "./components/Features";
import Logistics from "./components/Logistics";
import Solutions from "./components/Solutions";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/*  Hero Section */}
      <Hero />

      {/*  Features Section */}
      <Features />

      {/*  Logistics / Operations Section */}
      <Logistics />

      {/*  Solutions / Services Section */}
      <Solutions />
    </div>
  );
};

export default LandingPage;
