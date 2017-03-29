import React from 'react';

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

const leftButtonStyle = {

  cursor: 'pointer',
  padding: '5px'
};

const leftButtonHoverStyle = {
  backgroundColor : '#eaeff7',
  cursor: 'pointer',
  padding: '5px',
  transition: 'background-color 0.2s ease'
};

const rightButtonStyle = {

  cursor: 'pointer',
  padding: '5px'
};

const rightButtonHoverStyle = {
  backgroundColor : '#eaeff7',
  cursor: 'pointer',
  padding: '5px',
  transition: 'background-color 0.2s ease'
};

const leftNavIconStyle = {
  maxWidth : '2em',
  maxHeight : '2em',
  transform: 'rotate(90deg)'
};

const rightNavIconStyle = {
  maxWidth : '2em',
  maxHeight : '2em',
  transform: 'rotate(270deg)'
};

const tagSectionStyle = {
  overflow: 'auto'
};

class ProjectPopup extends React.Component {
  constructor(props){
    super(props);
    this.state = {hoverLB: false, hoverRB: false};
  }

  onMouseEnterLB(e){
    this.setState({hoverLB: true});
  }
  onMouseLeaveLB(e){
    this.setState({hoverLB: false});
  }
  onMouseEnterRB(e){
    this.setState({hoverRB: true});
  }
  onMouseLeaveRB(e){
    this.setState({hoverRB: false});
  }

  render() {
    var items = this.props.tags.map((tag)=>{
      return (<span style = {projectTagStyle} key={tag} className="label label-default">{tag}</span>);
    });
    return (
      <div >
        <div style = {projectPopupStyle}>
          <div style = {this.state.hoverLB?leftButtonHoverStyle:leftButtonStyle}
            onMouseEnter= {this.onMouseEnterLB.bind(this)}
            onMouseLeave= {this.onMouseLeaveLB.bind(this)}
            onClick ={this.props.prevPressed.bind(this)}>
            <img src='./assets/see-more.png' alt='next' style = {leftNavIconStyle}></img>
          </div>
          <div style = {contentStyle}>
            <img style = {imageStyle} src={this.props.image} alt={this.props.name}/>
            <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
          </div>
          <div style = {this.state.hoverRB?rightButtonHoverStyle:rightButtonStyle}
            onMouseEnter= {this.onMouseEnterRB.bind(this)}
            onMouseLeave= {this.onMouseLeaveRB.bind(this)}
            onClick ={this.props.nextPressed.bind(this)}>
            <img src='./assets/see-more.png' alt='next' style = {rightNavIconStyle}></img>
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

module.exports = ProjectPopup;
