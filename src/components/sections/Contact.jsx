import './Contact.css';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';
import { PhoneIcon, EmailIcon, LocationIcon } from '../icons';
import { siteConfig } from '../../data/siteConfig';

export default function Contact() {
    return (
        <section className="contact" id="kontakt">
            <div className="container">
                <SectionHeading
                    label="Kontakt"
                    title="Lassen Sie uns sprechen"
                    subtitle="Haben Sie ein Projekt im Sinn? Wir beraten Sie gern und erstellen Ihnen ein unverbindliches Angebot."
                />

                <div className="contact__grid">
                    <div className="contact__info animate-on-scroll">
                        <p className="contact__info-text">
                            Rufen Sie uns an, schreiben Sie uns eine E-Mail oder nutzen Sie
                            das Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen —
                            in der Regel noch am selben Tag.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <PhoneIcon size={22} />
                                </div>
                                <div className="contact__detail-content">
                                    <span className="contact__detail-label">Telefon</span>
                                    <span className="contact__detail-value">
                                        <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <EmailIcon size={22} />
                                </div>
                                <div className="contact__detail-content">
                                    <span className="contact__detail-label">E-Mail</span>
                                    <span className="contact__detail-value">
                                        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <LocationIcon size={22} />
                                </div>
                                <div className="contact__detail-content">
                                    <span className="contact__detail-label">Standort</span>
                                    <span className="contact__detail-value">{siteConfig.address.full}</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__map-hint">
                            <p className="contact__map-title">Einsatzgebiet</p>
                            <p className="contact__map-text">
                                Wir sind in ganz Hamburg und Umgebung für Sie im Einsatz.
                                Von Harburg über die Innenstadt bis nach Bergedorf —
                                sprechen Sie uns einfach an.
                            </p>
                        </div>
                    </div>

                    <div className="animate-on-scroll delay-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
