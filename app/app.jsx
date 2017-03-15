let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, hashHistory} = require('react-router');
let Main = require('Main');
var $ = require('jquery');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <div>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
      </Router>
  </div>,
  document.getElementById('app')
);
