import * as React from "react";
import { ChatWidgetProps } from "./types";
import { Button } from "../ui/elements/Button";
import { Text, textVariants } from "../ui/elements/Text";
import { Input } from "../ui/elements/form/Input";
import { cn } from "@/src/lib/utils";
import { ChatInput } from "./ChatInput";
import { MessageProps } from "@/src/types";
import { AgentHeader } from "./AgentHeader";
import { ChatMessage } from "./ChatMessage";

const initialMessages: MessageProps[] = [
  {
    text: "Lorem ipsum dolor sit amet consectetur lacus luctus praesent ridiculus diam",
    time: "12:34",
    sender: "Monica",
    isUser: false,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/77b602c2d9ef2097834dd9a3f15dca3cdadd7d6f4889cd9edd663b5bdaa8f923?apiKey=7d86919144c846178294e9d8a4321223&",
  },
  {
    text: "Mi aenean tristique ornare venenatis auctor etiam auctor vitae.",
    time: "12:37",
    sender: "Alex",
    isUser: true,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/5d7f9e9e4b311664c3dfc06d03fdeb5f24505a53a9edc2bd719d8bce217f2c8e?apiKey=7d86919144c846178294e9d8a4321223&",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur lacus luctus praesent ridiculus diam",
    time: "12:34",
    sender: "Monica",
    isUser: false,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/77b602c2d9ef2097834dd9a3f15dca3cdadd7d6f4889cd9edd663b5bdaa8f923?apiKey=7d86919144c846178294e9d8a4321223&",
  },
  {
    text: "Lidiculus diam egestas gravida aenean tristique ornare venenatis auctor.",
    time: "12:37",
    sender: "Alex",
    isUser: true,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/5d7f9e9e4b311664c3dfc06d03fdeb5f24505a53a9edc2bd719d8bce217f2c8e?apiKey=7d86919144c846178294e9d8a4321223&",
  },
];

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  logoSrc,
  heading,
  description,
  buttons,
  privacyText,
}) => {
  const [isWaiting, setIsWaiting] = React.useState(false);
  const [startChat, setStartChat] = React.useState(false);
  const handleStartChat = () => {
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
      setStartChat(true);
    }, 3000);
  };

  const [chatTopic, setChatTopic] = React.useState(false);
  const handleChatTopic = () => {
    setChatTopic(true);
  };
  const [messages, setMessages] =
    React.useState<MessageProps[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: MessageProps = {
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "Alex",
      isUser: true,
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/5d7f9e9e4b311664c3dfc06d03fdeb5f24505a53a9edc2bd719d8bce217f2c8e?apiKey=7d86919144c846178294e9d8a4321223&",
    };
    setMessages([...messages, newMessage]);
    if (chatRoom == false) {
      handleChatRoom();
    }
  };

  const [chatRoom, setChatRoom] = React.useState(true);
  const handleChatRoom = () => {
    setChatRoom(true);
  };

  return (
    <>
      {startChat === false ? (
        <div className="flex min-h-[500px]  flex-col self-stretch rounded-md shadow-sm max-w-[400px] scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent">
          <div className="flex overflow-hidden flex-col px-5 pt-8 pb-20 w-full text-white bg-neutral min-h-[240px]">
            {isWaiting ? (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a4c194dbe5642c168b20e9bc78cef18731496dcd6970113fcc8d0f6000d0d010?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
                alt=""
                className="object-contain gap-0 max-w-full aspect-[2.5] w-[100px]"
              />
            ) : (
              <img
                loading="lazy"
                src={logoSrc}
                alt=""
                className="object-contain gap-0 max-w-full aspect-[2.5] w-[100px]"
              />
            )}

            <h2 className="mt-5 text-xl font-semibold">{heading}</h2>
            <Text variant="body">{description}</Text>
          </div>
          {isWaiting == false && (
            <div className="flex overflow-hidden flex-col flex-1 px-5 py-8 w-full bg-white rounded-none border border-solid border-neutral-300">
              <div className="flex flex-col w-full text-sm text-center text-zinc-900">
                <Button
                  variant="default"
                  btnType="secondary"
                  outline={true}
                  className="w-full mb-5"
                  onClick={() => handleStartChat()}
                >
                  Chat Now
                </Button>
                <Button
                  variant="default"
                  btnType="secondary"
                  outline={true}
                  className="w-full"
                  onClick={() => {}}
                >
                  I’m Not Sure I’m Ready Yet
                </Button>
              </div>
              <Text variant="small" className="text-neutral mt-5">
                {privacyText}
              </Text>
            </div>
          )}
        </div>
      ) : (
        <div className="flex min-h-[500px] flex-col self-stretch rounded-md shadow-sm max-w-[400px] scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent">
          <div className="p-5 bg-neutral flex items-center gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a4c194dbe5642c168b20e9bc78cef18731496dcd6970113fcc8d0f6000d0d010?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
              alt=""
              className="object-contain gap-0 max-w-full aspect-[2.5] w-[100px]"
            />
            <Text className="text-white" variant="card_title_large">
              Welcome to Customer Support
            </Text>
          </div>
          {!chatTopic ? (
            <div
              className="p-5 flex-auto flex flex-col justify-between w-auto
               bg-white"
            >
              <div className="">
                <Text className="mb-8" variant="card_title_small">
                  Hello there, to start the live chat please fill the following.
                </Text>
                <div className="flex flex-col gap-5">
                  <Input type="text" name="name" placeholder="Full Name" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="mt-auto flex justify-end">
                <Button
                  onClick={() => handleChatTopic()}
                  outline
                  variant={"default"}
                  btnType={"secondary"}
                  className=" mt-auto"
                >
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            <>
              {chatRoom == false ? (
                <div
                  className="p-5 flex-auto flex flex-col justify-between w-auto
                     bg-white"
                >
                  <div className="">
                    <Text className="mb-8" variant="card_title_small">
                      What can we help you with today?
                    </Text>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        className={cn(
                          "border-[0.5px] border-neutral bg-background p-2.5 rounded-sm",
                          textVariants({
                            variant: "small",
                          })
                        )}
                      >
                        I’d like to learn more about talent assessments
                      </button>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <ChatInput onSend={handleSendMessage} />
                  </div>
                </div>
              ) : (
                <div
                  className="flex-auto flex flex-col justify-between w-auto
                bg-white"
                >
                  <div className="flex flex-auto justify-between overflow-hidden flex-col pb-5 w-full bg-white rounded-none border border-solid border-neutral-300">
                    <AgentHeader
                      name="Monica from DOTS Admin"
                      role="Support Agent"
                      avatarSrc="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/77b602c2d9ef2097834dd9a3f15dca3cdadd7d6f4889cd9edd663b5bdaa8f923?apiKey=7d86919144c846178294e9d8a4321223&"
                    />
                    <div className="flex flex-col flex-1 p-5 w-full ">
                      <div className="max-h-[420px] scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent flex  overflow-auto flex-col flex-1 w-full">
                        {messages.map((message, index) => (
                          <ChatMessage key={index} message={message} />
                        ))}
                      </div>
                      <div className="mt-auto flex justify-end">
                        <ChatInput onSend={handleSendMessage} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
