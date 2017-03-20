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
        <p>{this.props.category}</p>
        <img src={this.props.image} alt={this.props.name}/>
        <p>{this.props.text}</p>
        <span className="label label-default">{this.props.tags[0]}</span>
        <span className="label label-primary">{this.props.tags[1]}</span>
        <span className="label label-success">{this.props.tags[2]}</span>
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
