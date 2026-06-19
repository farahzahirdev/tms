import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function Icon({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} />;
}

export function PhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <Icon size={size} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function CheckIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2.5} strokeLinecap="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}

export function ArrowRightIcon({ size = 24, ...props }: IconProps) {
  return (
    <Icon size={size} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  );
}

export function ShieldIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </Icon>
  );
}

export function HeartIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
  );
}

export function ClockIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function UsersIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

export function SmileIcon({ size = 24, stroke = "#C0321C", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={1.8} strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </Icon>
  );
}

export function ShieldCheckIcon({ size = 24, stroke = "#E8711A", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  );
}

export function CircleCheckIcon({ size = 24, ...props }: IconProps) {
  return (
    <Icon size={size} stroke="#fff" strokeWidth={2.5} strokeLinecap="round" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="M8 12l3 3 5-5" />
    </Icon>
  );
}

export function StarIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F4A018" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function MailIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </Icon>
  );
}

export function MapPinIcon({ size = 24, stroke = "#F4A018", ...props }: IconProps & { stroke?: string }) {
  return (
    <Icon size={size} stroke={stroke} strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function TrustIcon({ type, size = 21 }: { type: "shield" | "heart" | "clock" | "users"; size?: number }) {
  switch (type) {
    case "shield":
      return <ShieldIcon size={size} />;
    case "heart":
      return <HeartIcon size={size} />;
    case "clock":
      return <ClockIcon size={size} />;
    case "users":
      return <UsersIcon size={size} />;
  }
}

export function BenefitIcon({ type, size = 24 }: { type: "heart" | "smile" | "shield" | "clock"; size?: number }) {
  switch (type) {
    case "heart":
      return <HeartIcon size={size} stroke="#C0321C" />;
    case "smile":
      return <SmileIcon size={size} />;
    case "shield":
      return <ShieldCheckIcon size={size} stroke="#C0321C" />;
    case "clock":
      return <ClockIcon size={size} stroke="#C0321C" />;
  }
}
