import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/devtools';
import promiseMiddleware from 'redux-promise';
import reduxUnhandledAction from 'redux-unhandled-action';
const callback = (action) => console.log('%c Action did not change Redux state! ', 'background: #222; color: #bada55', action);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    promiseMiddleware,
    reduxUnhandledAction(callback)
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
