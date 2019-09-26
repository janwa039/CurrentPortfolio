import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resume from './comnponents/resume'
import Project from './comnponents/project'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router >
    <div>
      <Route exact path="/" component={App}/>
      <Route path path="/resume" component={Resume}/>
      <Route path path="/project" component={Project}/>
    </div>
  </Router>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
