import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { loadAllPolls } from '../actions/polls';

// components
import ChartCard from '../components/ChartCard';

class HomePage extends Component {

  constructor(props) {
    super(props);
    props.loadAllPolls();
  }

  render() {
    const { polls } = this.props;
    return (
      <div>
        Home page
        <div className="c-card-grid">

          {polls.map(poll => <ChartCard { ...poll } />)}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadAllPolls
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
