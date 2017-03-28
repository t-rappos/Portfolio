import React from 'react';


const summaryItemStyle = {
 padding: '10px',
 textAlign: 'center',
 maxWidth:'300px',
 marginLeft:'auto',
 marginRight:'auto'
};

const summaryImageStyle = {
  maxWidth : '125px',
  paddingBottom : '10px'
};

class SummaryItem extends React.Component {
  constructor(props){
    super(props);
  }
  //  <li>
  //<SummaryItem title='summary'
  //img='./assets/logo_nodejs.png'
  // text='this is a summary'/></li>

  render() {
    return (
    <div style = {summaryItemStyle}>
      <p><strong>{this.props.title}</strong></p>
      <img style = {summaryImageStyle} src={this.props.img} alt=''/>
      <p>{this.props.text}</p>
    </div>  );
  }
}
//
SummaryItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};
module.exports = SummaryItem;
