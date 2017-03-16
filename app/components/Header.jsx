import React from 'react';
/*
const headerStyle = {
  backgroundColor: '#FFF2E0'
};
*/
class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <div className="top-bar">
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
          </span>
          <strong></strong>
        </div>
        <div id="responsive-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#in-detail">In Detail</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><a href="https://github.com/t-rappos/Portfolio/">See Github</a></li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

module.exports = Header;
