import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

function ChartCard({ name, description }) {
  debugger
  return (
    <Card>

      <CardHeader
        title={name}
        subtitle="Subtitle"
      />

      <CardMedia>
        <div>graph goes here</div>
      </CardMedia>

      <CardText>{description}</CardText>

    </Card>
  );
}

export default ChartCard;