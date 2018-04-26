import React from 'react';

const ChatBox = ({ messages }) => {
  const messages = this.state.messages.map(message => <li>{ message }</li>);

  return (
    <div style={ {backgroundColor: 'black'} }>
      <ul className="messages">
        { messages }
      </ul>
      <form action="">
        <input 
          name="message"
          type="text" 
          className="m"
          placeholder="send a message"
          value={ this.state.userMessage }
          onChange={ this.handleInputChangeChat }
        />
        <button 
          className="send-button"
          onClick={ this.handleSubmit }  
        >
          Send
        </button>
      </form>
    </div>
  )
};

export default ChatBox;