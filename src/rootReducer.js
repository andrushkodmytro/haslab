import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as registration } from 'page/SignUp/registrationReducer';
import { reducer as signIn } from 'page/Login/loginReducer';
import { reducer as account } from 'page/Account/accountReducer';
import { reducer as productCreate } from 'page/ProductCreate/productCreateReducer';
import { reducer as productsPreview } from 'page/ProductsPreview/productsPreviewReducer';

export const rootReducer = (history) =>
  combineReducers({
    account,
    registration,
    signIn,
    productCreate,
    productsPreview,
    router: connectRouter(history),
  });
