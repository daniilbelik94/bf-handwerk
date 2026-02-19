import { useState } from 'react';
import './WhyUs.css';
import SectionHeading from '../ui/SectionHeading';
import { Icon } from '../icons';
import { whyUs } from '../../data/services';

function ChevronIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    function toggleItem(index) {
        setActiveIndex(activeIndex === index ? -1 : index);
    }

    return (
        <section className="why-us" id="vorteile">
            <div className="why-us__bg-glow" />
            <div className="container">
                <div className="why-us__content">
                    <div className="animate-on-scroll">
                        <SectionHeading
                            label="Vorteile"
                            title="Warum B&F Handwerk?"
                            subtitle="Zuverlässigkeit, Qualität und Leidenschaft — darauf können Sie sich bei uns verlassen."
                            light
                            align="left"
                        />
                        <p className="why-us__text">
                            Mit über fünf Jahren Erfahrung im Handwerk wissen wir, worauf es ankommt.
                            Unser Anspruch ist es, jedes Projekt mit höchster Sorgfalt und Präzision
                            umzusetzen — termingerecht und zu fairen Preisen.
                        </p>
                    </div>

                    <div className="accordion animate-on-scroll delay-2">
                        {whyUs.map((item, index) => (
                            <div
                                key={item.title}
                                className={`accordion__item ${activeIndex === index ? 'accordion__item--active' : ''}`}
                            >
                                <button
                                    className="accordion__trigger"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <div className="accordion__icon">
                                        <Icon name={item.icon} size={24} />
                                    </div>
                                    <div className="accordion__trigger-text">
                                        <h3 className="accordion__title">{item.title}</h3>
                                    </div>
                                    <span className="accordion__chevron">
                                        <ChevronIcon />
                                    </span>
                                </button>
                                <div className="accordion__body">
                                    <div className="accordion__body-inner">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
