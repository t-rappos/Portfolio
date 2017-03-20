import React from 'react';
let ProjectItem = require('ProjectItem');

const projectSectionStyle = {
  backgroundColor: '#FFF2E0'
};

const DefaultIcon = './assets/logo_project.png';
const DefaultImage = './assets/logo_nodejs.png';

const PROJECT_DEFINITIONS = [
{name: 'Auction House (WIP)',icon:DefaultIcon, image: DefaultImage, tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5'], text:'', category: 'web'},
{name: 'Chat Server',icon:DefaultIcon, image: DefaultImage, tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5', 'Foundation'], text:'', category: 'web'},
{name: 'Andys WP Website',icon:DefaultIcon, image: DefaultImage, tags:['Amazon AWS EC2', 'WordPress'], text:'', category: 'web'},
{name: 'DSTG Final Year Project',icon:DefaultIcon, image: DefaultImage, tags:['Turtlebot', 'ubuntu', 'ROS', 'C++', 'PYTHON', 'UAV', 'UGV', 'LiDAR', 'SLAM', 'TCP/UDP', 'matlab'], text:'', category: 'web'},
{name: 'Robotic Arm Hand-Eye co-ordination',icon:DefaultIcon, image: DefaultImage, tags:['Matlab', 'OpenGL', 'OpenCV', 'C++', 'ABB robot', 'Python', 'Ubuntu'], text:'', category: 'web'},
{name: 'DSTG Div3D',icon:DefaultIcon, image: DefaultImage, tags:['ParaView', 'C++', 'python', 'trac', 'git', 'MySql', 'NASTRAN'], text:'', category: 'web'},
{name: 'Current-C',icon:DefaultIcon, image: DefaultImage, tags:['Gradle', 'Java', 'Android Studio', 'external API'], text:'', category: 'web'},
{name: 'File Sharing App',icon:DefaultIcon, image: DefaultImage, tags:['Java', 'TCP'], text:'', category: 'web'},
{name: 'Sliding Puzzle Solver',icon:DefaultIcon, image: DefaultImage, tags:['C++', 'ASTAR', 'STL'], text:'', category: 'web'},
{name: 'Pick and Place robot',icon:DefaultIcon, image: DefaultImage, tags:['C', 'PID', 'HCS12 uController', 'Code Warrior', 'Servo', 'Solenoid', 'matlab', 'solidworks'], text:'', category: 'web'},
{name: 'Portfolio Website',icon:DefaultIcon, image: DefaultImage, tags:['Heroku', 'React', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'Bootstrap', 'CSS', 'HTML5'], text:'', category: 'web'}];

const gridName = "col-lg-2 col-md-4 col-sm-4 col-xs-12";

class ProjectSection extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    //TODO: we could send a 'project' object instead of all the parameters...
    var items = PROJECT_DEFINITIONS.map((project)=>{
      return(
        <div className={gridName}>
          <ProjectItem
            name={project.name}
            icon={project.icon}
            image={project.image}
            tags={project.tags}
            category = {project.category}
            toDisplay = 'true'
            text={project.text}/>
        </div>
      );
    });

    return (
    <div style = {projectSectionStyle}>
      <p id='projects'>ProjectSection</p>
      <div className="row">
        {items}
      </div>
    </div>  );
  }
}

module.exports = ProjectSection;
