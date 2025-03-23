import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">Veera Enterprises</p>
                <p className="mt-2">
                    Dal ji gada Rajput Mohalla, Garhi, Uplapada, Banswara, Rajasthan, 327024
                </p>
                <p>PH: +91 8209910934 | MAIL: veeraenterprises51@gmail.com</p>
                <p>GSTIN: 08FDUPS7791J1Z7</p>
                <p>
                    <a
                        href="https://veeraenterprises.com/"
                        className="text-blue-400 hover:text-blue-200"
                    >
                        https://veeraenterprises.com/
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;