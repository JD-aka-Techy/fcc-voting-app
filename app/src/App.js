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

function App() {
  return (
    <div className="App">
      <SiteHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mypolls" component={MyPollsPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>

      <div className="c-site-nav" >
        <SiteNav />
      </div>
    </div>
  );
}

export default withRouter(App);
