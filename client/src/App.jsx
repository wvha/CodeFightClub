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
        username: '',
        isAdmin: true
      },
      view: 'prompt'
    };
  }

  setUser (user) {
    this.setState({ user: user });
  }

  componentDidUpdate () {
    console.log(this.state);
  }
  
  renderAdmin () {
    this.state.view === 'admin'
      ? this.setState({ view: 'prompt' })
      : this.setState({ view: 'admin' }) //admin renders... click admin again to change state of view back to prompt
  }

  logout () {
    $.get('/logout')
    .done((data) => {
      console.log(data);
      this.setUser('');
    })
    .fail((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div className="container" id="main">
        <Header
          user={this.state.user}
          updateUser={this.setUser.bind(this)}
          logout={this.logout.bind(this)}
          renderAdmin={this.renderAdmin.bind(this)}
          view={this.state.view}
        />
        <Body
          isLoggedIn={!!this.state.user.username}
          view={this.state.view}
        />
        <Footer 
        />
      </div>
    );
  }
}

export default App
