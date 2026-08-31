import React from "react";
import "./WhatToExpect.css";

function WhatToExpect() {
    const expectations = [
        {
            icon: "▣",
            title: "Expert Instructors",
            text: "Learn from experienced financial professionals."
        },
        {
            icon: "◆",
            title: "Quality Content",
            text: "Courses designed for real growth and skills."
        },
        {
            icon: "▤",
            title: "Flexible Learning",
            text: "Learn anytime, anywhere at your own pace."
        },
        {
            icon: "●",
            title: "Supportive Community",
            text: "You are not alone on your learning journey."
        }
    ];

    const courses = [
        {
            title: "Financial Foundations",
            lessons: "6 lessons",
            level: "Beginner",
            image: "/money-doctors-lms-progress/images/Financial-Foundations.jpg",
        },
        {
            title: "Building a Financial Plan",
            lessons: "8 lessons",
            level: "Beginner",
            image: "/money-doctors-lms-progress/images/Building-Financial-Plan.jpg",
        },
        {
            title: "Setting Financial Goals",
            lessons: "5 lessons",
            level: "Beginner",
            image: "/money-doctors-lms-progress/images/Setting-Financial-Goals.jpg",
        },
        {
            title: "Smart Investing Basics",
            lessons: "7 lessons",
            level: "Intermediate",
            image: "/money-doctors-lms-progress/images/Smart-Investing-Basics.jpg",
        },
    ];

    return (
        <section className="learning-overview">
            <div className="overview-container">

                {/* WHAT YOU CAN EXPECT */}
                <div className="expect-section">
                    <div className="section-heading">
                        <h2>What You Can Expect</h2>
                        <p>Learn. Apply. Grow. Succeed.</p>
                    </div>

                    <div className="expect-grid">
                        {expectations.map((item, index) => (
                            <div className="expect-card" key={index}>
                                <div className="expect-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPLORE COURSES */}
                <div className="courses-section">

                    <div className="section-heading course-heading">
                        <div>
                            <h2>Explore Our Courses</h2>
                            <p>
                                Build practical knowledge for your financial journey.
                            </p>
                        </div>

                        <a href="#courses">
                            View all courses →
                        </a>
                    </div>

                    <div className="course-grid">
                        {courses.map((course, index) => (
                            <article
                                className="course-card"
                                key={index}
                            >
                                <div className="course-image">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                    />
                                </div>

                                <div className="course-info">
                                    <h3>{course.title}</h3>

                                    <p>
                                        {course.lessons}
                                        <span> · </span>
                                        {course.level}
                                    </p>

                                    <span className="course-level">
                                        {course.level}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhatToExpect;