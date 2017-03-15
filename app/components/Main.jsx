var React = require('react');
let Header = require('Header');
let LandingPage = require('LandingPage');
let SummarySection = require('SummarySection');
let ProjectSection = require('ProjectSection');
const appStyle = {

};

const mainWindowStyle = {

};

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div ref={node => this.node = node} style={appStyle}>
        <Header/>
        <LandingPage/>
        <SummarySection/>
        <ProjectSection/>
        <div className='expanded row' style={mainWindowStyle} >
          <h1>Main Window</h1>
        </div>
      </div>
    );
  }
}

module.exports = Main;
