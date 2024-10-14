import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client'
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const socket = io.connect('http://localhost:5000');
const ChatRoom = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit('join_room', roomId);

        socket.on('receive_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off();
        };
    }, [roomId])

    const sendMessage = (message) => {
        const messageData = { room: roomId, message };
        socket.emit('send_message', messageData);
    }

   
  return (
    <div className='chat-room'>
        <h2>Room: {roomId}</h2>
        <MessagesList messages={messages} />
        <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;