import React from 'react';

const projectPopupStyle = {

};

const projectTagStyle = {
  margin: '2px'
};

const imageStyle = {
  maxWidth: '44vw'
};

class ProjectPopup extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var items = this.props.tags.map((tag)=>{
      return (<span style = {projectTagStyle} className="label label-default">{tag}</span>);
    });
    return (
      <div style = {projectPopupStyle}>
        <img style = {imageStyle} src={this.props.image} alt={this.props.name}/>
        <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
        {items}
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
