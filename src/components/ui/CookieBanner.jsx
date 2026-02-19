import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './CookieBanner.css';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`cookie-banner ${isVisible ? 'is-visible' : ''}`}>
            <div className="cookie-banner__content">
                <p>
                    Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend verbessern zu können.
                    Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
                    Weitere Informationen erhalten Sie in unserer <Link to="/datenschutz" className="cookie-banner__link">Datenschutzerklärung</Link>.
                </p>
            </div>
            <div className="cookie-banner__actions">
                <Button variant="outline" size="small" onClick={handleDecline}>
                    Ablehnen
                </Button>
                <Button variant="primary" size="small" onClick={handleAccept}>
                    Akzeptieren
                </Button>
            </div>
        </div>
    );
}
