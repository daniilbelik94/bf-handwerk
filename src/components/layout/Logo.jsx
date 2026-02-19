export default function Logo({ size = 40 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__logo-mark"
            aria-hidden="true"
        >
            {/* Rounded square background with gradient */}
            <defs>
                <linearGradient id="logoBg" x1="0" y1="0" x2="48" y2="48">
                    <stop offset="0%" stopColor="#d4a574" />
                    <stop offset="100%" stopColor="#b07a4a" />
                </linearGradient>
            </defs>
            <rect width="48" height="48" rx="12" fill="url(#logoBg)" />

            {/* Roof / house roof shape — triangle meeting at the top */}
            <path
                d="M24 8L38 22H10L24 8Z"
                fill="white"
                opacity="0.2"
            />

            {/* Bold B letter — left */}
            <text
                x="16.5"
                y="37"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="22"
                fill="white"
                letterSpacing="-1"
            >
                B
            </text>

            {/* Ampersand — tiny, accent */}
            <text
                x="24"
                y="30"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="600"
                fontSize="9"
                fill="rgba(255,255,255,0.5)"
            >
                &amp;
            </text>

            {/* Bold F letter — right */}
            <text
                x="31.5"
                y="37"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="22"
                fill="white"
                letterSpacing="-1"
            >
                F
            </text>

            {/* Subtle horizontal line under the roof — construction beam */}
            <rect x="10" y="21" width="28" height="2" rx="1" fill="white" opacity="0.3" />
        </svg>
    );
}
