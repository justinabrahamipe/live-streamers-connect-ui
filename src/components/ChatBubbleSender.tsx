import React from "react";

const ChatBubbleSender = ({ message }: { message: string }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">2 hour ago</time>
      </div>
      <div className="chat-bubble">{message}</div>
    </div>
  );
};

export default ChatBubbleSender;
