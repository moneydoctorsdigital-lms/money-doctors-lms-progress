import React from "react";
import "./StatsBar.css";

function StatsBar() {
    const stats = [
        {
            number: "5,000+",
            label: "Active Students",
            icon: "♧"
        },
        {
            number: "120+",
            label: "Courses",
            icon: "▣"
        },
        {
            number: "150+",
            label: "Expert Instructors",
            icon: "♢"
        },
        {
            number: "95%",
            label: "Satisfaction Rate",
            icon: "♜"
        }
    ];

    return (
        <section className="stats-bar-section">
            <div className="stats-bar">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="stat-item">

                            <div className="stat-icon">
                                {stat.icon}
                            </div>

                            <div className="stat-content">
                                <strong>{stat.number}</strong>
                                <span>{stat.label}</span>
                            </div>

                        </div>

                        {index < stats.length - 1 && (
                            <div className="stat-divider"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default StatsBar;