import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
        </div>
    );
};

export default ProductCard;