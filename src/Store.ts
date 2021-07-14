import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AppReducer from './reducers/AppReducer';

const Store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppStore = ReturnType<typeof AppReducer>;

export default Store;
