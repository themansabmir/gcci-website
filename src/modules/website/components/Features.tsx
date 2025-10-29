import { useMemo } from "react";

const Features = () => {
    const serviceData = useMemo(
        () => [
            {
                subtitle: "LOGISTIX OCEAN FREIGHT",
                title: "Digitize freight forwarding for visibility and control",
                description:
                    "Whether you're shipping for the first time or moving thousands of TEUs a year, LOGISTIX optimizes speed and cost with world-class FCL and ocean consolidation services. We digitize and structure your supply chain data, so you can track each shipment down to the SKU, from PO creation all the way through clearance and delivery – along with an expert team supporting you every step of the way.",
                imageUrl:
                    "https://images.ctfassets.net/92fo1e671z6m/6hAspJntP24lanPAbEN1J3/f7e6187a6f0b8fc0b0103bea14aa0576/Homepage_Split_IMG-2.jpg?w=1350&h=817&q=80&fm=avif&bg=transparent",
                isReversed: false,
                buttonText: "Explore Ocean Freight",
            },
            {
                subtitle: "LOGISTIX AIR FREIGHT",
                title: "Take flight with flexible speed",
                description:
                    "Expedite your shipments with speed and precision. Our tailored solutions, including charter services, optimize your air freight planning with live shipment updates and actionable reports – all while keeping your costs in check. Whether you have a few critical shipments that need space or you need to move pallets with speed, we'll deliver your goods where you need them, when you need them.",
                imageUrl:
                    "https://static.wixstatic.com/media/20910e_3fe323ab353245d78d943432c4190a35~mv2.jpg/v1/fill/w_980,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20910e_3fe323ab353245d78d943432c4190a35~mv2.jpg",
                isReversed: true,
                buttonText: "Explore Air Freight",
            },
            {
                subtitle: "LOGISTIX BUYER'S CONSOLIDATION",
                title: "Optimize your shipments and save on costs",
                description:
                    "Streamline your supply chain by consolidating multiple shipments into one. LOGISTIX's Buyer's Consolidation service helps reduce transit times and expenses by optimizing load planning and combining orders from different suppliers into a single, efficient shipment. Gain full visibility and control over your consolidated shipments, ensuring timely delivery and cost savings across your entire logistics network.",
                imageUrl:
                    "https://images.ctfassets.net/92fo1e671z6m/1JrxKkD0FAkFJ3JExvAsuB/e918aa53689c26f2bacb8526aa1d8cea/Buyers-Consolidation-IMG.jpg?w=1350&h=817&q=80&fm=avif&bg=transparent",
                isReversed: false,
                buttonText: "Explore Buyer's Consolidation",
            },
            {
                subtitle: "LOGISTIX BOOKING MANAGEMENT",
                title: "Take control of your bookings with ease",
                description:
                    "Simplify your ocean freight bookings with our intuitive platform. Gain real-time tracking, seamless document management, and flexible scheduling options, all in one place. Manage each shipment from start to finish, with detailed analytics that optimize routes and cut costs. LOGISTIX's Booking Management tool ensures full visibility and collaboration, empowering you to confidently streamline your logistics operations.",
                imageUrl:
                    "https://images.ctfassets.net/92fo1e671z6m/4SX5k2eG1UauOh4nUMJAdl/330f3dfecddd0f555460f1c82bf68cf1/Booking-Management-IMG.jpg?w=1350&h=817&q=80&fm=avif&bg=transparent",
                isReversed: true,
                buttonText: "Explore Booking Management",
            },
        ],
        []
    );

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8">
                {serviceData.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${
                            service.isReversed ? "md:flex-row-reverse" : ""
                        } gap-10 mb-16 md:mb-24 ${index === serviceData.length - 1 ? '' : 'pb-8'}`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                className="rounded-2xl shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-indigo-600 text-sm font-semibold mb-2 uppercase">
                                {service.subtitle}
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                                {service.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;