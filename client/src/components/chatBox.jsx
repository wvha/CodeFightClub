import React from 'react';
import PropTypes from 'prop-types';

const ChatBox = ({ messages, userMessage, handleSubmit, handleInputChange }) => {

  messages = messages.map(message => 
    <div className="chat-message">
      <p className="chat-contents">
        <span className="chat-user">
          { message.user }
        </span>
        <span className="chat-time">
          { message.time }
        </span>
      </p>
      <p className="chat-contents">
        { message.contents }
      </p>
    </div>
    );

  return (
    <div className="chat-wrapper" >
      <div className="chat-form">
        <form 
            className="chat-input"
            action=""
        >
          <textarea 
            name="message"
            type="text" 
            className="chat-input"
            placeholder=""
            value={ userMessage }
            onChange={ handleInputChange }
            className="chat-input"
          />
          <button 
            className="chat-button"
            onClick={ handleSubmit }  
          >
            Send
          </button>
        </form>
      </div>
      <div className="chat-spacer" />
      <div className="chat-messages">
        { messages }
      </div>
    </div>
  )
};

ChatBox.propTypes = {
  messages: PropTypes.array,
  userMessage: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ChatBox;

