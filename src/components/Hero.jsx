import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="min-h-[55vh] bg-gray-50">
            {/* Announcement Bar */}
            <div className="bg-gray-900 text-white text-xs px-40 py-2 hidden sm:flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <span>Introducing GCCI Fall Technology Release</span>
                    <span>•</span>
                    <span>Manage customs. Cut costs. Grow faster.</span>
                    <a href="#" className="underline hover:no-underline">Watch Announcement</a>
                </div>
                    <select className="bg-transparent border-none text-white focus:outline-none">
                        <option>English</option>
                    </select>
                </div>

            {/* Navigation */}
            <nav className="bg-gray-900 text-white text-xs px-40 py-3 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-0 sm:space-x-8">
                    <h1 className="text-xl font-bold">GCCI</h1>
                    <div className="hidden sm:flex space-x-6">
                        <a href="#" className="hover:text-purple-300 text-sm">Freight & Fulfillment</a>
                        <a href="#" className="hover:text-purple-300 text-sm">Technology</a>
                        <a href="#" className="hover:text-purple-300 text-sm">Resources</a>
                        <a href="#" className="hover:text-purple-300 text-sm">Company</a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                    <div className="relative w-full sm:w-48">
                        <input
                            type="text"
                            placeholder="GCCI ?"
                            className="w-full px-3 py-1.5 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        />
                        <button className="absolute right-1 top-1.5 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </div>
                    <Link to="/login">
                        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-1.5 rounded-md font-semibold text-sm">
                            Log in
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-1.5 rounded-md font-semibold text-sm">
                            Get Started
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: "url('https://images.ctfassets.net/92fo1e671z6m/2eC8lb2Et7XpL0NqOGND6g/660836607ff801b6f55bc166d7d5eef9/f85ac460-5b78-4ef9-acba-07f0f0f7b8d7.png?w=3626&h=2526&q=80&fm=avif&bg=transparent')" // Harbor sunset
                    }}
                ></div>
                <div className="relative z-10 container mx-auto px-20 py-8 sm:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                            Your end-to-end supply chain, all in
                            <br />
                            <span className="text-purple-400">one platform</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            GCCI is the platform that coordinates global logistics from factory to customer business – empowering businesses to ship anywhere, sell everywhere and grow faster.
                        </p>
                        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg font-semibold text-sm sm:text-base">
                            Talk to an Expert
                        </button>
                    </div>

                    {/* Right Image Replacement */}
                    <div className="lg:w-1/3 lg:ml-auto">
                        <img
                            src="https://www.xdexpress.com/wp-content/uploads/2022/05/air-freight-forwarder-xiongda.jpg"
                            alt="Freight Forwarders Offer A Broad Range of Services"
                            className="w-full h-64 sm:h-80 lg:h-auto rounded-2xl shadow-2xl max-h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;