import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import utils from './config/utils';
Promise.resolve(utils).then(() => {
  require('./config/components');
  const configureStore = require('./store/configStore');
  // DOM location
  const rootElement = document.getElementById('app');
  const store = configureStore();
  // Attach to DOM
  render(<Root store={store} />, rootElement);
});
