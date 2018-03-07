import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//import {Router, Route, browserHistory, IndexRoute} from 'react-router';
//<Router history={browserHistory}>
//<Route path={/} component={Root}>
//          <IndexRoute component={Home} />
//          <Route path={'user'} component={User} />
//          <Route path={'app'} component={App} />
//</Route>
//        </Router> 
