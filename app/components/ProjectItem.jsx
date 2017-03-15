import React from 'react';

const projectItemStyle = {
 padding: '10px',
 textAlign: 'center'
};

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div style = {projectItemStyle}>
      <img src={this.props.icon} alt=''/>
      <p>{this.props.name}</p>
      <p>{this.props.tags[0]}, {this.props.tags[1]}, {this.props.tags[2]}</p>
    </div>  );
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
