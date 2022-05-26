import {createAction, handleActions} from 'redux-actions';

const USERSETTINGS_ADD = 'userSettings/ADD';

export const userSettingsAdd = createAction(
  USERSETTINGS_ADD,
  setting => setting,
);

const initialState = {
  userSettings: {
    gender: '',
    age: 0,
    oid: [],
  },
};

const userSettings = handleActions(
  {
    [USERSETTINGS_ADD]: (state, {payload: setting}) => ({
      ...state,
      userSettings: setting,
    }),
  },
  initialState,
);

export default userSettings;
