import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';

export default class Root extends React.Component {
  static propTypes = {
    store: React.PropTypes.any.isRequired
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
       <Routes />
      </Provider>
    );
  }
}
