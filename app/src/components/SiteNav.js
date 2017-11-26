import React from 'react';
import { history } from '../store';
import { withRouter } from 'react-router-dom'

// components
import { NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconHome from 'material-ui/svg-icons/action/home';
import IconPieChart from 'material-ui/svg-icons/editor/pie-chart';
import Paper from 'material-ui/Paper';

const PATHS = {
  '/': 1,
  '/profile': 2,
  '/mypolls': 0
}

function SiteNav({ location }) {
  return (
    <BottomNavigation selectedIndex={PATHS[location.pathname]}>

      <BottomNavigationItem
        label="MY POLLS"
        icon={<IconPieChart />}
        onClick={() => history.push('/mypolls')}
      />

      <BottomNavigationItem
        label="HOME"
        icon={<IconHome />}
        onClick={() => history.push('/')}
      />

      <BottomNavigationItem
        label="PROFILE"
        icon={<IconPerson />}
        onClick={() => history.push('/profile')}
      />

    </BottomNavigation>
  );

}



export default withRouter(SiteNav);
