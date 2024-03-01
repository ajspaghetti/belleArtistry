import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from '../slices';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    // TODO: add more slices/reducers as needed
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});
