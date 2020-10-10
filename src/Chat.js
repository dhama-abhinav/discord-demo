import React, { useEffect, useState } from "react";
import "./Chat.css";
import { ChatHeader } from "./ChatHeader";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import CardGiftcardSharpIcon from "@material-ui/icons/CardGiftcardSharp";
import GifSharpIcon from "@material-ui/icons/GifSharp";
import EmojiEmotionsSharpIcon from "@material-ui/icons/EmojiEmotionsSharp";
import { ChatMessage } from "./ChatMessage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase";

export const Chat = () => {
  const user = useSelector(selectUser);
  //pulling information from appSlice to update the header after clicking on the channel name  of sidebar
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  //working for input
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <ChatMessage
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
           />
        ))}
        {/* <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage /> */}
      </div>
      <div className="chat__input">
        <AddCircleSharpIcon />
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            onClick={sendMessage}
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardSharpIcon />
          <GifSharpIcon />
          <EmojiEmotionsSharpIcon />
        </div>
      </div>
    </div>
  );
};
