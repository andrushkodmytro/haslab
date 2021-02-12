import { combineReducers } from 'redux';
import { reducer as registration } from 'page/SignUp/registrationReducer';
import { reducer as signIn } from 'page/Login/loginReducer';

export default combineReducers({
  registration,
  signIn,
});
