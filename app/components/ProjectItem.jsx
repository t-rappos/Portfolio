import React from 'react';
let ProjectPopup = require('ProjectPopup');
import { Button,Modal } from 'react-bootstrap';
import Radium from 'radium';

const styles = {
    cursor: 'pointer',
    textAlign: 'center',
    width: '250px',
    height: '250px',
    padding: '10px',
    marginLeft:'auto',
    marginRight:'auto'
};

const tagStyle = {
  base:{
    textAlign: 'justify',
    textAlignLast: 'center',
    fontSize: '90%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'color 0.3s ease',
    color: 'rgba(0, 0, 0, 0.0)'
  },
  hover:{
    color: 'rgba(0, 0, 0, 0.99)'
  }
};

const iconBlurStyle = {
  base:{
    transition: '-webkit-filter 0.3s ease, filter 0.3s ease',
    'WebkitFilter': 'blur(2px)',
    filter: 'blur(2px)'
  },
  hover:{
    'WebkitFilter': 'blur(0px)',
    filter: 'blur(0px)'
  }
};

const iconStyle = {
  base:{
    maxWidth: '125px',
    padding: '10px'
  },
  priority : [    {
      'WebkitFilter': 'opacity(100%)',
      filter: 'opacity(100%)'
    },
    {
      'WebkitFilter': 'opacity(70%)',
      filter: 'opacity(70%)'
    },
    {
      'WebkitFilter': 'opacity(30%)',
      filter: 'opacity(30%)'
    }
]
};

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {showModal: false};

  }
  close() {
    this.setState({ showModal: false });
    this.props.showOtherModal(-1);
  }
  open() {
    this.setState({ showModal: true });
  }

  onPrevPressed(e){
    this.props.showOtherModal(this.props.index-1);
    this.setState({ showModal: false });
  }

  onNextPressed(e){
    this.props.showOtherModal(this.props.index+1);
    this.setState({ showModal: false });
  }

  onMouseEnter(e){
    this.setState({hover: true});
  }

  onMouseLeave(e){
    this.setState({hover: false});
  }

  render() {
    return (
        <div key = 'a'
          onClick={this.open.bind(this)}
          onMouseEnter= {this.onMouseEnter.bind(this)}
          onMouseLeave= {this.onMouseLeave.bind(this)}
          style={styles}>
          <div style = {[iconBlurStyle.base, this.state.hover && iconBlurStyle.hover]}>
            <img style = {[iconStyle.base,iconStyle.priority[this.props.priority], this.state.hover && iconStyle.hover]} src={this.props.icon} alt=''/>
          </div>
          <p><strong>{this.props.name}</strong></p>
          <p key = 'b' style={[tagStyle.base, this.state.hover && tagStyle.hover]} >{this.props.tags.join(", ")}</p>

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
  forceDisplay : React.PropTypes.bool.isRequired,
  priority : React.PropTypes.number.isRequired
};
module.exports = Radium(ProjectItem);
