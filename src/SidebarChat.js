import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './SidebarChat.css';
import { Avatar } from "@material-ui/core"
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat Room");
        if (roomName) {
            // addNewChat(roomName);
            db.collection('rooms').add({
                name: roomName,
                // users: [id]
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last Message..</p>
                </div>
            </div>
        </Link>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;
