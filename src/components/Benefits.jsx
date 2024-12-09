import React, { useState } from "react";
import {
    FaPaintBrush,
    FaMobileAlt,
    FaSearch,
    FaBolt,
    FaShoppingCart,
    FaHeadset,
} from "react-icons/fa";

const Benefits = () => {
    const [showAll, setShowAll] = useState(false);

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
            description: "Tiendas en línea, sistemas de reservas, formularios, y más.",
        },
        {
            icon: <FaHeadset size={40} className="text-indigo-500" />,
            title: "Soporte continuo",
            description: "Asistencia técnica y actualizaciones periódicas.",
        },
    ];

    return (
        <section
            id="benefits"
            className="bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 py-20 text-gray-900"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Título */}
                <h2 className="text-slate-200 text-4xl font-bold mb-8">
                    ¿Por qué elegirnos para tu sitio web?
                </h2>

                {/* Tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        return (
                            <div
                                key={index}
                                className={`bg-blue-50 flex flex-col items-center text-center shadow-xl rounded-lg p-6 ${index >= 3
                                        ? (!showAll
                                            ? "hidden sm:flex"
                                            : "flex"          
                                        )
                                        : "flex"         
                                    }`}
                            >
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Botón Ver más solo en móviles */}
                <div className="mt-6 sm:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-300 transition duration-300"
                    >
                        {showAll ? "Ver menos" : "Ver más"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
