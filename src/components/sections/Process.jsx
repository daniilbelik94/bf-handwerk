import SectionHeading from '../ui/SectionHeading';
import { process } from '../../data/services';
import { Icon } from '../icons';
import './Process.css';

export default function Process() {
    return (
        <section className="process-section" id="ablauf">
            <div className="container">
                <div className="animate-on-scroll">
                    <SectionHeading
                        label="Ablauf"
                        title="So arbeiten wir"
                        subtitle="Einfach, transparent und stressfrei zu Ihrem neuen Projekt."
                        align="center"
                    />
                </div>

                <div className="process-grid">
                    {process.map((item, index) => (
                        <div key={item.step} className={`process-item animate-on-scroll delay-${index + 1}`}>
                            <div className="process-icon-wrapper">
                                <span className="process-step-number">{item.step}</span>
                                <Icon name={item.icon} size={28} />
                            </div>
                            <div>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
