import React from 'react';

const projectPopupStyle = {

};


class ProjectPopup extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style = {projectPopupStyle}>
        <h2>{this.props.name}</h2>
        <p>{this.props.category}</p>
        <img src={this.props.image} alt={this.props.name}/>
        <p>{this.props.text}</p>
        <p>{this.props.tags[0]}, {this.props.tags[1]}, {this.props.tags[2]}</p>
      </div>
    );
  }
}

ProjectPopup.propTypes = {
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  tags:React.PropTypes.array.isRequired
};

module.exports = ProjectPopup;
