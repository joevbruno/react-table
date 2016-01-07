import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const finalCreateStore = compose(
  // Middleware you want to use in production:
  applyMiddleware(thunkMiddleware, promiseMiddleware),
  // Other store enhancers if you use any
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
