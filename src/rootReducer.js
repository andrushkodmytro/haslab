import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as registration } from 'page/SignUp/registrationReducer';
import { reducer as signIn } from 'page/Login/loginReducer';
import { reducer as account } from 'page/Account/accountReducer';
import { reducer as productCreate } from 'page/ProductCreate/productCreateReducer';
import { reducer as productsPreview } from 'page/ProductsPreview/productsPreviewReducer';
import { reducer as orderCreate } from 'page/OrderCreate/orderCreateReducer';
import { reducer as ordersPreview } from 'page/OrdersPreview/ordersPreviewReducer';
import { reducer as company } from 'page/Company/companyReducer';

export const rootReducer = (history) =>
  combineReducers({
    account,
    registration,
    signIn,
    productCreate,
    productsPreview,
    orderCreate,
    ordersPreview,
    company,
    router: connectRouter(history),
  });
