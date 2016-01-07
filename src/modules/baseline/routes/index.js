import React from 'react';
import { IndexRoute } from 'react-router';
import BaselineContainer from '../containers';


export default class BaselineRoutes extends React.Component {
  render() {
    return (
      <IndexRoute component={BaselineContainer} />
    );
  }
}
