import { motion } from "framer-motion";
import { BarChart3, Globe2, ClipboardCheck } from "lucide-react";

const platformFeatures = [
    {
        title: "Global Visibility",
        desc: "Track your shipments across air, ocean, and land in real-time. Stay informed with automatic updates at every step.",
        icon: Globe2,
        img: "https://images.ctfassets.net/92fo1e671z6m/7ja69sF7G5Sz4S7JFUnFS0/d02db84865a018e91c8bea9e838735eb/put-us-to-work-image.png?w=1132&h=688&q=80&fm=avif&bg=transparent",
    },
    {
        title: "Smart Analytics",
        desc: "Make better business decisions with visual insights, shipment performance metrics, and spend analysis.",
        icon: BarChart3,
        img: "https://cdn.prod.website-files.com/65ae5e2298de9d281214b068/66964499b9e994d358c70d89_5.png",
    },
    {
        title: "Simplified Operations",
        desc: "Collaborate with your supply chain partners directly inside the platform. Manage bookings, invoices, and documents effortlessly.",
        icon: ClipboardCheck,
        img: "https://lianvisman.com/wp-content/uploads/2024/05/Freight-forwarding-process1.jpg",
    },
];

export default function Platform() {
    return (
        <section id="platform" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center text-gray-900 mb-16"
                >
                    Manage Everything in One Platform
                </motion.h2>

                <div className="space-y-24">
                    {platformFeatures.map((item, index) => {
                        const Icon = item.icon;
                        const isReversed = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                className={`grid md:grid-cols-2 items-center gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}
                                initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className={`order-${isReversed ? "2" : "1"}`}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="rounded-2xl shadow-xl w-full object-cover"
                                    />
                                </div>

                                <div className={`order-${isReversed ? "1" : "2"}`}>
                                    <div className="flex items-center mb-4">
                                        <Icon className="text-blue-600 w-7 h-7 mr-2" />
                                        <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
