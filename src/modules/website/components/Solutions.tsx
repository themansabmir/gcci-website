import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse } from "lucide-react";

const solutions = [
    {
        title: "Air Freight",
        desc: "Fast, reliable air transport solutions connecting your goods to global markets.",
        icon: Plane,
        img: "https://weareprocarrier.com/images/uploads/Air_Freight.jpg",
    },
    {
        title: "Ocean Freight",
        desc: "Ship smarter with modern visibility, predictable ETAs, and transparent pricing.",
        icon: Ship,
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Ground Transport",
        desc: "Seamless trucking and last-mile delivery for end-to-end logistics coverage.",
        icon: Truck,
        img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Warehousing",
        desc: "Store, manage, and distribute inventory efficiently with global warehousing options.",
        icon: Warehouse,
        img: "https://www.avantauk.com/wp-content/uploads/2023/10/Image20.jpg",
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-900 mb-4"
                >
                    One Platform for Global Trade
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-gray-600 max-w-2xl mx-auto mb-12"
                >
                    GCCI connects every part of the supply chain with technology, data, and expertise to keep your goods moving efficiently.
                </motion.p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {solutions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden text-left"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <Icon className="text-blue-600 w-6 h-6 mr-2" />
                                        <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
