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
      user: {}
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  clickHandler (e) {
    console.log(this.state.solution);
    $.ajax({
      method: 'POST',
      url: '/challenge',
      data: {
        solution: this.state.solution
      }
    }).done((res) => {
      console.log(res);
    });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render () {
    return (
      <div className="container" id="main">
        <Header username={this.state.user} />
        <Body change={this.onChange} />
        <Footer />
      </div>
    );
  }
}

export default App
