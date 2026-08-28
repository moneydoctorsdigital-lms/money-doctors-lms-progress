import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <img
                        src="/images/money-doctors.png"
                        alt="Money Doctors Digital"
                        className="navbar-logo"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="navbar-links">
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
    <a href="#stories">Stories</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
</nav>

                {/* Desktop Actions */}
                <div className="navbar-actions">
                    <a
                        href="/login"
                        className="navbar-login"
                    >
                        Login
                    </a>

                    <a
                        href="/register"
                        className="navbar-register"
                    >
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

    <a href="/courses" onClick={closeMenu}>
        Courses
    </a>

    <a href="#stories" onClick={closeMenu}>
        Stories
    </a>

    <a href="#about" onClick={closeMenu}>
        About Us
    </a>

    <a href="#contact" onClick={closeMenu}>
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