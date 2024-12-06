// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Benefits = lazy(() => import("./components/Benefits"));
const Features = lazy(() => import("./components/Features"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Projects = lazy(() => import("./components/Projects"));
const Trust = lazy(() => import("./components/Trust"));
const Contact = lazy(() => import("./components/Contact"));
const Guarantees = lazy(() => import("./components/Guarantees"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Benefits />
                <Features />
                <Testimonials />
                <Projects />
                <Trust />
                <Contact />
                <Guarantees />
              </>
            } 
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
