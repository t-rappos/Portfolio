import React from 'react';

const headerStyle = {
  backgroundColor: '#FFF2E0'
};

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div className = 'top-bar' style = {headerStyle}>
      <div className = 'top-bar-left' style = {headerStyle}>
        <ul className="dropdown menu" data-dropdown-menu style = {headerStyle}>
          <div className ="menu-text" style = {headerStyle}>Portfolio!</div>
        </ul>
      </div>
      <div className = 'top-bar-right' style = {headerStyle}>
        <ul className="menu" style = {headerStyle}>
          <li style = {headerStyle}>By Thomas Rappos </li>
          <li style = {headerStyle}><a href="https://github.com/t-rappos/Portfolio/">See Github</a></li>
        </ul>
      </div>
    </div>  );
  }
}

module.exports = Header;
