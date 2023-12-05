interface Message {
  id?: string;
  username: string;
  message: string;
}

interface WebSocketEvents {
  onOpen: () => void;
  onMessage: (messageData: string) => void;
  onClose: () => void;
  onError: (error: Error) => void;
}
