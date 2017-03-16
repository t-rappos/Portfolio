var React = require('react');
let Header = require('Header');
let LandingPage = require('LandingPage');
let SummarySection = require('SummarySection');
let ProjectSection = require('ProjectSection');
let DetailsSection = require('DetailsSection');

const appStyle = {

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
        <DetailsSection/>
      </div>
    );
  }
}

module.exports = Main;
