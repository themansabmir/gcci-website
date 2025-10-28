import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Logistics from "../components/Logistics";
import Solutions from "../components/Solutions";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-white text-gray-900 overflow-hidden">
            {/* Navigation Bar */}
            <Navbar />

            {/*  Hero Section */}
            <Hero />

            {/*  Features Section */}
            <Features />

            {/*  Logistics / Operations Section */}
            <Logistics />

            {/*  Solutions / Services Section */}
            <Solutions />

            {/*  Footer */}
            <Footer />
        </div>
    );
}
