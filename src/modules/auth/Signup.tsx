import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface SignupProps {
    onNavigate?: (page: string) => void;
}

export default function Signup({ onNavigate }: SignupProps) {
    const handleLoginClick = () => {
        if (onNavigate) {
            onNavigate("login");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
        >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-center text-gray-600 mb-6">Start managing your global supply chain today.</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative rounded-lg shadow-sm">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="John Doe"
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                        <div className="relative rounded-lg shadow-sm">
                            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="work@company.com"
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
                                minLength={8}
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                                I agree to the{" "}
                                <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </motion.div>
    );
}