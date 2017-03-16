import React from 'react';

const projectItemStyle = {
 textAlign: 'center',
 margin: '5px'
};

const projectItemStyleHover = {
 textAlign: 'center',
 backgroundColor: '#FFE4C1',
 margin: '5px'
};

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {hover: false};
  }
  onClick(e){
    alert('On Click');
  }
  onMouseEnter(e){
    this.setState({hover: true});
  }
  onMouseLeave(e){
    this.setState({hover: false});
  }

  render() {
    return (
      <div onClick= {this.onClick.bind(this)}
        onMouseEnter= {this.onMouseEnter.bind(this)}
        onMouseLeave= {this.onMouseLeave.bind(this)}
          style = {this.state.hover ? projectItemStyleHover : projectItemStyle}>
        <img src={this.props.icon} alt=''/>
        <p>{this.props.name}</p>
        <p>{this.props.tags[0]}, {this.props.tags[1]}, {this.props.tags[2]}</p>
      </div>
    );
  }
}
//
ProjectItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  toDisplay: React.PropTypes.string.isRequired,
  tags:React.PropTypes.array.isRequired
};
module.exports = ProjectItem;
