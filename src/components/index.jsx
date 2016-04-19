import typoStyle from './global/typography.css';
require('./global/normalize.css');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';

import About from './about/About'
import Repos from './repos/Repos'
import App from './app/app'


// export class App extends Component {
// 	render() {
// 		return (
// 			<div><h2 className={typoStyle.h2}>Simple React + Babel + Bootstrap + Webpack</h2></div>
// 		);
// 	}
// }



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('myApp'));

// ReactDOM.render(<App/>, document.querySelector("#myApp"));
