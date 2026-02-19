import { useState } from 'react';
import './ContactForm.css';
import Button from './Button';

export default function ContactForm() {
    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/maqdbkzr', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        }
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
                    Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
            )}
            {status === 'error' && (
                <p className="contact-form__status contact-form__status--error">
                    Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </p>
            )}
        </form>
    );
}
