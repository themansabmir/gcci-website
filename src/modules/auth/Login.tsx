import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";



export default function Login() {
   
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
        >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg  p-8">
                <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Sign in to your GCCI Control Tower.</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative rounded-lg shadow-sm">
                            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="user@company.com"
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative rounded-lg shadow-sm">
                            <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </motion.div>
    );
}