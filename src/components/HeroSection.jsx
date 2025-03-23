import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Veera Enterprises</h1>
                <p className="text-xl mb-8">
                    Your trusted partner in resort and engineering supplies.
                </p>
                <a
                    href="/products"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100"
                >
                    Explore Products
                </a>
            </div>
        </section>
    );
};

export default HeroSection;