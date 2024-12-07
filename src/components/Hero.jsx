import React from "react";
import HeroImage from "../assets/images/Hero.svg"; // Importa la imagen Hero.svg

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
            className="bg-gradient-to-t from-blue-700 via-blue-800 to-blue-950 text-white min-h-screen py-20 flex items-center"
        >
            <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Contenedor de texto */}
                <div className="text-center lg:text-left mt-8 lg:mt-0 lg:w-1/2">
                    {/* Mensaje impactante */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-300 via-slate-200 to-white bg-clip-text text-transparent leading-tight mb-4">
                        Lleva tu presencia online al siguiente nivel.
                    </h1>
                    {/* Subtítulo */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-medium mb-6">
                        Diseños modernos, funcionalidad optimizada y resultados que generan impacto.
                    </p>
                    {/* Botones de CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#quote"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("quote");
                            }}
                            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-300 transition duration-300"
                        >
                            Solicita una cotización gratuita
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="border border-white text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-blue-500 transition duration-300"
                        >
                            Habla con un experto ahora
                        </a>
                    </div>
                </div>

                {/* Visual dinámico */}
                <div className="flex justify-center lg:justify-end lg:w-1/2">
                    <img
                        src={HeroImage}
                        alt="Ejemplos de sitios web"
                        className="w-full sm:w-full md:w-full lg:w-full max-w-full md:max-w-full lg:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
