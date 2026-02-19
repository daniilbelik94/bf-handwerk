import { brands } from '../../data/services';
import './Brands.css';

function BrandLogo({ id, className }) {
    switch (id) {
        case 'obi':
            return (
                <svg viewBox="0 0 100 30" className={className} fill="currentColor">
                    <title>OBI</title>
                    <path d="M14.5 5C8.7 5 4 9.5 4 15s4.7 10 10.5 10S25 20.5 25 15 20.3 5 14.5 5zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm24-15h-8v20h9c3.3 0 6-2.7 6-6v-8c0-3.3-2.7-6-6-6zm1 14c0 .6-.4 1-1 1h-3v-5h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3v-4h3c.6 0 1 .4 1 1v2zm13-7h-8v20h8v-20zm23 0h-8v20h8v-20z" transform="scale(0.8) translate(5, 2)" />
                </svg>
            );
        case 'bauhaus':
            return (
                <svg viewBox="0 0 100 30" className={className} fill="currentColor">
                    <title>BAUHAUS</title>
                    {/* Simplified Bauhaus geometric style text */}
                    <path d="M10,5 v20 h5 v-8 h5 v8 h5 v-20 h-5 v8 h-5 v-8 Z M35,5 l-5,20 h5 l1,-4 h6 l1,4 h5 l-5,-20 Z M38.5,16 l2,-8 l2,8 Z M55,5 v12 c0,5 6,5 6,0 v-12 h-5 v12 h-1 v-12 Z M70,5 v20 h5 v-8 h5 v8 h5 v-20 h-5 v8 h-5 v-8 Z M90,5 l-5,20 h5 l1,-4 h6 l1,4 h5 l-5,-20 Z M93.5,16 l2,-8 l2,8 Z" transform="scale(0.8) translate(2, 2)" />
                </svg>
            );
        case 'ikea':
            return (
                <svg viewBox="0 0 100 30" className={className} fill="currentColor">
                    <title>IKEA</title>
                    <path d="M10,5 h6 v20 h-6 Z M20,5 h6 v8 l4,-8 h6.5 l-6,10 l7,10 h-7.5 l-5,-8 v8 h-6 Z M40,5 h16 v4 h-11 v4 h11 v4 h-11 v4 h11 v4 h-16 Z M60,5 h6 l5,20 h-5.5 l-1.2,-5 h-7.6 l-1.2,5 h-5.5 Z M66,16 l-2.5,-8 l-2.5,8 Z" />
                </svg>
            );
        case 'hoeffner':
            return (
                <svg viewBox="0 0 100 30" className={className} fill="currentColor">
                    <title>Höffner</title>
                    <path d="M5,5 v20 h5 v-8 h10 v8 h5 v-20 h-5 v8 h-10 v-8 Z M35,4 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 M45,4 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 M35,10 h15 v15 h-5 v-3 h-5 v3 h-5 Z M39,14 h7 v5 h-7 Z M55,10 v15 h5 v-6 h2 v6 h5 v-15 h-5 v5 h-2 v-5 Z M70,10 v15 h5 v-7 h5 v7 h5 v-15 h-5 v5 h-5 v-5 Z M88,10 v15 h10 v-4 h-6 v-2 h5 v-4 h-5 v-1 h6 v-4 Z" transform="scale(0.9) translate(5, 2)" />
                </svg>
            );
        case 'hornbach':
            return (
                <svg viewBox="0 0 100 30" className={className} fill="currentColor">
                    <title>HORNBACH</title>
                    <path d="M10,5 v20 h5 v-8 h8 v8 h5 v-20 h-5 v8 h-8 v-8 Z M50,5 v20 h5 v-8 h3 l4,8 h6 l-5,-9 c4,-1 5,-5 2,-8 c-1,-2 -4,-3 -7,-3 Z M55,9 h5 c2,0 3,1 3,3 s-1,3 -3,3 h-5 Z" transform="scale(0.8) translate(10, 2)" />
                </svg>
            );
        default:
            return <span>{id}</span>;
    }
}

export default function Brands() {
    return (
        <section className="brands-section">
            <div className="container">
                <p className="brands-title">Wir arbeiten mit Qualitätsprodukten von</p>
                <div className="brands-grid">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brand-item" title={brand.name}>
                            <BrandLogo id={brand.id} className="brand-logo-svg" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
