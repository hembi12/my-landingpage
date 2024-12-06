import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "El equipo entendió perfectamente nuestra visión y creó un sitio increíblemente funcional.",
            author: "Juan Pérez",
            role: "CEO de Innovatech",
            image: "/path-to-client-photo1.jpg", // Reemplaza con la ruta de la foto
        },
        {
            quote:
                "Desde que lanzamos la nueva web, nuestras ventas han aumentado un 40%.",
            author: "María López",
            role: "Gerente de Marketing en EcoShop",
            image: "/path-to-client-photo2.jpg", // Reemplaza con la ruta de la foto
        },
        {
            quote:
                "Nuestra experiencia fue increíble, el diseño y la funcionalidad superaron nuestras expectativas.",
            author: "Carlos Sánchez",
            role: "Propietario de Café Bliss",
            image: "/path-to-client-photo3.jpg", // Reemplaza con la ruta de la foto
        },
    ];

    return (
        <section id="testimonials" className="bg-gray-50 py-16 text-gray-900">
            <div className="container mx-auto px-4">
                {/* Título */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    Clientes felices con nuestros sitios web.
                </h2>
                {/* Testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            {/* Imagen del cliente */}
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                            />
                            {/* Cita */}
                            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                            {/* Autor y rol */}
                            <div>
                                <h3 className="text-lg font-bold">{testimonial.author}</h3>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
