import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store'
import './index.css';
import AddEvent from './components/AddButtonEvent/AddEvent';
import Update from './components/Update/Update';

declare let module: any


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
    <Route exact path="/" component={App}></Route>
    <Route path="/add-event" component={AddEvent} />
    <Route path="/edit-event" component={Update} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept();
}