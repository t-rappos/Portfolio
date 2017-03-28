import React from 'react';
let headings = require('./headings.jsx');

const detailsSectionStyle = {
  backgroundColor: '#FFE4C1',
  marginTop : '-20px',
  marginLeft : 'auto',
  marginRight : 'auto'
};

const detailsTextStyle = {
  width: '400px',
  marginLeft : 'auto',
  marginRight : 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const listStyleBulletFix = {
  listStylePosition: 'inside'
};

class DetailsSection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div style = {detailsSectionStyle}>
      <h2 id='in-detail' style = {headings.headingStyle}>In Detail</h2>
      <div style = {detailsTextStyle}>
        <p>Currently a student at Swinburne university studying robotics & mechatronics</p>
        <p>Technoligies i've had experience with</p>
        <ul style={listStyleBulletFix}>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C++</li>
        </ul>
      </div>
    </div>  );
  }
}

module.exports = DetailsSection;
