import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        title: "Resort Supplies",
        description: "Wine & beer glasses, crockeries, cutleries, and more.",
    },
    {
        title: "Engineering Supplies",
        description: "HVAC, electrical supplies, plumbing supplies, and more.",
    },
    {
        title: "Generators & RO Plants",
        description: "Reliable power solutions and water purification systems.",
    },
    {
        title: "Electric Buggies",
        description: "Eco-friendly mobility solutions for resorts.",
    },
];

const ProductSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;