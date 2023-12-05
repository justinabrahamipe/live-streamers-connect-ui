import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import AddRoom from "./components/AddRoom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddRoom />
      <Chat />
    </div>
  );
}

export default App;
