import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import DevTools from '../devtools';

export default class Root extends React.Component {
  static propTypes = {
    store: React.PropTypes.any.isRequired,
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
        <Routes/>
         <DevTools />
        </div>
      </Provider>
    );
  }
}
