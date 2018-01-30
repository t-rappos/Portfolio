import React from 'react';

const outroPageStyle = {
   backgroundSize: 'cover',
   textAlign: 'center',
   background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),\
     url(./assets/background.jpg)',
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

class OutroPage extends React.Component {
  onScroll(){
    let s = $(window).scrollTop();
    this.state = {scroll: 280-(s*0.15)};
    $(this.node)[0].style.backgroundPosition =  "0px "+this.state.scroll+"px";
  }
  constructor(props){
    super(props);
    this.state = {scroll: 0};
    $(window).scroll(this.onScroll.bind(this));
  }
  render() {
    return (
    <div style = {outroPageStyle} ref={node => this.node = node} className = 'background'>
      <h2>Thanks for taking a look, hope your have a nice day.</h2>
    </div>  );
  }
}

module.exports = OutroPage;
