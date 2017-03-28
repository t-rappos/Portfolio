import React from 'react';
let SummaryItem = require('SummaryItem');
let headings = require('./headings.jsx');

const summarySectionStyle = {
  backgroundColor: '#FFE4C1'
};

const gridName = "col-lg-4 col-md-4 col-sm-12 col-xs-12";

class SummarySection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div style = {summarySectionStyle}>
      <h3 id='about-me' style={headings.headingStyle}>Things I do</h3>
      <div className="row">
        <div className={gridName}>
          <SummaryItem title='Robotics' img='./assets/logo-robotics2.png' text='Experience integrating software and hardware using embedded devices and ROS.'/>
        </div>
        <div className={gridName}>
          <SummaryItem title='Software Development' img='./assets/logo-cs.png' text='Experience making software solutions using C++ and Java.'/>
        </div>
        <div className={gridName}>
          <SummaryItem title='Web Development' img='./assets/logo-wd.png' text='Experience designing and programming websites.'/>
        </div>
      </div>
    </div>  );
  }
}

module.exports = SummarySection;
