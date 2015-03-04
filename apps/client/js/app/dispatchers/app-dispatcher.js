import Constants from '../constants/constants';
import {Dispatcher} from 'flux';

const PayloadSources = Constants.PayloadSources;

const AppDispatcher = Object.assign(new Dispatcher(), {

  handleServerAction: function (action) {
    const payload = {
      actionType: action.actionType,
      data: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function (action) {
    const payload = {
      actionType: action.actionType,
      text: action.text
    };
    this.dispatch(payload);
  }

});

export default AppDispatcher;