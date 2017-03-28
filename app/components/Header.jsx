import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

<div>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Portfolio</a>
    </div>
    <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#in-detail">In Detail</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="https://github.com/t-rappos/Portfolio/">See Github</a></li>
    </ul>
  </div>
</nav>
</div>

    );
  }
}

module.exports = Header;
