import { useState } from 'react';
import './Blog.css';
import { projects, categories } from '../data/projects';
import { CalendarIcon } from '../components/icons';

function formatDate(dateStr) {
    const [year, month] = dateStr.split('-');
    const months = [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
}

function getCategoryLabel(categoryId) {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.label : categoryId;
}

export default function Blog() {
    const [activeFilter, setActiveFilter] = useState('alle');

    const filteredProjects =
        activeFilter === 'alle'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <div className="container">
                    <h1 className="blog-hero__title">Unsere Projekte</h1>
                    <p className="blog-hero__subtitle">
                        Hier finden Sie eine Auswahl unserer abgeschlossenen Projekte.
                        Jedes Projekt steht für Qualität und Sorgfalt.
                    </p>
                </div>
            </div>

            <div className="blog-content">
                <div className="container">
                    <div className="blog-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`blog-filter ${activeFilter === cat.id ? 'blog-filter--active' : ''}`}
                                onClick={() => setActiveFilter(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {filteredProjects.length > 0 ? (
                        <div className="blog-grid">
                            {filteredProjects.map((project, i) => (
                                <article
                                    key={project.id}
                                    className={`blog-card animate-on-scroll delay-${(i % 3) + 1}`}
                                >
                                    <div className="blog-card__image">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="blog-card__img"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <span className="blog-card__image-placeholder">Bild folgt</span>
                                        )}
                                        <span className="blog-card__category-badge">
                                            {getCategoryLabel(project.category)}
                                        </span>
                                    </div>
                                    <div className="blog-card__body">
                                        <div className="blog-card__date">
                                            <CalendarIcon size={14} />
                                            <span>{formatDate(project.date)}</span>
                                        </div>
                                        <h2 className="blog-card__title">{project.title}</h2>
                                        <p className="blog-card__description">{project.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="blog-empty">
                            <p className="blog-empty__title">Keine Projekte in dieser Kategorie</p>
                            <p>Wählen Sie eine andere Kategorie oder schauen Sie bald wieder vorbei.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
