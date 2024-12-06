import React from "react";
import { FaClock, FaRedo, FaHandsHelping } from "react-icons/fa";

const Guarantees = () => {
    const guarantees = [
        {
            icon: <FaClock size={40} className="text-blue-500" />,
            title: "Entrega puntual o te devolvemos tu dinero",
            description:
                "Nos comprometemos a entregar tu proyecto en el tiempo acordado. Si no cumplimos, recibirás un reembolso.",
        },
        {
            icon: <FaRedo size={40} className="text-green-500" />,
            title: "Revisión gratuita durante los primeros 30 días",
            description:
                "Realizamos ajustes y correcciones sin costo adicional dentro de los primeros 30 días después de la entrega.",
        },
        {
            icon: <FaHandsHelping size={40} className="text-purple-500" />,
            title: "Asesoramiento completo",
            description:
                "Te guiamos y asesoramos en futuros ajustes y actualizaciones para asegurar el éxito de tu sitio web.",
        },
    ];

    return (
        <section id="guarantees" className="bg-gray-100 py-16 text-gray-900">
            <div className="container mx-auto px-4 text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold mb-8">
                    Trabajamos con un enfoque 100% centrado en resultados.
                </h2>

                {/* Lista de Garantías */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guarantees.map((guarantee, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
                        >
                            {/* Ícono */}
                            <div className="mb-4">{guarantee.icon}</div>
                            {/* Título */}
                            <h3 className="text-xl font-semibold mb-2">
                                {guarantee.title}
                            </h3>
                            {/* Descripción */}
                            <p className="text-gray-600">{guarantee.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guarantees;
