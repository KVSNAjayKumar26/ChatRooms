import React from 'react'

const MessagesList = ({ messages }) => {
  return (
    <div className='messages-list'>
        {messages.map((msg, index) => (
            <div className='message' key={index}>
                {msg.message}
                </div>
        ))}
    </div>
  )
}

export default MessagesList;