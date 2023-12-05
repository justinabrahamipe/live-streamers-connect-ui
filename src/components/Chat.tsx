import Navbar from "../components/Navbar";
import { useState } from "react";
import ChatBubbleSender from "./ChatBubbleSender";

// const WS_URL = "ws://localhost:8080";
// const WS_URL = "ws://live-streamers-connect-api.onrender.com/ws";
const WS_URL = process.env.REACT_APP_WS || "";
function Chat() {
  const ws = new WebSocket(WS_URL);
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<Chat[]>([]);

  ws.addEventListener("message", (event) => {
    console.log(event);
  });

  const handleSendMessage = () => {
    if (messageText === "") return;
    const message: Chat = {
      room: "some room",
      id: "no id",
      sender: "Justin",
      message: messageText,
      created: new Date(),
      lastUsed: new Date(),
    };
    // ws.addEventListener("open", () => {
    console.log("Connected to WebSocket server");
    ws.send(JSON.stringify(message));
    // });
    setMessageText("");
    ws.addEventListener("message", (e) => {
      const data = JSON.parse(e?.data);
      console.log(data);
      setReceivedMessages(data);
    });
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="bg-slate-900 min-h-max">
        {receivedMessages?.map((chat: Chat) => (
          <ChatBubbleSender chat={chat} />
        ))}
      </div>
      <div className="flex flex-row gap-2 m-2 ">
        <textarea
          name="message"
          className="textarea textarea-bordered w-11/12"
          placeholder="Type message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="btn max-h-max w-1/12 h-20"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/dotty/20/filled-sent.png"
            alt="filled-sent"
          />
        </button>
      </div>
    </main>
  );
}

export default Chat;
