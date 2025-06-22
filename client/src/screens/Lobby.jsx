import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate =useNavigate();

  const handleSubmitForm = useCallback(
    (ev) => {
      ev.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );
  
  const handleJoinRoom = useCallback((data)=>{
    const {email, room} = data
    navigate(`room/${room}`)
  },[navigate])

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return ()=>{
      socket.off("room:join",handleJoinRoom)
    }
  }, [socket,handleJoinRoom]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          type="text"
          id="room"
          placeholder="Enter your room number"
        />
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
