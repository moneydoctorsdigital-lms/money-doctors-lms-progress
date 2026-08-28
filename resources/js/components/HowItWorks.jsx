import './HowItWorks.css';

const steps = [
    {
        number: '01',
        title: 'Create your account',
        description: 'Set up your learner profile and get access to the Money Doctors LMS workspace.',
    },
    {
        number: '02',
        title: 'Choose your learning path',
        description: 'Select a course sequence that matches your current knowledge and goals.',
    },
    {
        number: '03',
        title: 'Learn and grow',
        description: 'Complete lessons at your own pace and build skills you can apply immediately.',
    },
];

export default function HowItWorks() {
    return (
        <section className="section how-it-works" id="about">
            <div className="container">
                <div className="section-heading center">
                    <p className="section-label">How it works</p>
                    <h2>A simple path from start to progress.</h2>
                    <p>Three steps keep the learning journey focused, practical, and easy to follow.</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <article className="step-card" key={step.number}>
                            <span className="step-number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
