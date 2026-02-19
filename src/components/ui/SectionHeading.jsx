import './SectionHeading.css';

export default function SectionHeading({
    label,
    title,
    subtitle,
    light = false,
    align = 'center',
    className = '',
}) {
    const classes = [
        'section-heading',
        light && 'section-heading--light',
        align === 'left' && 'section-heading--left',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {label && <span className="section-heading__label">{label}</span>}
            <h2 className="section-heading__title">{title}</h2>
            <div className="section-heading__line" />
            {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
        </div>
    );
}
