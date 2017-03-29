import React from 'react';

let ProjectPopup = require('ProjectPopup');
import { Button,Modal } from 'react-bootstrap';

const clickStyle = {
cursor: 'pointer',
textAlign: 'center',
transition: 'background-color 0.2s ease',
//backgroundColor: '#AFE4C1',
width: '250px',
height: '250px',
padding: '10px',
marginLeft:'auto',
marginRight:'auto'
};

const clickStyleHover = {
 cursor: 'pointer',
 textAlign: 'center',
 transition: 'background-color 0.2s ease',
 backgroundColor: '#FFE4C1',
 width: '250px',
 height: '250px',
 padding: '10px',
 marginLeft:'auto',
 marginRight:'auto'
};

const tagStyle = {
  textAlign: 'justify',
  textAlignLast: 'center',
  fontSize: '90%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};


const iconStyle = {
  maxWidth: '125px',
  padding: '10px'
};


class ProjectItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {showModal: false};
    //if (this.props.forceDisplay){
    //  this.state = {showModal: true} ;
    //  console.log("force Display for", this.props.index);
    //}
  }
  close() {
    this.setState({ showModal: false });
    this.props.showOtherModal(-1);
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
  onPrevPressed(e){
    this.props.showOtherModal(this.props.index-1);
    this.setState({ showModal: false });
  }
  onNextPressed(e){
    this.props.showOtherModal(this.props.index+1);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div
        onClick={this.open.bind(this)}
         style={this.state.hover?clickStyleHover:clickStyle}
         onMouseEnter= {this.onMouseEnter.bind(this)}
         onMouseLeave= {this.onMouseLeave.bind(this)}>
        <img style = {iconStyle} src={this.props.icon} alt=''/>
        <p><strong>{this.props.name}</strong></p>
        <p style={tagStyle} >{this.props.tags.join(", ")}</p>

        <Modal show={this.state.showModal || this.props.forceDisplay} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name} ({this.props.category})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ProjectPopup
                name = {this.props.name}
                image = {this.props.image}
                text = {this.props.text}
                category = {this.props.category}
                tags = {this.props.tags}
                prevPressed = {this.onPrevPressed.bind(this)}
                nextPressed = {this.onNextPressed.bind(this)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  toDisplay: React.PropTypes.string.isRequired,
  tags:React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired,
  showOtherModal: React.PropTypes.func.isRequired,
  forceDisplay : React.PropTypes.bool.isRequired
};
module.exports = ProjectItem;
