import './Card.css';
import { Icon, CheckIcon } from '../icons';

export default function Card({
    icon,
    title,
    description,
    features,
    compact = false,
    className = '',
    children,
}) {
    const classes = [
        'card',
        compact && 'card--compact',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {icon && (
                <div className="card__icon">
                    <Icon name={icon} size={32} />
                </div>
            )}
            {title && <h3 className="card__title">{title}</h3>}
            {description && <p className="card__description">{description}</p>}
            {features && features.length > 0 && (
                <ul className="card__features">
                    {features.map((feature, i) => (
                        <li key={i} className="card__feature">
                            <CheckIcon size={16} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
            {children}
        </div>
    );
}
