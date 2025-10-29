import { useState } from 'react';

const officesData = [
    // Initial 8 offices
    {
        city: 'Amsterdam',
        address: 'Nieuwezijds Voorburgwal 223, 1012 RL Amsterdam',
        country: 'the Netherlands',
    },
    {
        city: 'Barcelona',
        address: 'Carrer de Can Rabia, 3-5th Floor, 08017 Barcelona',
        country: 'Spain',
    },
    {
        city: 'Copenhagen',
        address: 'Spaces Vesterbrogade, 170 Copenhagen V',
        country: 'Denmark',
    },
    {
        city: 'Frankfurt',
        address: 'Geb. 579 Cargo City Süd, im 2. OG, Gebäudeteil C (Raum 2.059-2.062), 60549',
        country: 'Germany',
    },
    {
        city: 'Hamburg',
        address: 'Gerhofstraße 1-3 20354',
        country: 'Germany',
    },
    {
        city: 'London',
        address: '65-71 Bermondsey Street, SE1 3XF',
        country: 'United Kingdom',
    },
    {
        city: 'Manchester',
        address: 'Monmouth Spring Gardens 19 Spring Gardens M2 1FB',
        country: 'United Kingdom',
    },
    {
        city: 'Milan',
        address: 'Corso Europa 15, 20122 Milano MI',
        country: 'Italy',
    },
    // Additional 8 placeholder offices (for "Load More" demo)
    {
        city: 'Paris',
        address: '123 Rue de la Paix, 75002',
        country: 'France',
    },
    {
        city: 'Berlin',
        address: 'Unter den Linden 1, 10117',
        country: 'Germany',
    },
    {
        city: 'Madrid',
        address: 'Gran Vía 28, 28013',
        country: 'Spain',
    },
    {
        city: 'Stockholm',
        address: 'Hamngatan 10, 111 47',
        country: 'Sweden',
    },
    {
        city: 'Vienna',
        address: 'Kärntner Str. 1, 1010',
        country: 'Austria',
    },
    {
        city: 'Warsaw',
        address: 'ul. Nowy Świat 15, 00-001',
        country: 'Poland',
    },
    {
        city: 'Prague',
        address: 'Václavské nám. 1, 110 00',
        country: 'Czech Republic',
    },
    {
        city: 'Brussels',
        address: 'Rue de la Loi 200, 1040',
        country: 'Belgium',
    },
];

const OfficesSection = () => {
    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 8, officesData.length));
    };

    const visibleOffices = officesData.slice(0, visibleCount);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-black text-center mb-12">Our Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {visibleOffices.map((office, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 text-gray-900">
                            <h3 className="text-lg font-semibold mb-2 text-black">{office.city}</h3>
                            <p className="text-sm mb-2 text-gray-700">{office.address}</p>
                            <p className="text-sm text-gray-700">{office.country}</p>
                        </div>
                    ))}
                </div>
                {visibleCount < officesData.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OfficesSection;