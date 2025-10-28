import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-gray-300 pt-20 pb-10 overflow-hidden">
            {/* Faint map pattern */}
            <img
                src="https://www.svgrepo.com/show/509223/world-map.svg"
                alt="World map"
                className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
            />

            {/* Integrated CTA at the beginning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12"
            >
                <h3 className="text-xl font-semibold text-white mb-3">Ready to Streamline Your Supply Chain?</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-2xl mx-auto">
                    Join thousands of businesses simplifying global trade with GCCI’s all-in-one logistics platform.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10"
            >
                {/* Logo + short info */}
                <div>
                    <div className="flex items-center mb-4">
                        <Globe className="w-6 h-6 text-blue-500 mr-2" />
                        <h3 className="text-white text-xl font-semibold">GCCI</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Powering global trade with technology and transparency.
                        Simplify your logistics with one unified platform.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                        <li><a href="#" className="hover:text-blue-400">API</a></li>
                        <li><a href="#" className="hover:text-blue-400">Support</a></li>
                        <li><a href="#" className="hover:text-blue-400">Security</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Connect</h4>
                    <div className="flex space-x-4">
                        <a href="https://www.Linkedln.com" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
                        <a href="https://www.x.com" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                        <a href="https://www.facebook.com" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
                    </div>
                </div>
            </motion.div>

            {/* Copyright */}
            <div className="relative z-10 mt-16 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} GCCI by Reuben . All rights reserved.
            </div>
        </footer>
    );
}