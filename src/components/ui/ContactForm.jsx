import { useState } from 'react';
import './ContactForm.css';
import Button from './Button';

export default function ContactForm() {
    const [status, setStatus] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 4000);
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Nachricht senden</h3>
            <div className="contact-form__grid">
                <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="contact-form__input"
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Ihr Name"
                    />
                </div>
                <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="email">
                        E-Mail
                    </label>
                    <input
                        className="contact-form__input"
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Ihre E-Mail-Adresse"
                    />
                </div>
                <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label" htmlFor="phone">
                        Telefon (optional)
                    </label>
                    <input
                        className="contact-form__input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Ihre Telefonnummer"
                    />
                </div>
                <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label" htmlFor="subject">
                        Betreff
                    </label>
                    <input
                        className="contact-form__input"
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Worum geht es?"
                    />
                </div>
                <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label" htmlFor="message">
                        Nachricht
                    </label>
                    <textarea
                        className="contact-form__textarea"
                        id="message"
                        name="message"
                        required
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                </div>
            </div>
            <Button type="submit" variant="primary" size="large" className="contact-form__submit">
                Anfrage senden
            </Button>
            {status === 'success' && (
                <p className="contact-form__status contact-form__status--success">
                    Vielen Dank! Ihre Nachricht wurde gesendet. Ich melde mich schnellstmöglich bei Ihnen.
                </p>
            )}
        </form>
    );
}
