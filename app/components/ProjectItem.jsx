import React from 'react';

let ProjectPopup = require('ProjectPopup');
import { Button,Modal } from 'react-bootstrap';

const clickStyle = {
cursor: 'pointer',
textAlign: 'center',
margin: '5px',
transition: 'background-color 0.2s ease',
};

const clickStyleHover = {
 cursor: 'pointer',
 textAlign: 'center',
 transition: 'background-color 0.2s ease',
 backgroundColor: '#FFE4C1',
 margin: '5px'
};

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {showModal: false};
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  onMouseEnter(e){
    this.setState({hover: true});
  }
  onMouseLeave(e){
    this.setState({hover: false});
  }

  render() {
    return (
      <div
        onClick={this.open.bind(this)}
         style={this.state.hover?clickStyleHover:clickStyle}
         onMouseEnter= {this.onMouseEnter.bind(this)}
         onMouseLeave= {this.onMouseLeave.bind(this)}>
        <img src={this.props.icon} alt=''/>
        <p>{this.props.name}</p>
        <p>{this.props.tags[0]}, {this.props.tags[1]}, {this.props.tags[2]}</p>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ProjectPopup
                name = {this.props.name}
                image = {this.props.image}
                text = {this.props.text}
                category = {this.props.category}
                tags = {this.props.tags}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
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
