import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '..//style/Join.css'

const Join = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && room) return navigate(`/chat?name=${name}&room=${room}`);
        alert('Please enter a name and room name');
    }

    return (
        <>
            <h1 className='header'>Realtime Chat Application</h1>
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
                        </div>
                        <button className="button mt-20" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join