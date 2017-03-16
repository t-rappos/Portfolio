import React from 'react';

const detailsSectionStyle = {

};

class DetailsSection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div style = {detailsSectionStyle}>
      <h2 id='in-detail'>In Detail</h2>
      <p>Currently a student at Swinburne university studying robotics & mechatronics</p>
      <p>Technoligies ive had experience with</p>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
    </div>  );
  }
}

module.exports = DetailsSection;
