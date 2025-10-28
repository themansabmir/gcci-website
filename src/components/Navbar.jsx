import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/#solutions" },
        { name: "Platform", path: "/#platform" },
        { name: "Contact", path: "/#cta" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    GCCI
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        to="/login"
                        className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-t border-gray-200"
                >
                    <div className="flex flex-col items-center gap-4 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-gray-700 hover:text-blue-600 transition"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                            className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setOpen(false)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Sign Up
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
