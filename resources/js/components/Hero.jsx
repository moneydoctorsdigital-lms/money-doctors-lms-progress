import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-bg-circle circle-1"></div>
            <div className="hero-bg-circle circle-2"></div>
            <div className="hero-bg-circle circle-3"></div>

            <div className="hero-container">

                {/* LEFT SIDE */}
                <div className="hero-content">

                    <div className="hero-badge">
                        START YOUR JOURNEY TODAY
                        <span>›</span>
                    </div>

                    <h1>
                        GUSTO MO BANG
                        <br />
                        MAKAPAG-IPON
                        <br />
                        <span>NANG HINDI MO NAMAMALAYAN?</span>
                    </h1>

                    <p className="hero-subtitle">
                        ANO, TARA? SIMULAN NA NATIN.
                    </p>

                    <div className="hero-buttons">

                        <a href="#register" className="hero-btn primary">
                            SIMULAN NATIN
                            <span>➜</span>
                        </a>

                        <a href="#courses" className="hero-btn secondary">
                            <span className="play-icon">▶</span>
                            MANOOD MUNA
                        </a>

                    </div>

                    <div className="hero-benefits">

                        <div className="benefit-item">
                            <div className="benefit-icon">✦</div>

                            <div>
                                <strong>Practical Learning</strong>
                                <small>Real-life skills you can apply</small>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">◎</div>

                            <div>
                                <strong>Trusted by Thousands</strong>
                                <small>Learners nationwide</small>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">✓</div>

                            <div>
                                <strong>Secure &amp; Reliable</strong>
                                <small>Your data is safe with us</small>
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="hero-visual">

                    <img
                        src="/images/lady.laptop.png"
                        alt="Money Doctors Digital learner"
                        className="hero-woman"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;