import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/home/Home';
import Wishlist from './pages/wishlist/Wishlist';
import Detail from './pages/detail/Detail';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './Store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/wishlist"><Wishlist /></Route>
          <Route path="/planets/:planetId"><Detail /></Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
