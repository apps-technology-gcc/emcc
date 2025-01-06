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
