import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { MenuIcon, CloseIcon } from '../icons';
import Button from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import Logo from './Logo';

const navLinks = [
    { label: 'Startseite', href: '/' },
    { label: 'Leistungen', href: '/#leistungen' },
    { label: 'Über uns', href: '/#ueber-uns' },
    { label: 'Kontakt', href: '/#kontakt' },
    { label: 'Projekte', href: '/blog' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // Always show solid navbar on non-home pages
    const showSolid = scrolled || !isHome;

    function handleAnchorClick(e, href) {
        if (href.startsWith('/#')) {
            if (location.pathname === '/') {
                e.preventDefault();
                const id = href.replace('/#', '');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileOpen(false);
    }

    return (
        <>
            <nav className={`navbar ${showSolid ? 'navbar--scrolled' : ''}`} aria-label="Hauptnavigation">
                <div className="container navbar__inner">
                    <Link to="/" className="navbar__logo" aria-label="B&F Handwerk — Startseite">
                        <Logo />
                        <span className="navbar__logo-text">
                            <span className="navbar__logo-name">{siteConfig.businessName}</span>
                            <span className="navbar__logo-sub">Belik & Ferbert</span>
                        </span>
                    </Link>

                    <div className="navbar__links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="navbar__link"
                                onClick={(e) => handleAnchorClick(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__cta-desktop">
                        <Button
                            variant="outline-light"
                            href={`tel:${siteConfig.phone}`}
                            className="navbar__cta"
                        >
                            Jetzt anrufen
                        </Button>
                    </div>

                    <button
                        className="navbar__toggle"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <MenuIcon size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`navbar__overlay ${mobileOpen ? 'navbar__overlay--visible' : ''}`}
                onClick={() => setMobileOpen(false)}
            />
            <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
                <button
                    className="navbar__mobile-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Menü schließen"
                >
                    <CloseIcon size={28} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className="navbar__mobile-link"
                        onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                        {link.label}
                    </Link>
                ))}
                <Button variant="primary" href={`tel:${siteConfig.phone}`}>
                    Jetzt anrufen
                </Button>
            </div>
        </>
    );
}
