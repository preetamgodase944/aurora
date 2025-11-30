import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ servicesData }) => (
    <section id="services" className="services-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Comprehensive Service Portfolio</h2>
                <p className="section-subtitle">
                    From surface preparation to final finishing, we provide end-to-end coating solutions tailored to your industrial needs
                </p>
            </div>

            <div className="services-grid">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    </section>
);

export default ServicesGrid;