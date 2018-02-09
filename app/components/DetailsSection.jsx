import React from 'react';
import MarkdownPreview from 'react-markdown';
let headings = require('./headings.jsx');
import Colors from './colors.jsx';

const detailsSectionStyle = {
  backgroundColor: Colors.PRIMARY[1],
  marginTop : '-20px',
  marginLeft : 'auto',
  marginRight : 'auto'
};

const detailsTextStyle = {
  maxWidth: '500px',
  marginLeft : 'auto',
  marginRight : 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '10px'
};

class DetailsSection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
    <div style = {detailsSectionStyle}>
      <h2 id='in-detail' style = {headings.headingStyle}>In Detail</h2>
      <div style = {detailsTextStyle}>
        <p>I've recently graduated with a double degree, Bachelor of Engineering (Robotics & Mechatronics)(Honours) with High Distinction
          & Bachelor of Computer Science from Swinburne University of Technology.
           I've always had a fascination about how things work and a drive to understand systems
            especially the interaction between mechanics, robotics, electronics and software.</p>

        <p>The following are subjects that I'm interested in and have had experience with.</p>
        <MarkdownPreview source="
### Front End
- Javascript (ES6)
- React
- Redux
- Socket IO
- Create-React-App
- CSS (Foundation, Bootstrap, SCSS, Semantic)
- HTML5
"/>

<MarkdownPreview source="
### Back End
- Javascript (NodeJS, Express)
- Java (Spring)
- SQL (MySQL, PostgreSQL)
- ORM (Sequelize)
- NPM
- User Authorization (Passport)
"/>

<MarkdownPreview source="
### Software Applications
- Python (SciPy, RenPy, NumPy)
- Build configuration (CMake)
- Git (GitHub, BitBucket, GitLab)
- Project Management (Trac, Trello)
- C++ (STL, VTK, QT, ParaView, OpenGL, OpenCV)
- C#
- Java (Android Studio, Gradle, Maven)
"/>

<MarkdownPreview source="
### Embedded Devices
- C (CodeWarrior, Arduino IDE, HCS12 uController)
- C++ (Raspberry PI)
- ROS (Robotic Operating System)
"/>

<MarkdownPreview source="
### Continuous Deployment and Integration
- Hosting
  - Amazon EC2 AWS (WordPress)
  - Heroku (Automated Deployment)
"/>

<MarkdownPreview source="
### Integration / Deployment
- TravisCI (Automated testing and Deployment)
"/>

<MarkdownPreview source="
### Testing
- Testing (Mocha)
- Linting (ESLint)
"/>

<MarkdownPreview source="
### Workflow
"/>

<p>The workflow that I strive for is guided by test driven development, supported by unit tests,
continuous integration and automated deployment. Following a document-as-you-go (but before development),
traceable agile approach. I aim to work as transparently as possible by using tools such as Trello,
and storing working research in visible locations (dropbox, git, google docs).
The goal is to be able to communicate the status of the project via documentation created in development process.</p>
<a href = 'https://github.com/t-rappos/auction-system/blob/master/doc/workflow.md' target="_blank">See github for a more in-depth explanation</a>
<br/>
<br/>
      </div>
    </div>  );
  }
}

module.exports = DetailsSection;
