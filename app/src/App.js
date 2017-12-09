import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import './css/main.css';

// components
import { Switch, Route } from 'react-router'

// components
import SiteHeader from './components/SiteHeader';
import SiteNav from './components/SiteNav';
// pages
import HomePage from './pages/HomePage';
import MyPollsPage from './pages/MyPollsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

function App({ loggedIn }) {
  return (
    <div className="App">
      <SiteHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mypolls" component={MyPollsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>

      {
        loggedIn ? (
          <div className="c-site-nav" >
            <SiteNav />
          </div>
        ) : null

      }
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.Authorized
})

export default withRouter(connect(mapStateToProps, null)(App));
