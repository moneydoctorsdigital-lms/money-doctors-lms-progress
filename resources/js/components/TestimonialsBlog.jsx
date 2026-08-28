import React, { useState } from "react";
import "./TestimonialsBlog.css";

function TestimonialsBlog() {

    const testimonials = [
        {
            name: "Jessica M.",
            role: "Student",
            text: "The platform is easy to use and the lessons are very well-structured. It has helped me improve my financial skills and confidence.",
            image: "/images/Testimonial-Jessica.jpg"
        },
        {
            name: "Mark R.",
            role: "Student",
            text: "The courses helped me understand money management in a much simpler and more practical way.",
            image: "/images/Testimonial-Jessica.jpg"
        },
        {
            name: "Karen D.",
            role: "Student",
            text: "I like how organized the learning journey is. I always know what to learn next.",
            image: "/images/Testimonial-Jessica.jpg"
        }
    ];

    const blogPosts = [
        {
            category: "FINANCE",
            title: "10 Budget Hacks That Improve Your Savings",
            image: "/images/Budget-hack.jpg"
        },
        {
            category: "EDUCATION",
            title: "The Benefits of Online Learning for Students",
            image: "/images/Benefit-online.jpg"
        },
        {
            category: "LIFESTYLE",
            title: "How to Stay Motivated During Your Learning Journey",
            image: "/images/stay-motivated.jpg"
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial(
            (currentTestimonial + 1) % testimonials.length
        );
    };

    const previousTestimonial = () => {
        setCurrentTestimonial(
            (currentTestimonial - 1 + testimonials.length) %
            testimonials.length
        );
    };

    const testimonial = testimonials[currentTestimonial];

    return (
        <section className="testimonials-blog">

            <div className="tb-container">

                {/* ================================
                    TESTIMONIAL
                ================================= */}

                <div className="testimonial-card">

                    <div className="quote-mark">
                        “
                    </div>

                    <button
                        className="testimonial-arrow left"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <div className="testimonial-content">

                        <p className="testimonial-text">
                            {testimonial.text}
                        </p>

                        <div className="testimonial-user">

                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                            />

                            <div className="testimonial-user-info">
                                <h3>{testimonial.name}</h3>
                                <span>{testimonial.role}</span>
                            </div>

                        </div>

                    </div>

                    <button
                        className="testimonial-arrow right"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>

                    <div className="testimonial-dots">

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    index === currentTestimonial
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setCurrentTestimonial(index)
                                }
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}

                    </div>

                </div>


                {/* ================================
                    LATEST FROM OUR BLOG
                ================================= */}

                <div className="blog-section">

                    <div className="blog-heading">

                        <div>
                            <h2>Latest from Our Blog</h2>

                            <p>
                                Practical insights to help you learn,
                                grow, and make better financial decisions.
                            </p>
                        </div>

                        <a href="#stories">
                            View all articles →
                        </a>

                    </div>


                    <div className="blog-grid">

                        {blogPosts.map((post, index) => (

                            <article
                                className="blog-card"
                                key={index}
                            >

                                <div className="blog-image">

                                    <img
                                        src={post.image}
                                        alt={post.title}
                                    />

                                </div>

                                <div className="blog-info">

                                    <span className="blog-category">
                                        {post.category}
                                    </span>

                                    <h3>
                                        {post.title}
                                    </h3>

                                    <a href="#stories">
                                        Read More →
                                    </a>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default TestimonialsBlog;