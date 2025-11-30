import { ChevronRight } from 'lucide-react';

const HeroSection = ({ companyInfo }) => (
    <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <div className="hero-text">
                <h1 className="hero-title">{companyInfo.tagline}</h1>
                <p className="hero-description">{companyInfo.description}</p>
                <div className="hero-buttons">
                    <a href="#services" className="btn-primary">
                        Explore Services
                        <ChevronRight size={20} />
                    </a>
                    <a href="#contact" className="btn-secondary">Get Quote</a>
                </div>
            </div>
        </div>
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
    </section>
);

export default HeroSection;