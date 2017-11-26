import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components
import AppBar from 'material-ui/AppBar';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

class _SiteHeader extends Component {

  render() {
    return (
      <AppBar
        title="App Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
      />
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, bindActionCreators);

export default connect(mapStateToProps, mapDispatchToProps)(_SiteHeader);
