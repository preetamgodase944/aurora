import { useState } from "react";
import { Factory, Menu, X } from 'lucide-react';
import auroraLogo from '../assets/logo.png';

const Header = ({ companyInfo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="logo">
                        <img src={auroraLogo} className="logo-image" />
                        <span className="logo-text">{companyInfo.name}</span>
                    </div>


                    <div className="nav-links">
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link-button">Contact Us</a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="mobile-menu-btn"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#services" className="mobile-link">Services</a>
                        <a href="#about" className="mobile-link">About</a>
                        <a href="#contact" className="mobile-link">Contact</a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;