import { combineReducers } from 'redux';
import { reducer as registration } from 'page/SignUp/registrationReducer';
import { connectRouter } from 'connected-react-router';
import { reducer as signIn } from 'page/Login/loginReducer';
import { reducer as account } from 'page/Account/accountReducer';

export const rootReducer = (history) =>
  combineReducers({
    account,
    registration,
    signIn,
    router: connectRouter(history),
  });
