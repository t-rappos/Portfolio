import React from 'react';
let ProjectItem = require('ProjectItem');

const projectSectionStyle = {
  backgroundColor: '#FFF2E0'
};

class ProjectSection extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div style = {projectSectionStyle}>
      <p id='projects'>ProjectSection</p>
      <div className="row">
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className="large-2 small-4 columns">
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
      </div>
    </div>  );
  }
}

module.exports = ProjectSection;
