import { useState } from "react";
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Icon = service.icon;

    return (
        <div className={`service-card service-card-${service.color}`}>
            <div className={`service-icon service-icon-${service.color}`}>
                <Icon size={32} />
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`service-toggle service-toggle-${service.color}`}
            >
                {isExpanded ? 'Show Less' : 'View Details'}
                <ChevronRight
                    size={20}
                    style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
                />
            </button>

            <div
                className="service-details"
                style={{
                    maxHeight: isExpanded ? '500px' : '0',
                    opacity: isExpanded ? '1' : '0'
                }}
            >
                <div className={`service-details-content service-details-${service.color}`}>
                    {service.services.map((item, idx) => (
                        <div key={idx} className="service-item">
                            <h4 className="service-item-name">{item.name}</h4>
                            <p className="service-item-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;