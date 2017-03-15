var React = require('react');
let Header = require('Header');

const appStyle = {

};

const mainWindowStyle = {

};

var Main = React.createClass({

  render: function(){
    return (
      <div ref={node => this.node = node} style={appStyle}>
        <Header/>
        <div className='expanded row' style={mainWindowStyle} >
          <h1>Main Window</h1>
        </div>
      </div>
    );
  }
});

module.exports = Main;
