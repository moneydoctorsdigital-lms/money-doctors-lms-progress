import './LearningPaths.css';

const paths = [
    {
        icon: '01',
        title: 'Financial Foundations',
        description: 'Build a clear understanding of money, budgeting, and everyday financial decisions.',
        level: 'Beginner',
    },
    {
        icon: '02',
        title: 'Smart Money Management',
        description: 'Create systems for income, expenses, and priorities that support long-term habits.',
        level: 'Intermediate',
    },
    {
        icon: '03',
        title: 'Investing Fundamentals',
        description: 'Learn core investing concepts and how to think about growth over time.',
        level: 'Intermediate',
    },
    {
        icon: '04',
        title: 'Building Long-Term Wealth',
        description: 'Connect planning, discipline, and strategy into a practical wealth-building path.',
        level: 'Advanced',
    },
];

export default function LearningPaths() {
    return (
        <section className="section" id="courses">
            <div className="container">
                <div className="section-heading center">
                    <p className="section-label">Learning paths</p>
                    <h2>Choose a path that fits where you are.</h2>
                    <p>
                        Structured courses designed to help you move from foundational knowledge
                        to confident decision-making.
                    </p>
                </div>

                <div className="paths-grid">
                    {paths.map((path) => (
                        <article className="path-card" key={path.title}>
                            <div className="path-visual">
                                <span>{path.icon}</span>
                            </div>
                            <div className="path-body">
                                <h3>{path.title}</h3>
                                <p>{path.description}</p>
                                <div className="path-footer">
                                    <span className="path-level">{path.level}</span>
                                    <a href="#cta" className="path-cta">
                                        View path
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
