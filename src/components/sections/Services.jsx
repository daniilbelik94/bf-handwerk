import './Services.css';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function Services() {
    return (
        <section className="services" id="leistungen">
            <div className="container">
                <SectionHeading
                    label="Leistungen"
                    title="Was wir für Sie tun können"
                    subtitle="Professionelle Handwerker-Dienstleistungen in Hamburg — von der Beratung bis zur sauberen Ausführung."
                />

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div key={service.id} className={`animate-on-scroll delay-${index + 1}`}>
                            <Card
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
