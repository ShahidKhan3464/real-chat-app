import React from 'react'
import '..//style/Input.css'

const Input = ({ message, setMessage, sendMessage }) => {

    return (
        <form className='form'>
            <input
                className="input"
                value={message}
                placeholder="Type a message..."
                onChange={e => setMessage(e.target.value)}
                // onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input