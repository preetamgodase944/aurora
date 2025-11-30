import { Factory } from 'lucide-react';

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="about-title">Why Choose BGK Industry?</h2>
          <p className="about-text">
            With years of expertise in industrial surface treatment and coating applications, we deliver exceptional quality through advanced technology and meticulous attention to detail.
          </p>
          
          <div className="features-list">
            {[
              'State-of-the-art coating facilities',
              'Experienced technical team',
              'Quality-assured processes',
              'Environmentally conscious operations',
              'Custom solutions for diverse industries'
            ].map((item, idx) => (
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