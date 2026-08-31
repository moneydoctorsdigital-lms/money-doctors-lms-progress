import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">

            {/* ==============================
                NEWSLETTER
            ============================== */}
            <div className="footer-container">

                <section className="newsletter-box">
                    <div className="newsletter-icon">✉</div>

                    <div className="newsletter-content">
                        <h2>Stay Updated</h2>
                        <p>
                            Subscribe to our newsletter and get the latest updates and tips.
                        </p>

                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button>Subscribe</button>
                        </div>

                        <span>We respect your privacy.</span>
                    </div>
                </section>


                {/* ==============================
                    CTA
                ============================== */}
                <section className="footer-cta">
                    <div className="cta-icon">🎓</div>

                    <div className="cta-content">
                        <h2>Ready to start your learning journey?</h2>
                        <p>
                            Join thousands of learners and start achieving your goals today.
                        </p>
                    </div>

                    <a href="#register" className="cta-button">
                        Get Started Now
                        <span>→</span>
                    </a>
                </section>

            </div>


            {/* ==============================
                MAIN FOOTER
            ============================== */}
            <div className="footer-main">

                <div className="footer-container footer-grid">

                    {/* BRAND */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                        <img
    src={`${import.meta.env.BASE_URL}images/money-doctors.png`}
    alt="Money Doctors Digital"
/>

                        </div>

                        <p>
                            A practical learning platform designed to help learners
                            build knowledge, confidence, and better financial habits.
                        </p>

                        <div className="social-links">
                            <a href="#facebook">f</a>
                            <a href="#instagram">◎</a>
                            <a href="#youtube">▶</a>
                        </div>
                    </div>


                    <div className="footer-column">
    <h3>Quick Links</h3>

    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/free-learning">Learn</a>
    <a href="/courses">Courses</a>
    <a href="/testimonials">Stories</a>
    <a href="/contact">Contact</a>
</div>


                    {/* RESOURCES */}
                    <div className="footer-column">
                        <h3>Resources</h3>

                        <a href="#courses">All Courses</a>
                        <a href="#programs">Learning Paths</a>
                        <a href="#faq">FAQ</a>
                        <a href="#support">Support Center</a>
                        <a href="#blog">Blog</a>
                    </div>


                    {/* COMPANY */}
                    <div className="footer-column">
                        <h3>Company</h3>

                        <a href="#about">About Us</a>
                        <a href="#careers">Careers</a>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>


                    {/* NEWSLETTER */}
                    <div className="footer-column footer-newsletter">
                        <h3>Newsletter</h3>

                        <p>
                            Subscribe to get the latest updates and learning tips.
                        </p>

                        <div className="footer-newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                            <button>Subscribe</button>
                        </div>

                        <span>We respect your privacy.</span>
                    </div>

                </div>
            </div>


            {/* ==============================
                COPYRIGHT
            ============================== */}
            <div className="footer-bottom">
                <div className="footer-container footer-bottom-inner">

                    <p>
                        © 2026 Money Doctors Digital. All rights reserved.
                    </p>

                    <p>
                        Web Developer:{" "}
                        <strong>Mark Darryl Lacerna</strong>
                    </p>

                </div>
            </div>

        </footer>
    );
}

export default Footer;