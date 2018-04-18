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

  setUser(user) {
    this.setState({ user: user });
  }

  render () {
    return (
      <div className="container" id="main">
        <Header user={this.state.user} updateUser={this.setUser.bind(this)} />
        <Body change={this.onChange} />
        <Footer />
      </div>
    );
  }
}

export default App
