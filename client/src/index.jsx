import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


ReactDOM.render(<App />, document.getElementById('app'))


/*
 * For easily rendering a single component
 * 
 */

 /*
**************************** CHAT BOX ****************************

import ChatBox from './components/chatBox.jsx';

ReactDOM.render(
  <ChatBox
    messages={[
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'},
      {user: 'will', contents: 'this is a cool site but I think you all will lose because I am better at trash talking'}
    ]}
    userMessage={'userMessage'}
    handleInputChange={() => console.log('handle input change')}
    handleSubmit={() => console.log('handle submit')}
  />, 
  document.getElementById('app')
);
*/