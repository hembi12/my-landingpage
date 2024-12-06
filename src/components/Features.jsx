import React from "react";
import { FaPaintBrush, FaCode, FaShoppingCart, FaTools, FaCogs } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaPaintBrush size={40} className="text-blue-500" />,
            title: "Diseño UI/UX profesional",
            description: "Garantizamos una experiencia de usuario excepcional con diseños atractivos y funcionales.",
        },
        {
            icon: <FaCode size={40} className="text-green-500" />,
            title: "Desarrollo Full Stack",
            description: "Desde el diseño inicial hasta la implementación en servidores, cubrimos todo el proceso.",
        },
        {
            icon: <FaShoppingCart size={40} className="text-purple-500" />,
            title: "E-commerce",
            description: "Soluciones personalizadas para tiendas en línea con funcionalidades avanzadas.",
        },
        {
            icon: <FaTools size={40} className="text-yellow-500" />,
            title: "Mantenimiento y soporte técnico",
            description: "Cuidado continuo para mantener tu sitio actualizado y seguro.",
        },
        {
            icon: <FaCogs size={40} className="text-red-500" />,
            title: "Integración con herramientas modernas",
            description: "Conectamos tu sitio con CRM, sistemas de pagos, análisis web, y más.",
        },
    ];

    return (
        <section id="features" className="bg-white py-16 text-gray-900">
            <div className="container mx-auto px-4">
                {/* Título */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    ¿Qué incluye nuestro servicio de creación de páginas web?
                </h2>
                {/* Lista de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-gray-100 shadow-md rounded-lg p-6"
                        >
                            {/* Ícono */}
                            <div className="mb-4">{feature.icon}</div>
                            {/* Título */}
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            {/* Descripción */}
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* Visual: Flujo de creación web */}
                <div className="flex justify-center">
                    <img
                        src="/path-to-your-diagram.png" // Reemplaza con la ruta de tu gráfico o diagrama
                        alt="Flujo de creación web"
                        className="w-full max-w-4xl rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
