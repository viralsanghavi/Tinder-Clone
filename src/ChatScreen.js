import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'
export const ChatScreen = () => {
    const [input, setInput] = useState("")
    const [message, setMessage] = useState([
        {
            name: "Viral",
            image: '...',
            message: 'Whats up ',
        },
        {
            name: "Viral",
            image: '...',
            message: 'Whats up ',
        },
        {
            name: "Viral",
            image: '...',
            message: 'Whats up ',
        },
        {
            message: 'Whats up ',
        },
    ])
    const handleSend = e => {
        e.preventDefault()
        setMessage([...message, { message: input }])
        setInput('')
    }
    return (
        <div className="chatScreen">
            <p>You Matches with ELLEN on 10/08/20</p>
            {
                message.map(
                    mes => mes.name ? (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreem__image"
                                alt={mes.name}
                                src={mes.image}
                            />

                            <p className="chatScreem__text">{mes.message}</p>
                        </div>
                    ) :
                        (
                            <div className="chatScreen__message">

                                <p className="chatScreem__textUser">{mes.message}</p>
                            </div>
                        )
                )
            }
            <form className="chatScreen__input" >

                <input value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text"
                    placeholder="Type a message" />
                <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
            </form>
        </div>
    )
}
