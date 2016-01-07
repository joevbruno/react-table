import { registerUtils } from 'core-utilz';
import { Actions, ActionTypes, registerAction } from '../../actions';
import api from '../api';
import handleError from '../../utils/handleError';
import request from '../../utils/request';
import inScope from '../../utils/inScope';
import tableHelpers from '../../utils/table-helpers';

const utils = {
  handleError,
  request,
  Actions,
  ActionTypes,
  registerAction,
  api,
  inScope,
  tableHelpers
};
export default registerUtils(utils);
