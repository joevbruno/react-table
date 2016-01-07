import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../containers/main';
import Baseline from '../modules/baseline/containers';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Baseline} />
        </Route>
      </Router>
   );
  }
}
