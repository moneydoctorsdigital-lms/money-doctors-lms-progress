import './SuccessStories.css';

const stories = [
    {
        name: 'Jordan D.',
        role: 'New Learner',
        quote: 'The lessons made financial concepts much easier to understand and apply in everyday life.',
    },
    {
        name: 'Maria A.',
        role: 'Working Professional',
        quote: 'I finally had a clear learning path instead of trying to figure out what to study first.',
    },
    {
        name: 'Ryan S.',
        role: 'Aspiring Investor',
        quote: 'The combination of structured courses and practical examples gave me a much better starting point.',
    },
];

export default function SuccessStories() {
    return (
        <section className="section stories" id="stories">
            <div className="container">
                <div className="section-heading center">
                    <p className="section-label">Stories</p>
                    <h2>Learning that moves people forward.</h2>
                    <p>Hear how learners are building knowledge and taking the next step with confidence.</p>
                </div>

                <div className="stories-grid">
                    {stories.map((story) => (
                        <article className="story-card" key={story.name}>
                            <p className="story-quote">“{story.quote}”</p>
                            <div className="story-person">
                                <span className="avatar" aria-hidden="true">
                                    {story.name
                                        .split(' ')
                                        .map((part) => part[0])
                                        .join('')}
                                </span>
                                <div>
                                    <strong>{story.name}</strong>
                                    <span>{story.role}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
