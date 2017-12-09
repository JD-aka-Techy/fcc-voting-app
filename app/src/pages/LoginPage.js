import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { history } from '../store';

// actions
import { login } from '../actions/user';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(res) {
    const { login } = this.props;
    login(res).then(() => {
      history.push('/myPolls');
    })
  }

  render() {
    return (
      <div>

        <h1>login page</h1>

        <GoogleLogin
          clientId="969491308716-m9bj7gn6sjgc46o596o01ck6asedktle.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.handleLogin}
          onFailure={(res) => console.log(res)}
          scope="profile"
        />

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(null, mapDispatchToProps)(LoginPage);
