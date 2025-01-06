import * as React from "react";
import { ChatWidget } from "./ChatWidget";

export default function ChatWidgetContainer() {
  const chatConfig = {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/872726f49e7996c49cc23fac825486bd99d2c9681b7479884630ebdabfb82546?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&",
    heading: "Can I help answer any questions?",
    description:
      "Wer'e on standby to chat. If you prefer, take your time to look around the site.",
    buttons: [{ text: "Chat Now" }, { text: "I'm Not Sure I'm Ready Yet" }],
    privacyText:
      "In accordance with our privacy policy, this conversation may be recorded for training and quality assurance purposes.",
  };

  return <ChatWidget {...chatConfig} />;
}
