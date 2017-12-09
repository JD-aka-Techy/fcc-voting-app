import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../store';

// components
import AppBar from 'material-ui/AppBar';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';

// actions
import { logOut } from '../actions/user';

class _SiteHeader extends Component {

  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logOut } = this.props;
    debugger
    logOut();
    history.push('/');
  }

  render() {
    const { loggedIn, logout } = this.props;
    return (
      <AppBar
        title="App Title"
        showMenuIconButton={false}
        iconElementRight={
          loggedIn ? <span onClick={this.handleLogOut}>logout</span>: <Link to="/login">log in</Link>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.Authorized
});
const mapDispatchToProps = dispatch => bindActionCreators({
  logOut
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(_SiteHeader);
