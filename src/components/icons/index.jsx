export function FloorIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="4" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="16" y1="8" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="30" y1="8" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="20" x2="10" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="20" x2="24" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="38" y1="20" x2="38" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="16" y1="32" x2="16" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="30" y1="32" x2="30" y2="40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export function FurnitureIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="8" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="24" y1="6" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="12" r="1.5" fill="currentColor" />
            <circle cx="16" cy="26" r="1.5" fill="currentColor" />
            <circle cx="32" cy="20" r="1.5" fill="currentColor" />
            <line x1="10" y1="34" x2="10" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="34" x2="38" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function RepairIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M18 30L8 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 38L10 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 28C20 28 28 20 30 18C32 16 36 12 36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 6C38 6 42 10 42 14C42 16 41 18 39 20L32 13C32 13 34 8 34 6Z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M22 26L26 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function ExperienceIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
    );
}

export function QualityIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M24 4L29.5 16.5L43 18L33 27.5L35.5 41L24 34.5L12.5 41L15 27.5L5 18L18.5 16.5L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function PriceIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="24" y="30" textAnchor="middle" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="Outfit, sans-serif">€</text>
        </svg>
    );
}

export function ReliableIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M24 4L40 12V22C40 33 33 40 24 44C15 40 8 33 8 22V12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M17 24L22 29L31 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function PhoneIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.55 21 20.12 21 19.68 21C10.33 21 3 13.67 3 4.32C3 3.88 3 3.45 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.35 8.05 2.82C8.14 3.39 8.29 3.95 8.49 4.48C8.63 4.85 8.53 5.26 8.24 5.53L6.64 7.13C8.06 9.91 10.09 11.94 12.87 13.36L14.47 11.76C14.74 11.47 15.15 11.37 15.52 11.51C16.05 11.71 16.61 11.86 17.18 11.95C17.65 12.03 18 12.44 18 12.92V16.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function EmailIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function LocationIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export function MenuIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function CloseIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function ArrowRightIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function CalendarIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function CheckIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function MessageIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21 11.5C21.0031 12.8199 20.6951 14.1272 20.1039 15.3057C19.5128 16.4841 18.6573 17.4975 17.6158 18.2544C16.5744 19.0112 15.3804 19.4882 14.1425 19.6425C12.9046 19.7969 11.6619 19.6238 10.527 19.139L5 21L6.861 15.417C6.37623 14.2821 6.2031 13.0394 6.35745 11.8015C6.5118 10.5636 6.98877 9.36961 7.74564 8.32817C8.50252 7.28673 9.51586 6.43122 10.6943 5.84007C11.8728 5.24892 13.1801 4.94092 14.5 4.944C16.222 4.94939 17.8719 5.63583 19.0883 6.85352C20.3047 8.07121 20.9893 9.72224 20.993 11.444L21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function QuoteIcon({ size = 24, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H10V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 11V7C10 5.67392 9.47321 4.40215 8.53553 3.46447C7.59785 2.52678 6.32608 2 5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11H16C15.4696 11 14.9609 11.2107 14.5858 11.5858C14.2107 11.9609 14 12.4696 14 13V19C14 19.5304 14.2107 20.0391 14.5858 20.4142C14.9609 20.7893 15.4696 21 16 21H20V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11V7C20 5.67392 19.4732 4.40215 18.5355 3.46447C17.5979 2.52678 16.3261 2 15 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const iconMap = {
    floor: FloorIcon,
    furniture: FurnitureIcon,
    repair: RepairIcon,
    experience: ExperienceIcon,
    quality: QualityIcon,
    price: PriceIcon,
    reliable: ReliableIcon,
    phone: PhoneIcon,
    email: EmailIcon,
    location: LocationIcon,
    menu: MenuIcon,
    close: CloseIcon,
    arrowRight: ArrowRightIcon,
    calendar: CalendarIcon,
    check: CheckIcon,
    message: MessageIcon,
    quote: QuoteIcon,
};

export function Icon({ name, size, className }) {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
}
