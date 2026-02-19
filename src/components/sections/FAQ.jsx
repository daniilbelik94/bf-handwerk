import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { faq } from '../../data/services';
import './FAQ.css';

function PlusIcon({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    function toggleItem(index) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="animate-on-scroll">
                    <SectionHeading
                        label="Häufige Fragen"
                        title="Antworten auf Ihre Fragen"
                        subtitle="Hier finden Sie Antworten auf die häufigsten Fragen unserer Kunden."
                        align="center"
                    />
                </div>

                <div className="faq-grid animate-on-scroll delay-2">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'faq-item--active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{item.question}</span>
                                <span className="faq-icon">
                                    <PlusIcon />
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
