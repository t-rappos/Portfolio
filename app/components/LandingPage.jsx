import React from 'react';
let StartIcon = require('StartIcon');

const landingPageStyle = {
   backgroundSize: 'cover',
   textAlign: 'center',
   background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),\
     url(./assets/background.jpg)',
   marginTop : '-30px',
   height: '100vh',
   width: '100%',
   padding: '15vh',
   overflow: 'hidden',
   color: 'white',
   textShadow: '0 1px 0 black',
   backgroundAttachment: 'fixed',
   backgroundPosition: 'left top',
   zIndex: '-1'
};

class LandingPage extends React.Component {
  onScroll(){
    let s = $(window).scrollTop();
    this.state = {scroll: -(s*0.15)};
    $(this.node)[0].style.backgroundPosition =  "0px "+this.state.scroll+"px";
  }
  constructor(props){
    super(props);
    this.state = {scroll: 0};
    $(window).scroll(this.onScroll.bind(this));
  }
  render() {
    return (
    <div style = {landingPageStyle} ref={node => this.node = node} className = 'background'>
      <h2>Hi, Im Tom and welcome to my portfolio website.</h2>
      <StartIcon/>
    </div>  );
  }
}

module.exports = LandingPage;
