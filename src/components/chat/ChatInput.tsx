import { ChatInputProps } from "@/src/types";
import * as React from "react";

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5 justify-center items-center mt-5 w-full"
    >
      <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-5 py-2 my-auto rounded border border-solid basis-0 border-zinc-900 min-w-[240px]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 text-xs text-zinc-900 bg-transparent border-none outline-none"
          placeholder="Type your message here"
          aria-label="Type your message"
        />
        <div className="flex gap-2.5 items-start self-stretch my-auto">
          <button type="button" aria-label="Attach file">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/5264cb640fa9aa2b29c72aff59f5c6006aaa0bc2cc6deee133283749ec3f2c36?apiKey=7d86919144c846178294e9d8a4321223&"
              className="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
          </button>
          <button type="button" aria-label="Add emoji">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b8a44f1db01d7d1deb5a10662841447944caa84af441043b5f28643348860ba0?apiKey=7d86919144c846178294e9d8a4321223&"
              className="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
          </button>
        </div>
      </div>
      <button type="submit" aria-label="Send message">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/745cbdc65239a7936fcc7f206113987cfe4d285990d04d9880472a280fe59afa?apiKey=7d86919144c846178294e9d8a4321223&"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          alt=""
        />
      </button>
    </form>
  );
};
