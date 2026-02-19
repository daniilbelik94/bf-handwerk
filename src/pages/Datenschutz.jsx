import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Datenschutz() {
    useEffect(() => {
        document.title = `Datenschutz | ${siteConfig.businessName}`;
    }, []);

    return (
        <div className="container" style={{ paddingBottom: 'var(--space-4xl)', paddingTop: '8rem' }}>
            <h1 style={{ marginBottom: 'var(--space-xl)' }}>Datenschutzerklärung</h1>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>1. Datenschutz auf einen Blick</h2>
                <h3 style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-sm)' }}>Allgemeine Hinweise</h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <h3 style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-sm)' }}>Datenerfassung auf dieser Website</h3>
                <p>
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
            </section>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>2. Hosting</h2>
                <p>
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                    <strong>Vercel Inc.</strong><br />
                    Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                </p>
            </section>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-sm)' }}>Datenschutz</h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <h3 style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-sm)' }}>Hinweis zur verantwortlichen Stelle</h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    {siteConfig.businessName}<br />
                    {siteConfig.team[0].name} & {siteConfig.team[1].name}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.zip} {siteConfig.address.city}<br /><br />
                    Telefon: {siteConfig.phoneDisplay}<br />
                    E-Mail: {siteConfig.email}
                </p>
            </section>

            <section style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 'var(--space-md)' }}>4. Datenerfassung auf dieser Website</h2>
                <h3 style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-sm)' }}>Kontaktformular</h3>
                <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </section>
        </div>
    );
}
