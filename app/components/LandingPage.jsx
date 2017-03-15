import React from 'react';
let StartIcon = require('StartIcon');

const landingPageStyle = {
  backgroundSize: 'cover',
  textAlign: 'center',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),\
    url(./assets/logo_nodejs.png)',
  height: '95vh',
  width: '100%',
  padding: '15%',
  position: 'relative',
  overflow: 'hidden',
  margin: '0',
  color: 'white',
  textShadow: '0 1px 0 black',
};
//https://cdn.pixabay.com/photo/2016/12/18/21/24/bridge-1916757_960_720.jpg
//https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cheese-curds.jpg
class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div style = {landingPageStyle}>
      <h2>Hi, Im Tom and welcome to my portfolio website</h2>
      <StartIcon/>
    </div>  );
  }
}

module.exports = LandingPage;
