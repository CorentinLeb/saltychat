import React from 'react'
import { auth } from '../services/firebase';

const ChatMessage = ({message}) => {
    const { text, uid, photoURL, displayName } = message;

    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="User photo"/>
            <div>
            <p>{displayName}</p>
            <p>{text}</p>
            </div>  
        </div>
    )
}

export default ChatMessage
