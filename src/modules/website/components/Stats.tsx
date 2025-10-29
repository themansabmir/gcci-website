import { motion } from "framer-motion";

const stats = [
    { label: "Shipments Managed", value: "10k+" },
    { label: "Global Partners", value: "500+" },
    { label: "Countries Served", value: "120+" },
    { label: "Customer Satisfaction", value: "98%" },
];

const brands = [
    "https://images.ctfassets.net/92fo1e671z6m/1VoC189x4RxklzodB0jpMq/32f95ed4c9b3c270b18b8f15433d33ed/Fjallraven_logo_black.png?w=1000&h=400&q=80&fm=avif&bg=transparent",
    "https://images.ctfassets.net/92fo1e671z6m/4mq0Pof50kokobXu514T19/a51a972ef516c803c40d4efbf275c431/Estrid_Wordmark-01.png?w=1033&h=135&q=80&fm=avif&bg=transparent",
    "https://images.ctfassets.net/92fo1e671z6m/40xzq0cPClpDbary0qPbMO/87b3fcf4ed3b5842c31e9b7fdcc89c33/NAKD.png?w=676&h=135&q=80&fm=avif&bg=transparent",
    "https://images.ctfassets.net/92fo1e671z6m/7yhDonk5qRpln2VdrpMsSk/a81a1c5301843cafcbf23d1d9007054d/o_my_bag_logo.png?w=582&h=135&q=80&fm=avif&bg=transparent",
    "https://images.ctfassets.net/92fo1e671z6m/6yqXXE2n2drlXIP127BfMP/f0aa9d657fcfca3efce81a0906c57867/Smartshake-logo.png?w=426&h=135&q=80&fm=avif&bg=transparent",
];

export default function Stats() {
    return (
        <section id="stats" className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-900 mb-8"
                >
                    Trusted by the World’s Leading Brands
                </motion.h2>

                {/* Brand Logos Marquee */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="overflow-hidden mb-16"
                    style={{ width: "100%" }}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...brands, ...brands].map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Brand logo"
                                className="h-6 w-auto opacity-70 hover:opacity-100 transition mx-10 flex-shrink-0"
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-10"
                >
                    {stats.map((item, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
                            <p className="text-gray-600 mt-2">{item.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}