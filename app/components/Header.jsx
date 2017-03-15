import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div className = 'top-bar'>
      <div className = 'top-bar-left'>
        <ul className="dropdown menu" data-dropdown-menu>
          <div className ="menu-text">Portfolio!</div>
        </ul>
      </div>
      <div className = 'top-bar-right'>
        <ul className="menu">
          <li>By Thomas Rappos </li>
          <li><a href="https://github.com/t-rappos/Portfolio/">See Github</a></li>
        </ul>
      </div>
    </div>  );
  }
}

module.exports = Header;
