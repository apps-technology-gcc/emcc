export type IconType = "add" | "remove" | "edit" | "delete" | "search";
export interface NavigationItemProps {
  text: string;
}

export interface NavigationSectionProps {
  title?: string;
  items: string[];
}
export interface FooterLinkProps {
  text: string;
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}

export interface SocialLinkProps {
  name: string;
}

export interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
  onManage: () => void;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface ChatWidgetProps {
  logoSrc: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  privacyText: string;
}

export interface MessageProps {
  text: string;
  time: string;
  sender: string;
  isUser: boolean;
  avatarSrc: string;
}

export interface ChatMessageProps {
  message: MessageProps;
}

export interface AgentHeaderProps {
  name: string;
  role: string;
  avatarSrc: string;
}

export interface ChatInputProps {
  onSend: (message: string) => void;
}
export interface ButtonProps {
  variant: "outline" | "solid";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface LocationSwitcherProps {
  country: string;
  onContinue?: () => void;
  onSwitch?: () => void;
}

export interface BadgeProps {
  icon: string;
  text: string;
  linkText: string;
  linkIcon: string;
}

export interface HeroSectionProps {
  badge: BadgeProps;
  title: string;
  description: string;
  ctaText: string;
  heroImage: string;
}
export interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export interface WelcomeHeaderProps {
  title: string;
  description: string;
}

export interface StrengthCardProps {
  imageSrc: string;
  title: string;
  iconSrc?: string;
}

export interface StrengthsSectionProps {
  strengths: StrengthCardProps[];
}

export interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  imageAlt: string;
}

export interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}
