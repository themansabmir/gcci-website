
const Hero = () => {
  return (
    <div className="min-h-[55vh] bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white text-xs px-40 py-2 hidden sm:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>Introducing GCCI Fall Technology Release</span>
          <span>•</span>
          <span>Manage customs. Cut costs. Grow faster.</span>
          <a href="#" className="underline hover:no-underline">
            Watch Announcement
          </a>
        </div>
        <select className="bg-transparent border-none text-white focus:outline-none">
          <option>English</option>
        </select>
      </div>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.ctfassets.net/92fo1e671z6m/2eC8lb2Et7XpL0NqOGND6g/660836607ff801b6f55bc166d7d5eef9/f85ac460-5b78-4ef9-acba-07f0f0f7b8d7.png?w=3626&h=2526&q=80&fm=avif&bg=transparent')", // Harbor sunset
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
              GCCI is the platform that coordinates global logistics from
              factory to customer business – empowering businesses to ship
              anywhere, sell everywhere and grow faster.
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
