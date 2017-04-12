import React from 'react';
let ProjectItem = require('ProjectItem');
let headings = require('./headings.jsx');
import Colors from './colors.jsx';


const projectSectionStyle = {
  backgroundColor: Colors.PRIMARY[0]
};

const roboticsLogo = './assets/logo-robotics2.png';
const webLogo = './assets/logo-wd.png';
const csLogo = './assets/logo-cs.png';

//const DefaultIcon = './assets/logo_project.png';
const DefaultImage = './assets/logo_nodejs.png';

const PROJECT_DEFINITIONS = [
{name: 'Auction House System (WIP)',icon:webLogo, image: webLogo,
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5'],
    text:'<h3>Aim</h3><p>The purpose of this project is to gain experience using and integrating multiple different software technologies.\
 An auction listing system would be an appropriate candidate as it requires development of user interfaces, server back-ends and database functionality. \
 This project will be set up for multiple collaborators but will be a single developer effort.</p>\
 <h3>About</h3>\
 <p>Users can list items (user created) on an online auction website for sale for other users to either buyout or bid on.\
   Items listed can be filtered to highlight interesting items. Once an item is successfully purchased, it is placed in the buyers personal inventory.\
   The user can view their own inventory and inspect each item.</p>\
 <p>This project is currently in development on <a href="https://github.com/t-rappos/auction-system">GitHub</a></p>', category: 'web', priority:0},

{name: 'Chat Server',icon:webLogo, image: './assets/chat-server.png',
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5', 'Foundation'],
    text:'<p>Chat Server was created to test a proposed technology stack for web applications. It was also successfully deployed on <a href="https://chat-server-t-rappos.herokuapp.com/#/?_k=32gzvg">Heroku</a>.\
  <p>Features:</p>\
  <ul><li>User can set name.</li>\
<li>User can see list of online users.</li>\
<li>User can post messages.</li>\
<li>User can see an up-to-date list of messages.</li>\
<li>Application runs in real-time without needing webpage refreshes.</li></ul>\
  <p>See <a href="https://github.com/t-rappos/auction-system/blob/master/doc/chat-server.md">GitHub</a> for more information</p>\
    ', category: 'web', priority:0},

{name: 'DST Group Final Year Project, Robotic Teaming',icon:roboticsLogo, image: './assets/fyp.png',
   tags:['Turtlebot', 'ubuntu', 'ROS', 'C++', 'PYTHON', 'UAV', 'UGV', 'LiDAR', 'SLAM', 'TCP/UDP', 'matlab'],
    text:"<h4>Research Question</h4>\
    <p>How to implement high-throughput data transmission between an unmanned aerial vehicle (UAV)\
and an unmanned ground vehicle (UGV), dealing with indoor and urban environmental factors.</p>\
    <h4>Aims</h4>\
      <ul>\
        <li>To understand the effects of an indoor urban environmental noise on data transmission.</li>\
        <li>To observe the effects of intermittent data on the performance of SLAM algorithms.</li>\
        <li>To implement effective data transmission and calculate SLAM algorithms off-board in real-time.</li>\
      </ul>\
    <h4>Report Abstract:</h4> <p>The ability for robots to position themselves in their surroundings is key to being able to\
 autonomously move and interact with its environment. Issues arise when a robot isn’t powerful enough to complete this task,\
 such as lightweight micro unmanned aerial vehicles (UAV), thus off-boarding simultaneous localisation and mapping (SLAM)\
 calculations to a more powerful nearby robot can alleviate this. In real-world applications, wireless networking issues\
 may cause communication packet-loss between robots, affecting the calculation of the map and localisation.\
 This phenomenon was analysed using a UAV and UGV (unmanned ground vehicle), utilising robotic teaming.\
 LiDAR laser scan data was sent from the UAV to the UGV via WiFi, which then produced a map of its local environment.\
 The objective of this research, in collaboration with DST Group, is to find the necessary communication reliability\
 needed for off-board SLAM calculations. It was discovered that at a nominally expected packet loss of twenty percent,\
 the calculated and actual trajectories of the UAV differ by approximately 0.65m on average. A recovery solution was\
 presented which reduces this to 0.45m.</p> <p>The full report can be supplied on request.</p>", category: 'robotics', priority:0},

{name: 'Robotic Arm Hand-Eye co-ordination',icon:roboticsLogo, image: "./assets/hand-eye.png",
   tags:['Matlab', 'OpenGL', 'OpenCV', 'C++', 'ABB robot', 'Python', 'Ubuntu'],
    text:'This project explores the use of a ABB robotic arm used for pick-and-place automation tasks. For dynamic operation and task-completion feed-back, computer vision is incorporated via a web-cam mounted in the work area.\
  More specifically, this project has been completed for an industry client, AME System Pty. Ltd., for automated cavity pin insertion. These pins are 3.5mm wide and are placed in holes between 5 and 9mm apart on a rubber socket.\
   Due to this small size, a high degree of accuracy and repeatability is required.\
<p>The full report can be viewed at <a href="https://github.com/PSmith4/Robotic-Hand-eye/blob/master/Report/HandEyereport.pdf">GitHub.</a></p>', category: 'robotics', priority:0},

{name: 'DST Group Div3D, Defect Data Visualiser',icon:csLogo, image: "./assets/ibl.png",
   tags:['ParaView', 'C++', 'python', 'trac', 'git', 'MySql', 'NASTRAN', 'CMake', 'QT'],
 text:"<h3>Industry Based Learning, DIV3d Project @ DST Group</h3>\
<p>The Defence Science and Technology Group is the Australian government's lead agency responsible for applying science and technology to safeguard Australia and\
 its national interests. DST Group consists of multiple\
 divisions which are further split into branches. I was placed in the Aircraft Structures Branch of the Aerospace Division under the guidance of my supervisor.\
  My role at DST Group consisted of analysing ‘Paraview’, an open source 3D graphics API, to evaluate possible solutions for implementing desired functionality into ‘Div3D’ while being guided by software requirements and specifications.\
  Div3D is a 3D visualisation program that would be used to display vehicle defect data-points ontop of finite element analysis vehicle models.</p> \
\
<p>The following is a list of the paraview C++ plugins that were developed during this period of work.</p>\
<ul>\
<li><strong>Nastran Reader:</strong>	Loads and displays Nastran finite element analysis .bulk files</li>\
<li><strong>IMSST Reader:</strong>	Loads and displays geometry from an external MYSQL database</li>\
<li><strong>CSV Reader:</strong>	Loads geometry from csv/tsv files. Displays information at points from a comma or tab separated text</li>\
<li><strong>Simple Metadata Annotation Filter:</strong>	Attaches data (a new array) to the model (source) allowing custom metadata to be added</li>\
<li><strong>Extract by String Value Fitler:</strong>	Displays a subset of the parent model (source) that matches geometry data criteria</li>\
<li><strong>Testing Code:</strong>	a unit testing framework to allow automated testing in a user friendly manner</li>\
<li><strong>Hover Dock:</strong>	QT gui to display information about when the mouse hovers over geometry</li>\
<li><strong>Selection Dock:</strong>	QT gui to display information when a selection is made</li>\
</ul>\
\
<p><strong>Skills used:</strong><p>\
<ul>\
<li><strong>Software architecture and extensibility:</strong> Experience was gained by developing plugins, having to design an overall project structure to enable sharing common\
 functionality throughout all plugins.</li>\
<li><strong>Optimisation:</strong> By developing the NASTRAN reader plugin whilst trying to reduce load times. Discovered that premature optimisations are not time or cost effective.\
 Also that the best optimisations are logic based (in contrast to technical optimisations) resulting in changes that require no extra effort to understand and can\
  be easily modified or extended.</li> \
<li><strong>Project Management:</strong> Experience with tools such as CMAKE and GIT have allowed me to manage software projects with more effectiveness.</li>\
</ul>", category: 'software', priority:0},

{name: 'Portfolio Website',icon:webLogo, image: DefaultImage,
   tags:['Heroku', 'React', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'Bootstrap', 'CSS', 'HTML5'],
    text:'', category: 'web', priority:0},

{name: 'Andy Rappos WordPress Website',icon:webLogo, image: webLogo,
   tags:['Amazon AWS EC2', 'WordPress'],
    text:'<p>A WordPress <a href="http://www.andyrappos.com/">website</a> set up on a amazonAWS EC2 instance.</p>\
    <p>Currently in maintenance mode (as requested by client) whilst waiting for content to be delivered.</p>', category: 'web', priority:1},

{name: 'Current-C, Currency Conversion Android App',icon:csLogo, image: "./assets/currency.png",
   tags:['Gradle', 'Java', 'Android Studio', 'external API'],
    text:'<h4>Vision Statement</h4>\
    <p>For lazy travellers who want a quick and easy way to find currency conversion rates. \
    “CurrentC” is an android application that uses the cloud to find the latest exchange rates. \
    Unlike our website competitors, our product is free to use and doesn’t have any advertising.</p>', category: 'software',priority:1},

{name: 'Pick and Place robot',icon:roboticsLogo, image: "./assets/pnp.png",
       tags:['C', 'PID', 'HCS12 uController', 'Code Warrior', 'Servo', 'Solenoid', 'matlab', 'solidworks'],
        text:'', category: 'robotics',priority:1},

{name: 'File Sharing App',icon:csLogo, image: csLogo,
   tags:['Java', 'TCP'],
    text:'', category: 'software',priority:2},

{name: 'Sliding Puzzle Solver',icon:csLogo, image: csLogo,
   tags:['C++', 'ASTAR', 'STL'],
   text:'', category: 'software',priority:2}
];

const gridName = "col-lg-3 col-md-4 col-sm-6 col-xs-12";

class ProjectSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {forceShow:-1};
  }

  onShowOtherModal(index){
    this.setState({forceShow:index});
  }

  render() {
    //TODO: we could send a 'project' object instead of all the parameters...
    let keyNo = 0;
    let items = PROJECT_DEFINITIONS.map((project)=>{
      let forceDisplay = this.state.forceShow == (keyNo);
      return(
        <div key = {keyNo} className={gridName}>
          <ProjectItem
            key = {keyNo}
            name={project.name}
            icon={project.icon}
            image={project.image}
            tags={project.tags}
            category = {project.category}
            toDisplay = 'true'
            text={project.text}
            index = {keyNo++}
            showOtherModal = {this.onShowOtherModal.bind(this)}
            forceDisplay = {forceDisplay}
            priority = {project.priority}
            />
        </div>
      );
    });

    return (
    <div className = "container-fluid" style = {projectSectionStyle}>
      <p style ={headings.headingStyle} id='projects'>Projects i've worked on</p>
      <div className="row row-eq-height" >
        {items}
      </div>
    </div>  );
  }
}

module.exports = ProjectSection;
