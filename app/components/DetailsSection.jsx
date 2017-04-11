import React from 'react';
import {  MarkdownPreview  } from 'react-marked-markdown';
let headings = require('./headings.jsx');
import Colors from './colors.jsx';

const detailsSectionStyle = {
  backgroundColor: Colors.PRIMARY[1],
  marginTop : '-20px',
  marginLeft : 'auto',
  marginRight : 'auto'
};

const detailsTextStyle = {
  width: '500px',
  marginLeft : 'auto',
  marginRight : 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

//const listStyleBulletFix = {
//  listStylePosition: 'inside'
//};

class DetailsSection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
    <div style = {detailsSectionStyle}>
      <h2 id='in-detail' style = {headings.headingStyle}>In Detail</h2>
      <div style = {detailsTextStyle}>
        <p>I'm currently studying a double degree, Bachelor of Engineering (Robotics & Mechatronics)
          (Honours)/ Bachelor of Computer Science at Swinburne University of Technology.
           I've always had a fascination about how things work and a drive to understand systems
            especially the interaction between mechanics, robotics, electronics and software.</p>

        <p>The following are subjects that I'm interested in and have had experience with.</p>
        <MarkdownPreview value="
### Front End
- Javascript (ES6)
- React
- Redux
- Socket IO
- Webpack
- CSS (Foundation, Bootstrap, SCSS)
- HTML5
"/>

<MarkdownPreview value="
### Back End
- Javascript (NodeJS, Express)
- Java (Spring)
- SQL (MySQL, PostgreSQL)
- NPM
"/>

<MarkdownPreview value="
### Software Applications
- Python (SciPy, RenPy, NumPy)
- CMake (Build configuration)
- Git (GitHub, BitBucket, GitLab)
- Trac
- C++ (STL, VTK, QT, ParaView, OpenGL, OpenCV)
- C#
- Java (Android Studio, Gradle)
"/>

<MarkdownPreview value="
### Embedded Devices
- C (CodeWarrior, Arduino IDE, HCS12 uController)
- C++ (Raspberry PI)
- ROS (Robotic Operating System)
"/>

<MarkdownPreview value="
### Continuous Deployment and Integration
- Hosting
  - Amazon EC2 AWS (WordPress)
  - Heroku (Automated Deployment)
"/>

<MarkdownPreview value="
### Integration / Deployment
- TravisCI (Automated testing and Deployment)
"/>

<MarkdownPreview value="
### Testing
- Testing (Mocha)
- Linting (ESLint)
"/>

<MarkdownPreview value="
### Workflow
"/>

<p>My current workflow is guided by test driven development, supported by unit tests,
continuous integration and automated deployment. Following a document-as-you-go (but before development),
traceable agile approach. I aim to work as transparently as possible by using tools such as Trello,
and storing working research in visible locations (dropbox, git, google docs).
The ultimate goal is to be able to stop working on a project and pick it up months later
and be able to start working straight away.</p>
        <a href = 'https://github.com/t-rappos/auction-system/blob/master/doc/workflow.md'>See github for a more in-depth explanation</a>
<br/>
<br/>
      </div>
    </div>  );
  }
}

module.exports = DetailsSection;
