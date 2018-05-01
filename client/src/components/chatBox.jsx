import React from 'react';
import PropTypes from 'prop-types';

const ChatBox = ({ messages, userMessage, handleSubmit, handleInputChange }) => {
  console.log('usermessage', userMessage)

  messages = [...messages].reverse().map(message => 
    <div style={{width: "90%", 'margin-top': '5px','background-color': '#444444'}}>
      <p className="chat-contents">
        <span className="chat-user">
          { message.user }
        </span>
      </p>
      <p className="chat-contents">
        { message.contents }
      </p>
    </div>
  );

  return (

  
    <div style={{'width': 'calc(100% - 10px)', 'background-color': '#19191A', height: 'calc(100% - 106px)', 'margin-left': '10px'}}className="container fullw column" id="promptViewContent">
        <form 
            action=""
        >
          <textarea 
            name="message"
            type="text" 
            placeholder=""
            value={ userMessage }
            onChange={ handleInputChange }
            className="chat-input"
            style={{width: '535px', 'margin-top': '20px', 'margin-left': '20px', 'margin-right': '20px'}}
          />
          <button 
            onClick={ handleSubmit }  
            style={{height: '35px', width: '535px', 'margin-left': '20px', 'margin-right': '20px'}}
          >
            Send
          </button>
        </form>
      <div className="chat-spacer" />
      <div style={{'width': '535px', 'margin-left': '20px', 'margin-right': '0px', 'margin-bottom': '20px', 'overflow': 'auto'}}>
      { messages }
      </div>
      
    </div>
  )
};

const renderButton = (props) => {
  if (this.state.view === 'prompt') {
    return (
      <div style={{'width': 'calc(100% - 10px)', 'background-color': '#19191A', height: 'calc(100% - 106px)', 'margin-left': '10px'}}className="container fullw column" id="promptViewContent">
        <h1 id="prompt-title">{this.state.prompt.title}</h1>
        <p id="prompt-body">{this.state.prompt.body}</p>
      </div>
    )
  } else if (this.state.view === 'results') {
    return (
      <Results results={this.state.results}/>
    )
  } else if (this.state.view === 'scoreboard') {
    return <Scoreboard scoreboard={this.props.scoreboard}/>
  } else if (this.state.view === 'chat') {
    return (
      <ChatBox 
        messages={ this.props.messages }
        userMessage={ this.props.userMessageChat }
        handleInputChange={ this.props.handleInputChangeChat }
        handleSubmit={ this.props.handleSubmitChat }
      />
    );
  }
}

ChatBox.propTypes = {
  messages: PropTypes.array,
  userMessage: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ChatBox;

