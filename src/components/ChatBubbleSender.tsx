import React from "react";
import getRelativeTimeString from "../common/getRelativeTimeString";

type ChatBubbleSender = {
  chat: Chat;
};

function ChatBubbleSender({ chat }: ChatBubbleSender) {
  return (
    <div className="chat chat-end" key={chat?.id}>
      <div className="chat-header">
        {chat?.sender}
        <time className="text-xs opacity-50 ml-2">
          {getRelativeTimeString(chat?.created?.toString())}
        </time>
      </div>
      <div className="chat-bubble">{chat?.message}</div>
    </div>
  );
}

export default ChatBubbleSender;
