import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './index.css';
import App from './App';
import Verify from './Verify';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path='/accounts/verify/:email/:code/:userTypeId' component={Verify}/>
      </div>
    </Router>
  )
ReactDOM.render(
    routing
    , document.getElementById('root'));
registerServiceWorker();
