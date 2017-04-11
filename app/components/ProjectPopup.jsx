import React from 'react';
import Colors from './colors.jsx';
import Radium from 'radium';

const projectPopupStyle = {
  display: 'flex',
  alignItems: 'stretch'
};

const contentStyle = {
  flexGrow: '2'
};

const projectTagStyle = {
  margin: '2px'
};

const imageStyle = {
  width: 'auto',
  maxWidth: '90%'
};

const buttonStyle = {
  cursor: 'pointer',
  padding: '5px',
  transition: 'background-color 0.2s ease',
  ':hover':{
    backgroundColor: Colors.PALE[0]
  }
};

const navIconStyle = {
  base:{
    maxWidth : '2em',
    maxHeight : '2em'
  },
  left:{
    transform: 'rotate(90deg)'
  },
  right:{
    transform: 'rotate(270deg)'
  }
};

const tagSectionStyle = {
  overflow: 'auto'
};

class ProjectPopup extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var items = this.props.tags.map((tag)=>{
      return (<span style = {projectTagStyle} key={tag} className="label label-default">{tag}</span>);
    });

    return (
      <div >
        <div style = {projectPopupStyle}>
          <div key = 'lb' style = {buttonStyle}
            onClick ={this.props.prevPressed.bind(this)}>
            <img src='./assets/see-more.png' alt='next' style = {[navIconStyle.base,navIconStyle.left]}></img>
          </div>
          <div style = {contentStyle}>
            <img style = {imageStyle} src={this.props.image} alt={this.props.name}/>
            <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
          </div>
          <div key = 'rb' style = {buttonStyle}
            onClick ={this.props.nextPressed.bind(this)}>
            <img src='./assets/see-more.png' alt='next' style = {[navIconStyle.base,navIconStyle.right]}></img>
          </div>
        </div>
        <div style = {tagSectionStyle}>
          {items}
        </div>
      </div>
    );
  }
}

ProjectPopup.propTypes = {
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  tags:React.PropTypes.array.isRequired,
  prevPressed: React.PropTypes.func.isRequired,
  nextPressed: React.PropTypes.func.isRequired,
};

module.exports = Radium(ProjectPopup);
