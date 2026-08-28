import './CTA.css';

export default function CTA() {
    return (
        <section className="section cta" id="cta">
            <div className="container">
                <div className="cta-box">
                    <p className="section-label">Get started</p>
                    <h2>Start Your Learning Journey</h2>
                    <p>
                        Create your account, choose a learning path, and begin building practical
                        financial knowledge today.
                    </p>
                    <a href="/register" className="btn btn-primary">
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
