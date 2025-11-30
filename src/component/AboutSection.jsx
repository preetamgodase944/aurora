import { Factory } from 'lucide-react';

const AboutSection = ({ aboutData }) => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="about-grid">
        <div className="about-content">
          
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-text">{aboutData.text}</p>
          
          <div className="features-list">
            {aboutData.features.map((item, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-bullet"></div>
                <p className="feature-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-placeholder">
            <Factory size={192} />
          </div>
          <div className="image-decoration"></div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
