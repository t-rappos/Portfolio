import React from 'react';
let ProjectItem = require('ProjectItem');

const projectSectionStyle = {
  backgroundColor: '#FFF2E0'
};

const DefaultIcon = './assets/logo_project.png';
const DefaultImage = './assets/logo_nodejs.png';

const PROJECT_DEFINITIONS = [
{name: 'Auction House (WIP)',icon:DefaultIcon, image: DefaultImage,
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5'],
    text:'', category: 'web'},

{name: 'Chat Server',icon:DefaultIcon, image: DefaultImage,
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5', 'Foundation'],
    text:'', category: 'web'},

{name: 'Andys WP Website',icon:DefaultIcon, image: DefaultImage,
   tags:['Amazon AWS EC2', 'WordPress'],
    text:'', category: 'web'},

{name: 'DSTG Final Year Project',icon:DefaultIcon, image: DefaultImage,
   tags:['Turtlebot', 'ubuntu', 'ROS', 'C++', 'PYTHON', 'UAV', 'UGV', 'LiDAR', 'SLAM', 'TCP/UDP', 'matlab'],
    text:"<h3>Report Abstract:</h3> <p>The ability for robots to position themselves in their surroundings is key to being able to\
 autonomously move and interact with its environment. Issues arise when a robot isn’t powerful enough to complete this task,\
 such as lightweight micro unmanned aerial vehicles (UAV), thus off-boarding simultaneous localisation and mapping (SLAM)\
 calculations to a more powerful nearby robot can alleviate this. In real-world applications, wireless networking issues\
 may cause communication packet-loss between robots, affecting the calculation of the map and localisation.\
 This phenomenon was analysed using a UAV and UGV (unmanned ground vehicle), utilising robotic teaming.\
 LiDAR laser scan data was sent from the UAV to the UGV via WiFi, which then produced a map of its local environment.\
 The objective of this research, in collaboration with DSTGroup, is to find the necessary communication reliability\
 needed for off-board SLAM calculations. It was discovered that at a nominally expected packet loss of twenty percent,\
 the calculated and actual trajectories of the UAV differ by approximately 0.65m on average. A recovery solution was\
 presented which reduces this to 0.45m.</p>", category: 'robotics'},

{name: 'Robotic Arm Hand-Eye co-ordination',icon:DefaultIcon, image: DefaultImage,
   tags:['Matlab', 'OpenGL', 'OpenCV', 'C++', 'ABB robot', 'Python', 'Ubuntu'],
    text:'', category: 'robotics'},

{name: 'DSTG Div3D',icon:DefaultIcon, image: DefaultImage,
   tags:['ParaView', 'C++', 'python', 'trac', 'git', 'MySql', 'NASTRAN'],
 text:"<h3>Industry Based Learning, DIV3d Project @ DSTGroup</h3>\
<p>The Defence Science and Technology Group is the Australian government's lead agency responsible for applying science and technology to safeguard Australia and\
 its national interests. DST Group consists of multiple\
 divisions which are further split into branches. I was placed in the Aircraft Structures Branch of the Aerospace Division under the guidance of my supervisor.\
  My role at DST Group consisted of analysing ‘Paraview’, a 3D graphics API, to evaluate possible solutions for implementing desired functionality into ‘Div3D’,\
   an open source 3D visualisation program, while being guided by software requirements and specifications.</p> \
\
<p>The following is a chart with some of the paraview C++ plugins that were developed during this period of work.</p>\
<p>Div3d Plugin / Task Name	Description</p>\
<ul>\
<li>Nastran Reader|	Loads and displays Nastran finite element analysis .bulk files</li>\
<li>IMSST Reader|	Loads and displays geometry from an external MYSQL database</li>\
<li>CSV Reader|	Loads geometry from csv/tsv files. Displays information at points from a comma or tab separated text</li>\
<li>Simple Metadata Annotation Filter|	Attaches data (a new array) to the model (source) allowing custom metadata to be added</li>\
<li>Extract by String Value Fitler|	Displays a subset of the parent model (source) that matches geometry data criteria</li>\
<li>Testing Code|	a unit testing framework to allow automated testing in a user friendly manner</li>\
<li>Hover Dock|	QT gui to display information about when the mouse hovers over geometry</li>\
<li>Selection Dock|	QT gui to display information when a selection is made</li>\
</ul>\
\
<p>Skills used:\
•	Software architecture and extensibility. Experience was gained by developing plugins, having to design an overall project structure to enable sharing common\
 functionality throughout all plugins. Although not all these efforts were successful in my experience and guidance in this area would have greatly motivated my\
  learning efforts.\
•	Optimisation. By developing the NASTRAN reader plugin whilst trying to reduce load times. Discovered that premature optimisations are not time or cost effective.\
 Also that the best optimisations are logic based (in contrast to technical optimisations) resulting in changes that require no extra effort to understand and can\
  be easily modified or extended. \
•	Project Management. Experience with tools such as CMAKE and GIT have allowed me to manage software projects with more effectiveness, and experiences\
 planning development efforts will result in more realistic and successful planning in the future.</p>", category: 'software'},

{name: 'Current-C',icon:DefaultIcon, image: DefaultImage,
   tags:['Gradle', 'Java', 'Android Studio', 'external API'],
    text:'', category: 'software'},

{name: 'File Sharing App',icon:DefaultIcon, image: DefaultImage,
   tags:['Java', 'TCP'],
    text:'', category: 'software'},

{name: 'Sliding Puzzle Solver',icon:DefaultIcon, image: DefaultImage,
   tags:['C++', 'ASTAR', 'STL'],
   text:'', category: 'software'},

{name: 'Pick and Place robot',icon:DefaultIcon, image: DefaultImage,
   tags:['C', 'PID', 'HCS12 uController', 'Code Warrior', 'Servo', 'Solenoid', 'matlab', 'solidworks'],
    text:'', category: 'robotics'},

{name: 'Portfolio Website',icon:DefaultIcon, image: DefaultImage,
   tags:['Heroku', 'React', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'Bootstrap', 'CSS', 'HTML5'],
    text:'', category: 'web'}];

const gridName = "col-lg-3 col-md-5 col-sm-5 col-xs-12";

class ProjectSection extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    //TODO: we could send a 'project' object instead of all the parameters...
    let keyNo = 0;
    let items = PROJECT_DEFINITIONS.map((project)=>{
      return(
        <div key = {keyNo} className={gridName}>
          <ProjectItem
            key = {keyNo++}
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
    <div className = "container-fluid" style = {projectSectionStyle}>
      <p id='projects'>ProjectSection</p>
      <div className="row row-eq-height" >
        {items}
      </div>
    </div>  );
  }
}

module.exports = ProjectSection;
