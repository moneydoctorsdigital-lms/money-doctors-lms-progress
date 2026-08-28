import React from "react";
import "./Courses.css";

function Courses() {
    const courses = [
        {
            category: "FINANCIAL EDUCATION",
            title: "Financial Foundations",
            description:
                "Build strong foundations in money management, budgeting, and financial decision-making.",
            lessons: "6 lessons",
            level: "Beginner",
            image: "/images/Financial-Foundations.jpg",
        },
        {
            category: "PERSONAL FINANCE",
            title: "Building a Financial Plan",
            description:
                "Develop practical skills for managing income, expenses, savings, and financial goals.",
            lessons: "8 lessons",
            level: "Beginner",
            image: "/images/Building-Financial-Plan.jpg",
        },
        {
            category: "FINANCIAL EDUCATION",
            title: "Setting Financial Goals",
            description:
                "Learn how to create realistic financial goals and build a clear path toward achieving them.",
            lessons: "5 lessons",
            level: "Beginner",
            image: "/images/Setting-Financial-Goals.jpg",
        },
        {
            category: "INVESTMENT & WEALTH",
            title: "Smart Investing Basics",
            description:
                "Understand the fundamentals of investing, risk management, and long-term wealth building.",
            lessons: "7 lessons",
            level: "Intermediate",
            image: "/images/Smart-Investing-Basics.jpg",
        },
        {
            category: "PERSONAL FINANCE",
            title: "Personal Finance Essentials",
            description:
                "Learn practical strategies for managing your money, expenses, savings, and everyday finances.",
            lessons: "7 lessons",
            level: "Beginner",
            image: "/images/Personal-Finance.jpg",
        },
        {
            category: "INVESTMENT & WEALTH",
            title: "Investment & Wealth",
            description:
                "Explore the principles of investing and develop knowledge for long-term financial growth.",
            lessons: "9 lessons",
            level: "Intermediate",
            image: "/images/Investment-Wealth.jpg",
        },
        {
            category: "PROFESSIONAL GROWTH",
            title: "Professional Growth",
            description:
                "Strengthen your financial knowledge, confidence, and skills for personal and professional growth.",
            lessons: "6 lessons",
            level: "Intermediate",
            image: "/images/Professional-Growth.jpg",
        },
        {
            category: "FINANCIAL EDUCATION",
            title: "Money Management Basics",
            description:
                "Build practical habits for budgeting, saving, spending wisely, and making better financial decisions.",
            lessons: "6 lessons",
            level: "Beginner",
            image: "/images/Financial-Education.jpg",
        },
    ];

    return (
        <main className="courses-page">

            {/* ==============================
                COURSES HERO
            ============================== */}
            <section className="courses-hero">
                <div className="courses-container">
                    <span className="courses-eyebrow">
                        MONEY DOCTORS DIGITAL
                    </span>

                    <h1>Explore Our Courses</h1>

                    <p>
                        Build practical financial knowledge, develop better
                        money habits, and grow your confidence at your own pace.
                    </p>
                </div>
            </section>

            {/* ==============================
                COURSES CONTENT
            ============================== */}
            <section className="courses-content">
                <div className="courses-container">

                    <div className="courses-heading">
                        <div>
                            <h2>All Courses</h2>
                            <p>
                                Choose a course that matches your goals and
                                start learning today.
                            </p>
                        </div>

                        <span className="courses-count">
                            {courses.length} Courses
                        </span>
                    </div>

                    {/* COURSE GRID */}
                    <div className="courses-grid">

                        {courses.map((course, index) => (
                            <article
                                className="course-card"
                                key={index}
                            >

                                {/* IMAGE */}
                                <div className="course-image">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                    />
                                </div>

                                {/* INFO */}
                                <div className="course-info">

                                    <span>
                                        {course.category}
                                    </span>

                                    <h3>
                                        {course.title}
                                    </h3>

                                    <p>
                                        {course.description}
                                    </p>

                                    {/* META */}
                                    <div className="course-meta">
                                        <span>
                                            📚 {course.lessons}
                                        </span>

                                        <span>
                                            ● {course.level}
                                        </span>
                                    </div>

                                    {/* LINK */}
                                    <a href="#course">
                                        View Course →
                                    </a>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Courses;