import React from 'react';

const startIconStyle = {
    backgroundColor: '#FFF2E0',
    width: '6em',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    color: 'black',
    left: '45vw'
};

class StartIcon extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div style = {startIconStyle}>
      <p>See More!</p>
      <p>˅</p>
    </div>  );
  }
}

module.exports = StartIcon;