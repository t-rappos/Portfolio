let React = require('react');
let ReactDOM = require('react-dom');
/* eslint-disable */

/* eslint-enable */
let {Route, Router, hashHistory} = require('react-router');
let Main = require('Main');

var $ = require('jquery');

//load foundation
require('style!css!bootstrap/dist/css/bootstrap.css');
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();


//import { Button,Modal } from 'react-bootstrap';



ReactDOM.render(
  <div>
      <Router history={hashHistory}>
        <Route path="/" component={Main}></Route>
        <Route path="/about-me" component={Main}></Route>
        <Route path="/projects" component={Main}></Route>
        <Route path="/in-detail" component={Main}></Route>
      </Router>
  </div>,
  document.getElementById('app')
);
