import { Mail, Phone, MapPin } from 'lucide-react';
import QRCodeDisplay from './QRCodeDisplay';

const ContactSection = ({ companyInfo }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Ready to start your project? Contact us today for a consultation</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon contact-icon-blue">
              <Phone size={28} />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <a href={`tel:${companyInfo.phones[0]}`} className="contact-link">
              {companyInfo.phones[0]}
            </a>
            <a href={`tel:${companyInfo.phones[1]}`} className="contact-link">
              {companyInfo.phones[1]}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon contact-icon-green">
              <Mail size={28} />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <a href={`mailto:${companyInfo.email}`} className="contact-link contact-email">
              {companyInfo.email}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon contact-icon-purple">
              <MapPin size={28} />
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-address">{companyInfo.address}</p>
          </div>
        </div>

        <div className="qr-section">
          <h3 className="qr-title">Scan to View Location on Google Maps</h3>
          <div className="qr-single">
            <QRCodeDisplay
              data={companyInfo.googleMapsLink}
              label="Open in Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;