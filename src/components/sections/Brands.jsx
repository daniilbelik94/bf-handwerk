import { brands } from '../../data/services';
import './Brands.css';

export default function Brands() {
    return (
        <section className="brands-section">
            <div className="container">
                <p className="brands-title">Wir arbeiten mit Qualitätsprodukten von</p>
                <div className="brands-grid">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brand-item">
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
