import React from 'react';

const startIconStyle = {
    backgroundColor: '#FFD4AA',
    width: '6em',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
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
