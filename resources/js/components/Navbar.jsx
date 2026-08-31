import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const closeMenu = () => {
        setMenuOpen(false);
        setMobileDropdown(null);
    };

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown(
            mobileDropdown === menu ? null : menu
        );
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a
                    href="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}images/money-doctors.png`}
                        alt="Money Doctors Digital"
                        className="navbar-logo"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="navbar-links">

                    <a href="/">Home</a>

                    {/* About Us */}
                    <div className="navbar-dropdown">
                        <button
                            type="button"
                            className="navbar-dropdown-btn"
                        >
                            About Us
                            <span className="navbar-dropdown-arrow">⌄</span>
                        </button>

                        <div className="navbar-dropdown-menu">
                            <a href="/about">Our Story</a>
                            <a href="/mission-vision">Mission &amp; Vision</a>
                            <a href="/our-approach">Our Approach</a>
                            <a href="/our-team">Our Team</a>
                            <a href="/why-choose-us">Why Choose Us</a>
                        </div>
                    </div>

                    {/* Learn */}
                    <div className="navbar-dropdown">
                        <button
                            type="button"
                            className="navbar-dropdown-btn"
                        >
                            Learn
                            <span className="navbar-dropdown-arrow">⌄</span>
                        </button>

                        <div className="navbar-dropdown-menu">
                            <a href="/free-learning">Free Learning</a>
                            <a href="/financial-basics">Financial Basics</a>
                            <a href="/money-management">Money Management</a>
                            <a href="/saving-budgeting">Saving &amp; Budgeting</a>
                            <a href="/financial-planning">Financial Planning</a>
                            <a href="/financial-goals">Financial Goals</a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="navbar-dropdown">
                        <button
                            type="button"
                            className="navbar-dropdown-btn"
                        >
                            Courses
                            <span className="navbar-dropdown-arrow">⌄</span>
                        </button>

                        <div className="navbar-dropdown-menu">
                            <a href="/courses">All Courses</a>
                            <a href="/programs">Programs</a>
                            <a href="/recommended-courses">Recommended Courses</a>
                            <a href="/learning-paths">Learning Paths</a>
                            <a href="/one-on-one-coaching">1-on-1 Coaching</a>
                        </div>
                    </div>

                    {/* Stories */}
                    <div className="navbar-dropdown">
                        <button
                            type="button"
                            className="navbar-dropdown-btn"
                        >
                            Stories
                            <span className="navbar-dropdown-arrow">⌄</span>
                        </button>

                        <div className="navbar-dropdown-menu">
                            <a href="/testimonials">Testimonials</a>
                            <a href="/success-stories">Success Stories</a>
                            <a href="/learner-achievements">Learner Achievements</a>
                            <a href="/featured-stories">Featured Stories</a>
                        </div>
                    </div>

                    <a href="/contact">Contact</a>
                </nav>

                {/* Desktop Actions */}
                <div className="navbar-actions">
                    <a href="/login" className="navbar-login">
                        Login
                    </a>

                    <a href="/register" className="navbar-register">
                        Register
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <nav className="mobile-nav">

                        <a href="/" onClick={closeMenu}>
                            Home
                        </a>

                        {/* Mobile About Us */}
                        <div className="mobile-dropdown">
                            <button
                                type="button"
                                className="mobile-dropdown-btn"
                                onClick={() => toggleMobileDropdown("about")}
                            >
                                <span>About Us</span>
                                <span
                                    className={
                                        mobileDropdown === "about"
                                            ? "mobile-arrow rotate"
                                            : "mobile-arrow"
                                    }
                                >
                                    ⌄
                                </span>
                            </button>

                            {mobileDropdown === "about" && (
                                <div className="mobile-submenu">
                                    <a href="/about" onClick={closeMenu}>Our Story</a>
                                    <a href="/mission-vision" onClick={closeMenu}>Mission &amp; Vision</a>
                                    <a href="/our-approach" onClick={closeMenu}>Our Approach</a>
                                    <a href="/our-team" onClick={closeMenu}>Our Team</a>
                                    <a href="/why-choose-us" onClick={closeMenu}>Why Choose Us</a>
                                </div>
                            )}
                        </div>

                        {/* Mobile Learn */}
                        <div className="mobile-dropdown">
                            <button
                                type="button"
                                className="mobile-dropdown-btn"
                                onClick={() => toggleMobileDropdown("learn")}
                            >
                                <span>Learn</span>
                                <span
                                    className={
                                        mobileDropdown === "learn"
                                            ? "mobile-arrow rotate"
                                            : "mobile-arrow"
                                    }
                                >
                                    ⌄
                                </span>
                            </button>

                            {mobileDropdown === "learn" && (
                                <div className="mobile-submenu">
                                    <a href="/free-learning" onClick={closeMenu}>Free Learning</a>
                                    <a href="/financial-basics" onClick={closeMenu}>Financial Basics</a>
                                    <a href="/money-management" onClick={closeMenu}>Money Management</a>
                                    <a href="/saving-budgeting" onClick={closeMenu}>Saving &amp; Budgeting</a>
                                    <a href="/financial-planning" onClick={closeMenu}>Financial Planning</a>
                                    <a href="/financial-goals" onClick={closeMenu}>Financial Goals</a>
                                </div>
                            )}
                        </div>

                        {/* Mobile Courses */}
                        <div className="mobile-dropdown">
                            <button
                                type="button"
                                className="mobile-dropdown-btn"
                                onClick={() => toggleMobileDropdown("courses")}
                            >
                                <span>Courses</span>
                                <span
                                    className={
                                        mobileDropdown === "courses"
                                            ? "mobile-arrow rotate"
                                            : "mobile-arrow"
                                    }
                                >
                                    ⌄
                                </span>
                            </button>

                            {mobileDropdown === "courses" && (
                                <div className="mobile-submenu">
                                    <a href="/courses" onClick={closeMenu}>All Courses</a>
                                    <a href="/programs" onClick={closeMenu}>Programs</a>
                                    <a href="/recommended-courses" onClick={closeMenu}>Recommended Courses</a>
                                    <a href="/learning-paths" onClick={closeMenu}>Learning Paths</a>
                                    <a href="/one-on-one-coaching" onClick={closeMenu}>1-on-1 Coaching</a>
                                </div>
                            )}
                        </div>

                        {/* Mobile Stories */}
                        <div className="mobile-dropdown">
                            <button
                                type="button"
                                className="mobile-dropdown-btn"
                                onClick={() => toggleMobileDropdown("stories")}
                            >
                                <span>Stories</span>
                                <span
                                    className={
                                        mobileDropdown === "stories"
                                            ? "mobile-arrow rotate"
                                            : "mobile-arrow"
                                    }
                                >
                                    ⌄
                                </span>
                            </button>

                            {mobileDropdown === "stories" && (
                                <div className="mobile-submenu">
                                    <a href="/testimonials" onClick={closeMenu}>Testimonials</a>
                                    <a href="/success-stories" onClick={closeMenu}>Success Stories</a>
                                    <a href="/learner-achievements" onClick={closeMenu}>Learner Achievements</a>
                                    <a href="/featured-stories" onClick={closeMenu}>Featured Stories</a>
                                </div>
                            )}
                        </div>

                        <a href="/contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </nav>

                    <div className="mobile-actions">
                        <a
                            href="/login"
                            className="mobile-login"
                            onClick={closeMenu}
                        >
                            Login
                        </a>

                        <a
                            href="/register"
                            className="mobile-register"
                            onClick={closeMenu}
                        >
                            Register
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
