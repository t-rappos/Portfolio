import React from 'react';
let SummaryItem = require('SummaryItem');

const summarySectionStyle = {
  backgroundColor: '#FFE4C1'
};

class SummarySection extends React.Component {
  constructor(props){
    super(props);
  }
  //<SummaryItem title='summary' img='./assets/logo_nodejs.png' text='this is a summary'/>
  render() {
    return (
    <div style = {summarySectionStyle}>
      <p id='about-me'>summary section</p>
      <div className="row">
        <div className="large-4 columns">
          <SummaryItem title='summary' img='./assets/logo_project.png' text='this is a summary'/>
        </div>
        <div className="large-4 columns">
          <SummaryItem title='summary' img='./assets/logo_project.png' text='this is a summary'/>
        </div>
        <div className="large-4 columns">
          <SummaryItem title='summary' img='./assets/logo_project.png' text='this is a summary'/>
        </div>
      </div>
    </div>  );
  }
}

module.exports = SummarySection;
