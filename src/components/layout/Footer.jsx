import { Link } from 'react-router-dom';
import './Footer.css';
import { PhoneIcon, EmailIcon, LocationIcon } from '../icons';
import { siteConfig } from '../../data/siteConfig';
import Logo from './Logo';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__brand-header">
                            <Logo size={36} />
                            <h3 className="footer__brand-name">{siteConfig.businessName}</h3>
                        </div>
                        <p className="footer__brand-desc">
                            {siteConfig.tagline}. Professionelle Handwerker-Dienstleistungen in Hamburg
                            mit über {siteConfig.experience} Jahren Erfahrung.
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Navigation</h4>
                        <nav className="footer__links" aria-label="Footer-Navigation">
                            <Link to="/" className="footer__link">Startseite</Link>
                            <Link to="/#leistungen" className="footer__link">Leistungen</Link>
                            <Link to="/#ueber-uns" className="footer__link">Über uns</Link>
                            <Link to="/#kontakt" className="footer__link">Kontakt</Link>
                            <Link to="/blog" className="footer__link">Projekte</Link>
                        </nav>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Kontakt</h4>
                        <div className="footer__contact-item">
                            <PhoneIcon size={16} />
                            <a href={`tel:${siteConfig.phone}`} className="footer__contact-link">
                                {siteConfig.phoneDisplay}
                            </a>
                        </div>
                        <div className="footer__contact-item">
                            <EmailIcon size={16} />
                            <a href={`mailto:${siteConfig.email}`} className="footer__contact-link">
                                {siteConfig.email}
                            </a>
                        </div>
                        <div className="footer__contact-item">
                            <LocationIcon size={16} />
                            <span>{siteConfig.address.full}</span>
                        </div>
                    </div>
                </div>

                <hr className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {year} {siteConfig.businessName}. Alle Rechte vorbehalten.
                    </p>
                    <div className="footer__legal">
                        <Link to="/impressum" className="footer__legal-link">Impressum</Link>
                        <Link to="/datenschutz" className="footer__legal-link">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
