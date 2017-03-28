var React = require('react');
let Header = require('Header');
let LandingPage = require('LandingPage');
let SummarySection = require('SummarySection');
let ProjectSection = require('ProjectSection');
let DetailsSection = require('DetailsSection');

const appStyle = {

};


//https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div ref={node => this.node = node} style={appStyle}>
        <Header/>
        <LandingPage/>
        <SummarySection/>
        <ProjectSection/>
        <DetailsSection/>
      </div>
    );
  }
}

module.exports = Main;
