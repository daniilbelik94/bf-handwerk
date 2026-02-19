import './About.css';
import { siteConfig } from '../../data/siteConfig';
import Button from '../ui/Button';
import { ArrowRightIcon, CheckIcon } from '../icons';

const highlights = [
    'Über 5 Jahre Erfahrung im Handwerk',
    'Persönliche Beratung & fairer Preis',
    'Termingerecht & zuverlässig',
    'Saubere & ordentliche Arbeit',
];

export default function About() {
    return (
        <section className="about" id="ueber-uns">
            <div className="container">
                <div className="about__content">
                    <div className="about__image-col animate-on-scroll">
                        <div className="about__image-wrapper">
                            <div className="about__image-placeholder">
                                <span className="about__image-emoji">🔨</span>
                            </div>
                            <div className="about__experience-badge">
                                <span className="about__experience-number">{siteConfig.experience}</span>
                                <span className="about__experience-label">Jahre Erfahrung</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__text-col animate-on-scroll delay-2">
                        <div className="about__label">Über uns</div>
                        <h2 className="about__title">
                            Wir sind Ihr Handwerker-Team in Hamburg
                        </h2>
                        <p className="about__description">
                            Wir sind <strong>{siteConfig.team[0].name}</strong> und{' '}
                            <strong>{siteConfig.team[1].name}</strong> — ein erfahrenes
                            Handwerker-Team aus Hamburg-Harburg. Mit über {siteConfig.experience} Jahren
                            Erfahrung im Handwerk, Liebe zum Detail und einem hohen
                            Qualitätsanspruch setzen wir Ihre Projekte professionell um.
                        </p>
                        <p className="about__description">
                            Ob Bodenverlegung, Möbelmontage oder Reparaturarbeiten — bei uns bekommen
                            Sie alles aus einer Hand. Wir arbeiten sorgfältig, termingerecht und zu
                            fairen Preisen.
                        </p>

                        <ul className="about__highlights">
                            {highlights.map((item) => (
                                <li key={item} className="about__highlight">
                                    <CheckIcon size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="primary" href="#kontakt">
                            Kontakt aufnehmen
                            <ArrowRightIcon size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
