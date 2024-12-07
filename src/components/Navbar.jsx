// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isPrivacyPolicy = location.pathname === "/privacy-policy";

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [language, setLanguage] = useState("Español");
    const [scrolled, setScrolled] = useState(false);

    const navbarRef = useRef(null);

    useEffect(() => {
        if (isPrivacyPolicy) return;
        const sections = ["hero", "benefits", "features", "testimonials", "projects", "trust", "contact", "guarantees"];
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isPrivacyPolicy]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
                setDropdownOpen(false);
                setMobileDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={`fixed top-0 left-0 w-full bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur 
            ${scrolled ? 'bg-opacity-10' : 'bg-opacity-0'} 
            backdrop-saturate-100 backdrop-contrast-100 text-white z-50 transition-opacity duration-300`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <div className="bg-gradient-to-b from-slate-300 via-slate-200 to-white bg-clip-text text-transparent text-2xl font-bold">
                    Senda
                </div>
                {isPrivacyPolicy && (
                    <div className="flex space-x-2 text-sm">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.back();
                            }}
                            className="hover:text-slate-300 cursor-pointer bg-transparent border-none p-0"
                        >
                            Regresar
                        </button>
                        <span>/</span>
                        <span className="underline font-bold">Privacy Policy</span>
                    </div>
                )}
                {isPrivacyPolicy ? (
                    <>
                        <div className="hidden md:flex space-x-6 items-center">
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`flex items-center hover:text-slate-300 ${
                                        dropdownOpen ? "font-bold underline" : ""
                                    }`}
                                >
                                    Lenguaje
                                    <FaChevronDown className="ml-2" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 bg-slate-800 text-white rounded-lg shadow-lg md:w-40 w-auto">
                                        <button
                                            onClick={() => {
                                                setLanguage("Español");
                                                setDropdownOpen(false);
                                            }}
                                            className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                                alt="Mexico"
                                                className="w-5 h-5 mr-2"
                                            />
                                            Español
                                        </button>
                                        <button
                                            onClick={() => {
                                                setLanguage("Inglés");
                                                setDropdownOpen(false);
                                            }}
                                            className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                                alt="USA"
                                                className="w-5 h-5 mr-2"
                                            />
                                            Inglés
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-300 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={
                                            isOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="hidden md:flex space-x-6 items-center">
                            <a
                                href="#hero"
                                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "hero" ? "font-bold underline" : ""
                                }`}
                            >
                                Inicio
                            </a>
                            <a
                                href="#benefits"
                                onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "benefits" ? "font-bold underline" : ""
                                }`}
                            >
                                Beneficios
                            </a>
                            <a
                                href="#features"
                                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "features" ? "font-bold underline" : ""
                                }`}
                            >
                                Características
                            </a>
                            <a
                                href="#testimonials"
                                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "testimonials" ? "font-bold underline" : ""
                                }`}
                            >
                                Testimonios
                            </a>
                            <a
                                href="#projects"
                                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "projects" ? "font-bold underline" : ""
                                }`}
                            >
                                Proyectos
                            </a>
                            <a
                                href="#trust"
                                onClick={(e) => { e.preventDefault(); scrollToSection('trust'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "trust" ? "font-bold underline" : ""
                                }`}
                            >
                                Confianza
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "contact" ? "font-bold underline" : ""
                                }`}
                            >
                                Contacto
                            </a>
                            <a
                                href="#guarantees"
                                onClick={(e) => { e.preventDefault(); scrollToSection('guarantees'); }}
                                className={`hover:text-slate-300 ${
                                    activeSection === "guarantees" ? "font-bold underline" : ""
                                }`}
                            >
                                Garantías
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`flex items-center hover:text-slate-300 ${
                                        dropdownOpen ? "font-bold underline" : ""
                                    }`}
                                >
                                    Lenguaje
                                    <FaChevronDown className="ml-2" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 bg-slate-800 text-white rounded-lg shadow-lg md:w-40 w-auto">
                                        <button
                                            onClick={() => {
                                                setLanguage("Español");
                                                setDropdownOpen(false);
                                            }}
                                            className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                                alt="Mexico"
                                                className="w-5 h-5 mr-2"
                                            />
                                            Español
                                        </button>
                                        <button
                                            onClick={() => {
                                                setLanguage("Inglés");
                                                setDropdownOpen(false);
                                            }}
                                            className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                                alt="USA"
                                                className="w-5 h-5 mr-2"
                                            />
                                            Inglés
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-300 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={
                                            isOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </>
                )}
            </div>

            {isPrivacyPolicy && isOpen && (
                <div className="md:hidden">
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="block px-4 py-2 hover:bg-slate-600 flex items-center justify-between w-full"
                        >
                            Lenguaje
                            <FaChevronDown className="ml-2" />
                        </button>
                        {mobileDropdownOpen && (
                            <div className="text-white rounded-lg">
                                <button
                                    onClick={() => {
                                        setLanguage("Español");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Español
                                </button>
                                <button
                                    onClick={() => {
                                        setLanguage("Inglés");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Inglés
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!isPrivacyPolicy && isOpen && (
                <div className="md:hidden">
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "hero" ? "font-bold underline" : ""
                        }`}
                    >
                        Inicio
                    </a>
                    <a
                        href="#benefits"
                        onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "benefits" ? "font-bold underline" : ""
                        }`}
                    >
                        Beneficios
                    </a>
                    <a
                        href="#features"
                        onClick={(e) => { e.preventDefault(); scrollToSection('features'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "features" ? "font-bold underline" : ""
                        }`}
                    >
                        Características
                    </a>
                    <a
                        href="#testimonials"
                        onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "testimonials" ? "font-bold underline" : ""
                        }`}
                    >
                        Testimonios
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "projects" ? "font-bold underline" : ""
                        }`}
                    >
                        Proyectos
                    </a>
                    <a
                        href="#trust"
                        onClick={(e) => { e.preventDefault(); scrollToSection('trust'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "trust" ? "font-bold underline" : ""
                        }`}
                    >
                        Confianza
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "contact" ? "font-bold underline" : ""
                        }`}
                    >
                        Contacto
                    </a>
                    <a
                        href="#guarantees"
                        onClick={(e) => { e.preventDefault(); scrollToSection('guarantees'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "guarantees" ? "font-bold underline" : ""
                        }`}
                    >
                        Garantías
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="block px-4 py-2 hover:bg-slate-600 flex items-center justify-between w-full"
                        >
                            Lenguaje
                            <FaChevronDown className="ml-2" />
                        </button>
                        {mobileDropdownOpen && (
                            <div className="text-white rounded-lg">
                                <button
                                    onClick={() => {
                                        setLanguage("Español");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Español
                                </button>
                                <button
                                    onClick={() => {
                                        setLanguage("Inglés");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Inglés
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
