export interface ChatMessage {
  text: string;
  time: string;
  sender: string;
  isUser: boolean;
  avatarSrc: string;
  file_url?: string;
  reaction?: Array<{
    reaction_emoji: string;
  }>;
  msgId?: string;
}

export interface ChatMessageProps {
  message: ChatMessage;
  onDelete?: () => void;
  onEdit?: (msgId: string, content: string) => void;
  refreshChat?: () => void;
  setShowEmoji?: (show: boolean) => void;
}
