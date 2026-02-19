import './Hero.css';
import Button from '../ui/Button';
import { ArrowRightIcon } from '../icons';
import { siteConfig } from '../../data/siteConfig';

export default function Hero() {
    return (
        <section className="hero" id="start">
            <div className="hero__bg-layer" />
            <div className="hero__glow hero__glow--1" />
            <div className="hero__glow hero__glow--2" />

            <div className="container hero__inner">
                <div className="hero__badge animate-on-scroll">
                    Über {siteConfig.experience} Jahre Erfahrung
                </div>

                <h1 className="hero__title animate-on-scroll delay-1">
                    Professionelle
                    <span className="hero__title-accent">Handwerksleistungen</span>
                    für Ihr Zuhause
                </h1>

                <p className="hero__subtitle animate-on-scroll delay-2">
                    Laminat- &amp; Vinylverlegung, Möbel- &amp; Küchenmontage und Reparaturen —
                    Ihr zuverlässiges Handwerker-Team aus Hamburg-Harburg.
                </p>

                <div className="hero__actions animate-on-scroll delay-3">
                    <Button variant="primary" size="large" href="#kontakt">
                        Kostenlose Anfrage
                        <ArrowRightIcon size={18} />
                    </Button>
                    <Button variant="outline-light" size="large" href="#leistungen">
                        Leistungen ansehen
                    </Button>
                </div>

                <div className="hero__stats animate-on-scroll delay-4">
                    <div className="hero__stat">
                        <span className="hero__stat-number">{siteConfig.experience}</span>
                        <span className="hero__stat-label">Jahre Erfahrung</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">100%</span>
                        <span className="hero__stat-label">Zufriedene Kunden</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">Hamburg</span>
                        <span className="hero__stat-label">und Umgebung</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-hint">
                <span>Mehr erfahren</span>
                <div className="hero__scroll-arrow" />
            </div>
        </section>
    );
}
