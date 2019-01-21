import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store'
import './index.css';
import AddEvent from './components/AddButtonEvent/AddEvent';

declare let module: any

// const store = createStore(Provider, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
    <Route exact path="/" component={App}></Route>
    <Route path="/add-event" component={AddEvent} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept();
}