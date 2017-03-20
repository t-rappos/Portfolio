import React from 'react';
let ProjectItem = require('ProjectItem');

const projectSectionStyle = {
  backgroundColor: '#FFF2E0'
};

const gridName = "col-lg-2 col-md-4 col-sm-4 col-xs-12";

class ProjectSection extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div style = {projectSectionStyle}>
      <p id='projects'>ProjectSection</p>
      <div className="row">
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
          <ProjectItem
            name='project name'
            icon='./assets/logo_project.png'
            image='./assets/logo_nodejs.png'
            tags={['nodejs', 'react', 'web development']}
            category = 'web'
            toDisplay = 'true'
            text='this is a summary of the project'/>
        </div>
        <div className={gridName}>
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
