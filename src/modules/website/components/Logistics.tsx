import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Track all shipments in one place, from booking to delivery",
  "Collaborate across teams and partners in real time",
  "Get AI-powered insights to make faster logistics decisions",
];

const Logistics = () => {
  return (
    <section className="bg-white py-20" id="logistics">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Logistics Platform for Global Trade
          </h2>
          <p className="text-gray-600 mb-6">
            GCCI connects all your supply chain partners, systems, and data
            into one unified platform — giving you the control, visibility, and
            efficiency needed to move goods worldwide.
          </p>

          <ul className="space-y-3">
            {features.map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1581093588401-22d40e8d2f7b?auto=format&fit=crop&w=1000&q=80"
            alt="Logistics dashboard visualization"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-2xl">
            <p className="font-semibold text-gray-800">Real-time Tracking</p>
            <p className="text-sm text-gray-600">Live updates from every port and warehouse</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Logistics;
