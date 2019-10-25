import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';

export const storeNew = createStore(reducer,applyMiddleware(thunk));