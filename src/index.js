import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './components/Projects'
import Contact from './components/SecondPage'
import Ripple from './oldsites/javascript/ripple'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router >
    <div>
      <Route exact path="/" component={App}/>
      <Route path path="/projects" component={Projects}/>
      <Route path path="/contact" component={Contact}/>
      <Route path path="/oldsite" component={Ripple}/>
    </div>
  </Router>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
