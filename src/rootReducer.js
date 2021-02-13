import { reducer as registration } from 'page/SignUp/registrationReducer';
import { reducer as signIn } from 'page/Login/loginReducer';
import { reducer as account } from 'page/Account/accountReducer';

export const rootReducer = {
  account,
  registration,
  signIn,
};
