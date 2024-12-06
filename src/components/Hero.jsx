import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
    // Función para hacer scroll suave a una sección
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white h-screen flex flex-col justify-center items-center relative"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Mensaje impactante */}
                <h1 className="bg-gradient-to-b from-slate-500 via-slate-300 to-white bg-clip-text text-transparent text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight">
                    Transforma tu presencia online con un sitio web profesional.
                </h1>
                {/* Subtítulo */}
                <p className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-medium mb-6">
                    Diseños modernos, funcionalidad optimizada y resultados que generan impacto.
                </p>
                {/* Botones de CTA */}
                <div className="mt-6 flex justify-center space-x-4">
                    <a
                        href="#quote"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("quote");
                        }}
                        className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                    >
                        Solicita una cotización gratuita
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                        className="border border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-500 transition duration-300"
                    >
                        Habla con un experto ahora
                    </a>
                </div>
            </div>
            {/* Visual dinámico */}
            <div className="mt-10 flex justify-center">
                <img
                    src="/path-to-your-image.jpg" // Cambia esta ruta a la imagen o video dinámico que desees usar
                    alt="Ejemplos de sitios web"
                    className="w-full max-w-4xl rounded-lg shadow-lg"
                />
            </div>
            {/* Icono de Chevron */}
            <div className="absolute bottom-20 animate-bounce">
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                    }}
                    className="text-slate-200 hover:text-slate-400 transition duration-300"
                >
                    <FaChevronDown size={24} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
