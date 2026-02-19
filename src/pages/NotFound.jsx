import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFound() {
    return (
        <div className="container" style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '8rem var(--space-lg) var(--space-4xl)'
        }}>
            <h1 style={{
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                color: 'var(--color-primary-light)',
                lineHeight: 1,
                marginBottom: 'var(--space-md)'
            }}>404</h1>
            <h2 style={{ marginBottom: 'var(--space-md)' }}>Seite nicht gefunden</h2>
            <p style={{
                maxWidth: '500px',
                marginBottom: 'var(--space-xl)',
                color: 'var(--color-text-light)'
            }}>
                Die Seite, die Sie suchen, existiert leider nicht oder wurde verschoben.
            </p>
            <Button variant="primary" href="/">Zur Startseite</Button>
        </div>
    );
}
