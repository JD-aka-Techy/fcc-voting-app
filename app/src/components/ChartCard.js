import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import PieChart from '../charts/PieChart';

function ChartCard({ name, description, result, created, endDate }) {
  const data = JSON.parse(result);
  const finish = endDate ?  `-  ${moment(endDate).format('DD/MM/YY')}` : '';
  const canVote = !endDate || moment().isBefore(moment(endDate));
  return (
    <Card style={{ maxWidth: '400px' }}>

      <CardHeader
        title={name}
        subtitle={`${moment(created).format('DD/MM/YY')} ${finish}`}
      />

      <CardMedia style={{ width: '80%', margin: '0 auto' }}>
        
          <PieChart data={data}/>

      </CardMedia>

      <CardText>{description}</CardText>

    </Card>
  );
}

export default ChartCard;

