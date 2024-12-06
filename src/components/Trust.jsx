import React from "react";

const Trust = () => {
    const companies = [
        { name: "Empresa 1", logo: "/path-to-company1-logo.png" },
        { name: "Empresa 2", logo: "/path-to-company2-logo.png" },
        { name: "Empresa 3", logo: "/path-to-company3-logo.png" },
        { name: "Empresa 4", logo: "/path-to-company4-logo.png" },
        { name: "Empresa 5", logo: "/path-to-company5-logo.png" },
    ];

    const certifications = [
        { name: "WordPress", logo: "/path-to-wordpress-logo.png" },
        { name: "Shopify", logo: "/path-to-shopify-logo.png" },
        { name: "React", logo: "/path-to-react-logo.png" },
        { name: "Angular", logo: "/path-to-angular-logo.png" },
        { name: "Wix", logo: "/path-to-wix-logo.png" },
    ];

    return (
        <section id="trust" className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold mb-8">
                    Empresas que confían en nosotros
                </h2>

                {/* Logos de empresas */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                    {companies.map((company, index) => (
                        <img
                            key={index}
                            src={company.logo}
                            alt={company.name}
                            className="h-16 md:h-20 object-contain"
                        />
                    ))}
                </div>

                {/* Subtítulo de Certificaciones */}
                <h3 className="text-2xl font-semibold mb-6">
                    Certificaciones y herramientas que dominamos
                </h3>

                {/* Logos de certificaciones */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {certifications.map((cert, index) => (
                        <img
                            key={index}
                            src={cert.logo}
                            alt={cert.name}
                            className="h-16 md:h-20 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
