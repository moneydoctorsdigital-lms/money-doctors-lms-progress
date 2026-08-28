import React from "react";
import "./ProgramsOverview.css";

function ProgramsOverview() {
    const programs = [
        {
            title: "Financial Education",
            text: "Build strong foundations in money management, budgeting, and financial decision-making.",
            image: "/images/Financial-Education.jpg",
        },
        {
            title: "Personal Finance",
            text: "Develop practical skills for managing income, expenses, savings, and financial goals.",
            image: "/images/Personal-Finance.jpg",
        },
        {
            title: "Investment & Wealth",
            text: "Learn the fundamentals of investing, risk management, and long-term wealth building.",
            image: "/images/Investment-Wealth.jpg",
        },
        {
            title: "Professional Growth",
            text: "Strengthen your skills, confidence, and knowledge for personal and professional growth.",
            image: "/images/Professional-Growth.jpg",
        },
    ];

    const benefits = [
        {
            title: "Quality Education",
            text: "Practical learning content designed to support real growth.",
        },
        {
            title: "Easy to Use",
            text: "A simple and learner-friendly experience across devices.",
        },
        {
            title: "Secure & Reliable",
            text: "Your account and learning information are handled securely.",
        },
        {
            title: "Personalized Learning",
            text: "Learning options can be aligned with your goals and interests.",
        },
    ];

    const steps = [
        {
            number: "1",
            icon: "♙",
            title: "Create Account",
            text: "Sign up and create your learner profile.",
        },
        {
            number: "2",
            icon: "▣",
            title: "Choose a Course",
            text: "Browse courses that fit your goals.",
        },
        {
            number: "3",
            icon: "▶",
            title: "Start Learning",
            text: "Access lessons and learning resources.",
        },
        {
            number: "4",
            icon: "♜",
            title: "Achieve Goals",
            text: "Track progress and complete your learning journey.",
        },
    ];

    return (
        <section className="programs-overview">
            <div className="programs-container">

                {/* =========================
                    EXPLORE OUR PROGRAMS
                ========================= */}
                <div className="programs-section">

                    <div className="programs-heading">
                        <div>
                            <h2>Explore Our Programs</h2>
                            <p>
                                Discover learning paths designed to help you grow
                                your knowledge and confidence.
                            </p>
                        </div>

                        <a href="#courses">
                            View all programs →
                        </a>
                    </div>

                    <div className="program-grid">
                        {programs.map((program, index) => (
                            <article
                                className="program-card"
                                key={index}
                            >

                                {/* PROGRAM IMAGE */}
                                <div className="program-image">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                    />
                                </div>

                                {/* PROGRAM CONTENT */}
                                <div className="program-content">
                                    <h3>{program.title}</h3>

                                    <p>{program.text}</p>

                                    <a href="#courses">
                                        Learn More →
                                    </a>
                                </div>

                            </article>
                        ))}
                    </div>

                </div>

                {/* =========================
                    LOWER CONTENT
                ========================= */}
                <div className="lower-overview">

                    {/* WHY CHOOSE */}
                    <div className="why-section">

                        <div className="section-heading-left">
                            <h2>
                                Why Choose
                                <br />
                                Money Doctors Digital?
                            </h2>

                            <p>
                                Learn with purpose. Grow with confidence.
                                Build practical knowledge through structured
                                learning, relevant courses, and a guided
                                learning experience.
                            </p>
                        </div>

                        <div className="benefit-list">
                            {benefits.map((benefit, index) => (
                                <div
                                    className="benefit-item"
                                    key={index}
                                >
                                    <div className="benefit-check">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* HOW IT WORKS */}
                    <div className="how-section">

                        <div className="how-heading">
                            <h2>How It Works</h2>

                            <p>
                                Start your learning journey in 4 simple steps.
                            </p>
                        </div>

                        <div className="steps">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>

                                    <div className="step">

                                        <div className="step-number">
                                            {step.number}
                                        </div>

                                        <div className="step-icon">
                                            {step.icon}
                                        </div>

                                        <h3>{step.title}</h3>

                                        <p>{step.text}</p>

                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="step-arrow">
                                            →
                                        </div>
                                    )}

                                </React.Fragment>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ProgramsOverview;