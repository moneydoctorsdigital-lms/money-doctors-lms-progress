import React from "react";
import { createRoot } from "react-dom/client";

import "../css/app.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatToExpect from "./components/WhatToExpect";
import ProgramsOverview from "./components/ProgramsOverview";
import StatsBar from "./components/StatsBar";
import TestimonialsBlog from "./components/TestimonialsBlog";
import Footer from "./components/Footer";
import Courses from "./components/Courses";

function App() {
    const path = window.location.pathname;

    if (path.endsWith("/courses") || path.endsWith("/courses/")) {
        return (
            <>
                <Navbar />
                <Courses />
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Hero />
            <WhatToExpect />
            <ProgramsOverview />
            <StatsBar />
            <TestimonialsBlog />
            <Footer />
        </>
    );
}

const root = document.createElement("div");
root.id = "app";

document.body.appendChild(root);

createRoot(root).render(<App />);