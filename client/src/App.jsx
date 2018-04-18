import React, { Component } from 'react';
import Modal from 'react-modal';
import AceEditor from 'react-ace';
import brace from 'brace';
import $ from 'jquery';
import 'brace/theme/cobalt';
import 'brace/mode/javascript';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';

Modal.setAppElement('#app');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: null
      }
    };
  }

  // componentDidUpdate () {
  //   $.get('loggedIn')
  //   .done((data) => {
  //     if (this.state.user.username !== data) {
  //       this.setState
  //     }
  //   })
  //   .fail((err) => {
  //     console.log('this is an error', err)
  //   });
  // }

  setUser(user) {
    this.setState({ user: user });
  }

  render () {
    return (
      <div className="container" id="main">
        <Header user={this.state.user} updateUser={this.setUser.bind(this)} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App
