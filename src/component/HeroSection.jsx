import { ChevronRight } from 'lucide-react';
import auroraLogo from '../assets/logo.png';

const HeroSection = ({ companyInfo }) => (
    <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content hero-flex">

            {/* LEFT SIDE */}
            <div className="hero-left">
                <h1 className="hero-title">{companyInfo.tagline}</h1>
                <p className="hero-description">{companyInfo.description}</p>

                <div className="hero-buttons">
                    <a href="#services" className="btn-primary">
                        Explore Services <ChevronRight size={20} />
                    </a>
                    <a href="#contact" className="btn-secondary">Get Quote</a>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-right">
                <img src={auroraLogo} alt="Aurora" className="hero-logo-image" />
            </div>
        </div>

        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        <div className="hero-decoration hero-decoration-3"></div>
    </section>

);

export default HeroSection;