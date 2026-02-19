import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Impressum() {
    useEffect(() => {
        document.title = `Impressum | ${siteConfig.businessName}`;
    }, []);

    return (
        <div className="container" style={{ paddingBottom: 'var(--space-4xl)', paddingTop: '8rem' }}>
            <h1 style={{ marginBottom: 'var(--space-xl)' }}>Impressum</h1>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>Angaben gemäß § 5 TMG</h2>
                <p>
                    {siteConfig.businessName}<br />
                    {siteConfig.team[0].name} & {siteConfig.team[1].name}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                </p>
            </section>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>Kontakt</h2>
                <p>
                    Telefon: {siteConfig.phoneDisplay}<br />
                    E-Mail: {siteConfig.email}
                </p>
            </section>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </div>
    );
}
