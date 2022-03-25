import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { io } from 'socket.io-client'
import InfoBar from './InfoBar'
import Messages from './Messages'
import Input from './Input'
import TextContainer from './TextContainer'
import '..//style/Chat.css'

let socket = io('https://server-real-chat-app.herokuapp.com')

const Chat = () => {
    const location = useLocation()
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if (error) return alert(error)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });

    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )
}

export default Chat