import React from "react";
import { FaPaintBrush, FaMobileAlt, FaSearch, FaBolt, FaShoppingCart } from "react-icons/fa";

const Benefits = () => {
    const benefits = [
        {
            icon: <FaPaintBrush size={40} className="text-blue-500" />,
            title: "Diseño personalizado",
            description: "Adaptado a la identidad de tu marca.",
        },
        {
            icon: <FaMobileAlt size={40} className="text-green-500" />,
            title: "Web responsiva",
            description: "Compatible con dispositivos móviles, tablets y escritorio.",
        },
        {
            icon: <FaSearch size={40} className="text-yellow-500" />,
            title: "Optimización SEO",
            description: "Ayuda a mejorar tu posicionamiento en buscadores.",
        },
        {
            icon: <FaBolt size={40} className="text-red-500" />,
            title: "Velocidad y rendimiento",
            description: "Sitios rápidos y eficientes.",
        },
        {
            icon: <FaShoppingCart size={40} className="text-purple-500" />,
            title: "Integraciones avanzadas",
            description:
                "Tiendas en línea, sistemas de reservas, formularios, y más.",
        },
    ];

    return (
        <section
            id="benefits"
            className="bg-gray-100 py-16 text-gray-900"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold mb-8">
                    ¿Por qué elegirnos para tu sitio web?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Beneficios */}
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
                        >
                            {/* Ícono */}
                            <div className="mb-4">{benefit.icon}</div>
                            {/* Título del beneficio */}
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            {/* Descripción */}
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
