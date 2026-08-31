import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const [chatOpen, setChatOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setMobileDropdown(null);
    };

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown(
            mobileDropdown === menu ? null : menu
        );
    };

    const aboutItems = [
        {
            title: "Our Story",
            text: "Discover how Money Doctors Digital began and what drives us.",
            icon: "▱",
            href: "/about",
        },
        {
            title: "Mission & Vision",
            text: "Explore our purpose, vision for the future, and core values.",
            icon: "◎",
            href: "/mission-vision",
        },
        {
            title: "Our Approach",
            text: "Learn how we create practical and engaging learning experiences.",
            icon: "✦",
            href: "/our-approach",
        },
        {
            title: "Our Team",
            text: "Meet the dedicated team behind Money Doctors Digital.",
            icon: "♧",
            href: "/our-team",
        },
    ];

    const learnItems = [
        {
            title: "Free Learning",
            text: "Explore practical financial lessons and useful learning resources.",
            icon: "✦",
            href: "/free-learning",
        },
        {
            title: "Financial Basics",
            text: "Build a strong foundation in personal finance and money management.",
            icon: "◎",
            href: "/financial-basics",
        },
        {
            title: "Money Management",
            text: "Learn practical ways to manage your income, expenses, and money.",
            icon: "▱",
            href: "/money-management",
        },
        {
            title: "Saving & Budgeting",
            text: "Develop smarter saving habits and create effective budgets.",
            icon: "◇",
            href: "/saving-budgeting",
        },
        {
            title: "Financial Planning",
            text: "Understand how to plan your finances and work toward your goals.",
            icon: "⌁",
            href: "/financial-planning",
        },
        {
            title: "Financial Goals",
            text: "Turn your financial goals into clear and achievable action plans.",
            icon: "◎",
            href: "/financial-goals",
        },
    ];

    const courseItems = [
        {
            title: "All Courses",
            text: "Browse the complete collection of Money Doctors Digital courses.",
            icon: "▱",
            href: "/courses",
        },
        {
            title: "Programs",
            text: "Explore structured learning programs designed around your goals.",
            icon: "✦",
            href: "/programs",
        },
        {
            title: "Recommended Courses",
            text: "Discover courses selected to match your learning needs.",
            icon: "☆",
            href: "/recommended-courses",
        },
        {
            title: "Learning Paths",
            text: "Follow guided learning paths from fundamentals to advanced topics.",
            icon: "⌁",
            href: "/learning-paths",
        },
        {
            title: "1-on-1 Coaching",
            text: "Get personalized guidance to help you move forward with confidence.",
            icon: "♧",
            href: "/one-on-one-coaching",
        },
    ];

    const storyItems = [
        {
            title: "Testimonials",
            text: "Hear what learners have to say about their experience.",
            icon: "☆",
            href: "/testimonials",
        },
        {
            title: "Success Stories",
            text: "Discover real stories of learners reaching their financial goals.",
            icon: "✦",
            href: "/success-stories",
        },
        {
            title: "Learner Achievements",
            text: "Celebrate milestones, progress, and meaningful learner achievements.",
            icon: "◎",
            href: "/learner-achievements",
        },
        {
            title: "Featured Stories",
            text: "Explore featured stories, insights, and inspiring experiences.",
            icon: "▱",
            href: "/featured-stories",
        },
    ];

    const megaMenus = {
        about: {
            eyebrow: "ABOUT MONEY DOCTORS",
            title: (
                <>
                    Learn more
                    <br />
                    about our
                    <br />
                    mission and
                    <br />
                    the people
                    <br />
                    behind it.
                </>
            ),
            description:
                "Helping you build financial confidence through practical education.",
            items: aboutItems,
        },

        learn: {
            eyebrow: "LEARN WITH MONEY DOCTORS",
            title: (
                <>
                    Build your
                    <br />
                    financial
                    <br />
                    knowledge
                    <br />
                    step by step.
                </>
            ),
            description:
                "Practical lessons designed to help you understand and manage your money.",
            items: learnItems,
        },

        courses: {
            eyebrow: "MONEY DOCTORS COURSES",
            title: (
                <>
                    Find the
                    <br />
                    right course
                    <br />
                    for your
                    <br />
                    financial goals.
                </>
            ),
            description:
                "Explore courses and programs designed for real-world financial growth.",
            items: courseItems,
        },

        stories: {
            eyebrow: "MONEY DOCTORS STORIES",
            title: (
                <>
                    Learn from
                    <br />
                    real people
                    <br />
                    and real
                    <br />
                    experiences.
                </>
            ),
            description:
                "Discover stories, achievements, and experiences from our learning community.",
            items: storyItems,
        },
    };

    const renderMegaMenu = (type) => {
        const menu = megaMenus[type];

        return (
            <div className="mega-menu">
                <div className="mega-intro">
                    <span className="mega-eyebrow">
                        {menu.eyebrow}
                    </span>

                    <h3>{menu.title}</h3>

                    <span className="mega-line"></span>

                    <p>{menu.description}</p>

                    <div className="mega-target" aria-hidden="true">
                        <span>➤</span>
                    </div>
                </div>

                <div className="mega-content">
                    <div
                        className={`mega-grid ${
                            menu.items.length <= 4
                                ? "mega-grid-four"
                                : ""
                        }`}
                    >
                        {menu.items.map((item) => (
                            <a
                                className="mega-card"
                                href={item.href}
                                key={item.title}
                            >
                                <span className="mega-icon">
                                    {item.icon}
                                </span>

                                <span className="mega-card-copy">
                                    <strong>{item.title}</strong>
                                    <small>{item.text}</small>
                                </span>

                                <span className="mega-arrow">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="mega-footer">
                        <div className="mega-footer-copy">
                            <span className="mega-footer-icon">
                                ☆
                            </span>

                            <span>
                                <strong>
                                    Ready to start your journey?
                                </strong>

                                <small>
                                    Join learners building a better
                                    financial future.
                                </small>
                            </span>
                        </div>

                        <a
                            href="/courses"
                            className="mega-cta"
                        >
                            Explore Courses
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">

                    {/* LOGO */}
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

                    {/* DESKTOP NAV */}
                    <nav className="navbar-links">

                        {/* HOME */}
                        <a
                            className="nav-link"
                            href="/"
                        >
                            Home
                        </a>

                        {/* ABOUT */}
                        <div className="nav-dropdown">
                            <button
                                type="button"
                                className="nav-dropdown-btn"
                            >
                                <span>About Us</span>
                                <span
                                    className="dropdown-chevron"
                                    aria-hidden="true"
                                ></span>
                            </button>

                            {renderMegaMenu("about")}
                        </div>

                        {/* LEARN */}
                        <div className="nav-dropdown">
                            <button
                                type="button"
                                className="nav-dropdown-btn"
                            >
                                <span>Learn</span>
                                <span
                                    className="dropdown-chevron"
                                    aria-hidden="true"
                                ></span>
                            </button>

                            {renderMegaMenu("learn")}
                        </div>

                        {/* COURSES */}
                        <div className="nav-dropdown">
                            <button
                                type="button"
                                className="nav-dropdown-btn"
                            >
                                <span>Courses</span>
                                <span
                                    className="dropdown-chevron"
                                    aria-hidden="true"
                                ></span>
                            </button>

                            {renderMegaMenu("courses")}
                        </div>

                        {/* STORIES */}
                        <div className="nav-dropdown">
                            <button
                                type="button"
                                className="nav-dropdown-btn"
                            >
                                <span>Stories</span>
                                <span
                                    className="dropdown-chevron"
                                    aria-hidden="true"
                                ></span>
                            </button>

                            {renderMegaMenu("stories")}
                        </div>

                        {/* CONTACT */}
                        <a
                            className="nav-link"
                            href="/contact"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* ACTIONS */}
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

                    {/* MOBILE BUTTON */}
                    <button
                        type="button"
                        className={`menu-toggle ${
                            menuOpen ? "open" : ""
                        }`}
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="mobile-menu">
                        <nav className="mobile-nav">

                            <a
                                href="/"
                                onClick={closeMenu}
                            >
                                Home
                            </a>

                            {[
                                [
                                    "about",
                                    "About Us",
                                    aboutItems.map(
                                        (item) => [
                                            item.title,
                                            item.href,
                                        ]
                                    ),
                                ],
                                [
                                    "learn",
                                    "Learn",
                                    learnItems.map(
                                        (item) => [
                                            item.title,
                                            item.href,
                                        ]
                                    ),
                                ],
                                [
                                    "courses",
                                    "Courses",
                                    courseItems.map(
                                        (item) => [
                                            item.title,
                                            item.href,
                                        ]
                                    ),
                                ],
                                [
                                    "stories",
                                    "Stories",
                                    storyItems.map(
                                        (item) => [
                                            item.title,
                                            item.href,
                                        ]
                                    ),
                                ],
                            ].map(
                                ([key, label, items]) => (
                                    <div
                                        className="mobile-dropdown"
                                        key={key}
                                    >
                                        <button
                                            type="button"
                                            className="mobile-dropdown-btn"
                                            onClick={() =>
                                                toggleMobileDropdown(
                                                    key
                                                )
                                            }
                                        >
                                            <span>
                                                {label}
                                            </span>

                                            <span
                                                className={`mobile-arrow ${
                                                    mobileDropdown ===
                                                    key
                                                        ? "rotate"
                                                        : ""
                                                }`}
                                            >
                                                ⌄
                                            </span>
                                        </button>

                                        {mobileDropdown ===
                                            key && (
                                            <div className="mobile-submenu">
                                                {items.map(
                                                    ([
                                                        itemLabel,
                                                        href,
                                                    ]) => (
                                                        <a
                                                            href={
                                                                href
                                                            }
                                                            onClick={
                                                                closeMenu
                                                            }
                                                            key={
                                                                href
                                                            }
                                                        >
                                                            {
                                                                itemLabel
                                                            }
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}

                            <a
                                href="/contact"
                                onClick={closeMenu}
                            >
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

            {/* CHATBOT — ALWAYS PRESENT */}
            <div
                className={`money-chat ${
                    chatOpen ? "chat-open" : ""
                }`}
            >
                {chatOpen && (
                    <div className="chat-panel">
                        <div className="chat-panel-head">
                            <div>
                                <strong>
                                    Money Doctor
                                </strong>

                                <span>
                                    <i></i> Online
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setChatOpen(false)
                                }
                                aria-label="Close chat"
                            >
                                ×
                            </button>
                        </div>

                        <div className="chat-panel-body">
                            <div className="chat-bubble bot">
                                Hi! 👋 How can I help you
                                today?
                            </div>

                            <div className="chat-quick">
                                <button type="button">
                                    Find a course
                                </button>

                                <button type="button">
                                    How it works
                                </button>

                                <button type="button">
                                    I need help
                                </button>
                            </div>
                        </div>

                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                            />

                            <button
                                type="button"
                                aria-label="Send"
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    className="chat-trigger"
                    onClick={() =>
                        setChatOpen(!chatOpen)
                    }
                    aria-label="Open Money Doctor chatbot"
                >
                    <span className="chat-status"></span>

                    <span className="chat-trigger-icon">
                        ◌
                    </span>

                    <span>
                        Ask Money Doctor
                    </span>
                </button>
            </div>
        </>
    );
}

export default Navbar;