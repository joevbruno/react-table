import { inScope, ActionTypes } from 'core-utilz';
require('../actions');
const scope = ['Baseline'];
const {
  SEARCH_BASELINES,
  FILTER_BASELINES,
  GROUP_BASELINES,
  SORT_BASELINES,
  REQUEST_BASELINES,
  RECEIVE_BASELINES } = ActionTypes.Baseline;

const initialState = { items: null };

export default function BaselineReviewReducer(state = initialState, action) {
  if (!inScope(action, scope)) { return state; }
  switch (action.type) {
  case REQUEST_BASELINES:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_BASELINES:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    };
  case SEARCH_BASELINES:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    };
  case FILTER_BASELINES:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    };
  case GROUP_BASELINES:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    };
  case SORT_BASELINES:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    };
  default:
    return state;
  }
}
