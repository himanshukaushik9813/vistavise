type IconProps = {
    size?: number;
    strokeWidth?: number;
    className?: string;
};

type BrandIconProps = {
    size?: number;
    className?: string;
};

function StrokeIcon({
    size = 18,
    strokeWidth = 2,
    className,
    children,
}: IconProps & { children: React.ReactNode }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

function BrandIcon({
    size = 18,
    className,
    children,
}: BrandIconProps & { children: React.ReactNode }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function BarChartIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <line x1="4" x2="4" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="20" x2="20" y1="20" y2="13" />
            <line x1="2" x2="22" y1="20" y2="20" />
        </StrokeIcon>
    );
}

export function TrendingUpIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
        </StrokeIcon>
    );
}

export function TargetIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" />
        </StrokeIcon>
    );
}

export function LightbulbIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M8 14a6 6 0 1 1 8 0c-1.1 1-1.6 2-1.8 4h-2.4c-.2-2-.7-3-1.8-4Z" />
        </StrokeIcon>
    );
}

export function HomeIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
        </StrokeIcon>
    );
}

export function UsersIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
            <path d="M14 20a4 4 0 0 1 7.5-2" />
        </StrokeIcon>
    );
}

export function BriefcaseIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" />
            <path d="M3 12h18" />
        </StrokeIcon>
    );
}

export function GlobeIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
        </StrokeIcon>
    );
}

export function RocketIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M6 14c-1 3-1.5 4.8-1 5.3.5.5 2.3 0 5.3-1l8-8a6.5 6.5 0 0 0 1.7-6.1 6.5 6.5 0 0 0-6.1 1.7l-8 8Z" />
            <path d="M10 8 16 14" />
            <path d="M6.5 17.5 3 21" />
            <path d="M2 22c3-1 5-2 6-5" />
        </StrokeIcon>
    );
}

export function PodcastIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M8 14a4 4 0 1 1 8 0" />
            <path d="M6 14a6 6 0 1 1 12 0" />
            <path d="M4 14a8 8 0 1 1 16 0" />
            <line x1="12" x2="12" y1="15" y2="20" />
            <circle cx="12" cy="21" r="1" />
        </StrokeIcon>
    );
}

export function PlayIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <polygon points="8 6 18 12 8 18 8 6" />
        </StrokeIcon>
    );
}

export function MailIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 8 9 6 9-6" />
        </StrokeIcon>
    );
}

export function PhoneIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.2a16 16 0 0 0 4.8 4.8l1.2-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
        </StrokeIcon>
    );
}

export function MapPinIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
        </StrokeIcon>
    );
}

export function CalendarIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <line x1="16" x2="16" y1="3" y2="7" />
            <line x1="8" x2="8" y1="3" y2="7" />
            <line x1="3" x2="21" y1="11" y2="11" />
        </StrokeIcon>
    );
}

export function ArrowRightIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <line x1="4" x2="20" y1="12" y2="12" />
            <polyline points="14 6 20 12 14 18" />
        </StrokeIcon>
    );
}

export function CheckCircleIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <circle cx="12" cy="12" r="9" />
            <polyline points="8 12 11 15 16 10" />
        </StrokeIcon>
    );
}

export function SunIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <circle cx="12" cy="12" r="4" />
            <line x1="12" x2="12" y1="2" y2="4" />
            <line x1="12" x2="12" y1="20" y2="22" />
            <line x1="4.9" x2="6.3" y1="4.9" y2="6.3" />
            <line x1="17.7" x2="19.1" y1="17.7" y2="19.1" />
            <line x1="2" x2="4" y1="12" y2="12" />
            <line x1="20" x2="22" y1="12" y2="12" />
            <line x1="4.9" x2="6.3" y1="19.1" y2="17.7" />
            <line x1="17.7" x2="19.1" y1="6.3" y2="4.9" />
        </StrokeIcon>
    );
}

export function MoonIcon(props: IconProps) {
    return (
        <StrokeIcon {...props}>
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </StrokeIcon>
    );
}

export function SpotifyIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.6 14.5a.9.9 0 0 1-1.2.3 9 9 0 0 0-7.3-.9.9.9 0 1 1-.5-1.7 10.8 10.8 0 0 1 8.8 1.1.9.9 0 0 1 .2 1.2Zm1.2-2.7a1 1 0 0 1-1.3.4 11.3 11.3 0 0 0-9.2-1.1 1 1 0 0 1-.6-2 13.3 13.3 0 0 1 10.8 1.3 1 1 0 0 1 .3 1.4Zm.1-2.8A13.8 13.8 0 0 0 6.4 9.5a1.1 1.1 0 0 1-.7-2.2 16 16 0 0 1 13.3 1.6 1.1 1.1 0 1 1-1.1 2.1Z" />
        </BrandIcon>
    );
}

export function YouTubeIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29.6 29.6 0 0 0 2 12a29.6 29.6 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.6 29.6 0 0 0 22 12a29.6 29.6 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </BrandIcon>
    );
}

export function LinkedInIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M5.2 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM3.6 9.5h3.2V20H3.6V9.5Zm5 0h3.1V11h.1a3.4 3.4 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.8V20h-3.2v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H8.6V9.5Z" />
        </BrandIcon>
    );
}

export function InstagramIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm10 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm-5.5 2A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 1.8a2.8 2.8 0 1 0 2.8 2.8A2.8 2.8 0 0 0 12 9.2Z" />
        </BrandIcon>
    );
}

export function FacebookIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M13.5 21v-7h2.3l.5-3h-2.8V9.1c0-.8.3-1.4 1.6-1.4h1.3V5.1A16.7 16.7 0 0 0 14.6 5c-2.7 0-4.3 1.6-4.3 4.5V11H8v3h2.3v7h3.2Z" />
        </BrandIcon>
    );
}

export function XIcon(props: BrandIconProps) {
    return (
        <BrandIcon {...props}>
            <path d="M18.2 3h2.9l-6.4 7.3L22 21h-5.6l-4.4-6-5.2 6H3.9l6.8-7.8L2 3h5.7l4 5.5L18.2 3Z" />
        </BrandIcon>
    );
}
