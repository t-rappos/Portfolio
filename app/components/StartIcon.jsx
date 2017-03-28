import React from 'react';

const startIconStyle = {
    width: '6em',
    textAlign: 'center',
    color: 'black',
    marginTop: '30vh',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const seeMoreImgStyle = {
  maxWidth : '5em',
  maxHeight : '5em',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  display: 'table-cell',
  verticalAlign: 'middle'
};

class StartIcon extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <a href="#about-me">
        <div style = {startIconStyle}>
          <img src='./assets/see-more.png' alt='see more' style={seeMoreImgStyle}></img>
        </div>
      </a>  );
  }
}

module.exports = StartIcon;
