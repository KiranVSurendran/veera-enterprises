import React from "react";

const Contact = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="text-center">
                    <p className="text-lg text-gray-700">
                        VEERA ENTERPRISES
                        <br />
                        Dal ji gada Rajput Mohalla, Garhi, Uplapada, Banswara, Rajasthan,
                        327024
                        <br />
                        PH: +91 8209910934 | MAIL: veeraenterprises51@gmail.com
                        <br />
                        GSTIN: 08FDUPS7791J1Z7
                        <br />
                        <a
                            href="https://veeraenterprises.com/"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            https://veeraenterprises.com/
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;