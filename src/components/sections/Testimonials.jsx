import { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/services';

function StarIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    );
}

function ArrowLeftIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowRightSmIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function usePerView() {
    const [perView, setPerView] = useState(3);
    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w <= 640) setPerView(1);
            else if (w <= 1024) setPerView(2);
            else setPerView(3);
        }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return perView;
}

export default function Testimonials() {
    const perView = usePerView();
    const [current, setCurrent] = useState(0);
    const maxIndex = Math.max(0, testimonials.length - perView);

    // Clamp current when perView changes
    useEffect(() => {
        setCurrent((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const goNext = useCallback(() => {
        setCurrent((prev) => Math.min(prev + 1, maxIndex));
    }, [maxIndex]);

    const goPrev = useCallback(() => {
        setCurrent((prev) => Math.max(prev - 1, 0));
    }, []);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const slideWidth = 100 / perView;
    const totalDots = maxIndex + 1;

    return (
        <section className="testimonials" id="kundenstimmen">
            <div className="container">
                <div className="testimonials__header">
                    <SectionHeading
                        label="Kundenstimmen"
                        title="Was unsere Kunden sagen"
                        subtitle="Ihre Zufriedenheit ist unser Antrieb. Lesen Sie, was unsere Kunden über die Zusammenarbeit mit uns berichten."
                    />
                    <div className="testimonials__arrows">
                        <button className="testimonials__arrow-btn" onClick={goPrev} disabled={current === 0} aria-label="Vorheriges Testimonial">
                            <ArrowLeftIcon />
                        </button>
                        <button className="testimonials__arrow-btn" onClick={goNext} disabled={current >= maxIndex} aria-label="Nächstes Testimonial">
                            <ArrowRightSmIcon />
                        </button>
                    </div>
                </div>

                <div className="testimonials__slider animate-on-scroll">
                    <div className="testimonials__track">
                        <div
                            className="testimonials__slides"
                            style={{ transform: `translateX(-${current * slideWidth}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="testimonials__slide" style={{ flex: `0 0 ${slideWidth}%` }}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card__stars">
                                            {Array.from({ length: t.rating }).map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </div>
                                        <p className="testimonial-card__text">{t.text}</p>
                                        <div className="testimonial-card__divider" />
                                        <p className="testimonial-card__name">{t.name}</p>
                                        <p className="testimonial-card__meta">{t.location}</p>
                                        <span className="testimonial-card__service">{t.service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="testimonials__dots-row">
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials__dot ${current === i ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Seite ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
