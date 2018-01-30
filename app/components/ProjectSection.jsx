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

  {name: 'Playlister',icon:webLogo, image: './assets/playlister.png',
  tags:['Heroku','Create-React-App', 'CSS', 'HTML5', 'Semantic', 'Redux', 'React-Router', 'Passport', "User Login", 'React','REST API', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'Java', 'Maven', 'Gradle', 'Android Studio'],
   text:
   `
   <a href='https://thawing-atoll-11089.herokuapp.com/' target="_blank">Check it out.</a>
   <h3>Aim:</h3>
   <p>The purpose of this project is to gain experience using and integrating multiple different software technologies. A music management system would be an appropriate candidate as it requires development of a web user interface, server back-end with database functionality and device clients applications.</p>
   
   <h3>Pitch:</h3>
   <p>'One convenient location to access all your music',
   Having to find all your music files to make playlists can be a pain. With ‘Playlister’, you can access your music from anywhere and make playlists where you like, when you like. ‘Playlister’ finds music on all your devices and allows you to make and arrange playlists from anywhere via the cloud.</p>
   
   <p>'Listen and watch music videos of your favorite music',
   Music tracks are played back sequentially as music videos on YouTube. Access and play all your music from anywhere.</p>
   
   <h3>Features:</h3>
   <ul>
   <li>PC & Mobile app scans your device for music.</li>
   <li>Playback tracks on the Playlister website via YouTube.</li>
   <li>Search for your music and view lists of music in the folder explorer view.</li>
   <li>Label and sort your music into playlists.</li>
   <li>See which devices your tracks and stored on.</li>
   </ul>
   
   <h3>Website Specifications:</h3>
   <ul>
   <li>Responsive and Fluid UI for mobile and PC browsers.</li>
   <li>React w/ ES6 using Semantic as CSS framework.</li>
   <li>User login & registration.</li>
   <li>Tour introduction.</li>
   <li>Embedded YouTube player for tracks.</li>
   <li>Redux and React-Router to manage state and history.</li>
   </ul>
   
   <h3>Server Specification:</h3>
   <ul>
   <li>REST API for website and device apps.</li>
   <li>NodeJS ES6 server, with service worker (Progressive Web App).</li>
   <li>(Passport) Local/Http authentication for devices and website.</li>
   <li>Postgres with Sequelize ORM.</li>
   <li>Utilises YouTube API to automatically search YouTube for relevant videos for uploaded tracks.</li>
   </ul>
   
   <h3>Playlister App Library Specifications:</h3>
   <ul>
   <li>Java library for functionality common to both Mobile and PC apps.</li>
   <li>Sends + Receives data from server.</li>
   <li>Login / Logout with server.</li>
   </ul>
   
   <h3>Mobile/PC App Specifications:</h3>
   <ul>
   <li>Mobile app was developed as a Gradle Android Studio Java project.</li>
   <li>PC app was developed as a Maven IntelliJ Java project.</li>
   <li>Read MP3 for ID3 tag details.</li>
   <li>Scans device for tracks at specified locations.</li>
   <li>Gui to log in, select scan locations and view scan results.</li>
   <li>PC app is visible in the system tray.</li>
   </ul>
   
   <p>
   View the tour, or use username 'tom', password 'rap' to view an operational account. <a target="_blank" href='https://thawing-atoll-11089.herokuapp.com/'>Check it out</a>
   </p>
   
   <p>
   GitHub pages for code:
   <a target="_blank" href='https://github.com/t-rappos/playlister-website'>Website & Server<a/>
   <a target="_blank" href='https://github.com/t-rappos/playlister-android'>Mobile App<a/>
   <a target="_blank" href='https://github.com/t-rappos/playlister-pc'>Pc App<a/>
   </p>
   `
   , category: 'web', priority:0},


  {name: 'Location Based System using LoRa',icon:roboticsLogo, image: './assets/ltd.png',
  tags:['C++', 'Embedded', 'SodaqOne', 'GPS', 'LoRA', 'Slack', 'IoT', 'MQTT'],
   text:'<p>In the context of this project, the Lora Test Devices (LTDs) were implemented to investigate the medium of LoRa data communication.\
Specifically, to compare onboard GPS tracking against a novel LoRa triangulation methodology.\
<p>The motivating use case for the LTD has been a general-purpose tracker for use in tracking elderly patients in nursing homes.\
The LTDs could alert staff if a patient has left the vicinity or fallen over accidently.</p>\
<p>Features:</p>\
<ul><li>Obtains data from its internal or externally attached sensors, including GPS data.</li>\
<li>Sends data to server for storage and further analysis.</li>\
<li>Receives data from server and acts on data to change internal or externally attached peripherals.</li>\
</ul>\
<p>Specifications:</p>\
<ul><li>SodaqOne microcontroller</li>\
<li>Software programmed in C++ following embedded core guidelines</li>\
<li>GPS tracking</li>\
<li>LoRA data transmission over MQTT</li>\
<li>Low Power Mode & Watchdog error handling</li>\
<li>General Purpose interface for analog / digital sensors</li>\
<li>Automated unit tests using Visual Studio for non-embedded functionality</li>\
<li>Automated system integration tests for LTD-Server message protocol adherence (Python using Serial interface) </li>\
</ul>\
 <p>More information can be provided on request.</p>\
   ', category: 'robotics', priority:0},

{name: 'Auction House System',icon:webLogo, image: './assets/auction-house.png',
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5'],
    text:'<h3>Aim</h3><p>The purpose of this project is to gain experience using and integrating multiple different software technologies.\
 An auction listing system would be an appropriate candidate as it requires development of user interfaces, server back-ends and database functionality. \
 This project will be set up for multiple collaborators but will be a single developer effort.</p>\
 It was also successfully deployed on <a target="_blank" href = "https://t-rappos-auction-house.herokuapp.com">Heroku</a>\
 <h3>About</h3>\
 <p>Users can list items (user created) on an online auction website for sale for other users to either buyout or bid on.\
   Items listed can be filtered to highlight interesting items. Once an item is successfully purchased, it is placed in the buyers personal inventory.\
   The user can view their own inventory and inspect each item.</p>\
 <p>This project has finished initial development, the code can be viewed at <a target="_blank" href="https://github.com/t-rappos/auction-system">GitHub</a></p>', category: 'web', priority:0},

{name: 'Chat Server',icon:webLogo, image: './assets/chat-server.png',
   tags:['Heroku', 'Travis CI', 'TDD', 'React', 'Socket IO', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'CSS', 'HTML5', 'Foundation'],
    text:'<p>Chat Server was created to test a proposed technology stack for web applications. It was also successfully deployed on <a href="https://chat-server-t-rappos.herokuapp.com/#/?_k=32gzvg">Heroku</a>.\
  <p>Features:</p>\
  <ul><li>User can set name.</li>\
<li>User can see list of online users.</li>\
<li>User can post messages.</li>\
<li>User can see an up-to-date list of messages.</li>\
<li>Application runs in real-time without needing webpage refreshes.</li></ul>\
  <p>See <a target="_blank" href="https://github.com/t-rappos/auction-system/blob/master/doc/chat-server.md">GitHub</a> for more information</p>\
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
<p>The full report can be viewed at <a target="_blank" href="https://github.com/PSmith4/Robotic-Hand-eye/blob/master/Report/HandEyereport.pdf">GitHub.</a></p>', category: 'robotics', priority:0},

{name: 'DST Group Div3D, Defect Data Visualiser',icon:csLogo, image: "./assets/ibl.png",
   tags:['ParaView', 'C++', 'python', 'trac', 'git', 'MySql', 'NASTRAN', 'CMake', 'QT'],
 text:"<h3>Industry Based Learning, DIV3d Project @ DST Group</h3>\
<p>The Defence Science and Technology Group is the Australian government's lead agency responsible for applying science and technology to safeguard Australia and\
 its national interests. DST Group consists of multiple\
 divisions which are further split into branches. I was placed in the Aircraft Structures Branch of the Aerospace Division.\
  My role at DST Group consisted of developing a 3D visualisation product, DIV3D, by extending and configuring an existing\
   open source scientific visualisation tool named ParaView, based on VTK. Div3D would be used to display vehicle defect\
    data-points on top of finite element analysis vehicle models.</p> \
\
<p>The following is a list of the paraview C++ plugins that were developed during this period of work to meet DIV3D requirements.</p>\
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
 functionality throughout all plugins using existing best practices.</li>\
<li><strong>Optimisation:</strong> By developing the NASTRAN reader plugin whilst trying to reduce load times. Discovered that premature optimisations are not time or cost effective.\
 Also that the best optimisations are logic based (in contrast to technical optimisations) resulting in changes that require no extra effort to understand and can\
  be easily modified or extended.</li> \
<li><strong>Project Management:</strong> Experience with tools such as CMAKE and GIT.</li>\
</ul>", category: 'software', priority:0},

{name: 'Portfolio Website',icon:webLogo, image: DefaultImage,
   tags:['Heroku', 'React', 'NodeJS', 'Express', 'PostgreSQL', 'ES6', 'Bootstrap', 'CSS', 'HTML5'],
    text:"<p>This portfolio website was created to showcase various projects that i've worked on.</p><a target='_blank' href='https://github.com/t-rappos/Portfolio/'>See github for more information.</a>", category: 'web', priority:0},

{name: 'Andy Rappos WordPress Website',icon:webLogo, image: webLogo,
   tags:['Amazon AWS EC2', 'WordPress'],
    text:'<p>A WordPress <a target="_blank" href="http://www.andyrappos.com/">website</a> set up on a amazonAWS EC2 instance.</p>\
    <p>Currently in maintenance mode (as requested by client) whilst waiting for content to be delivered.</p>', category: 'web', priority:1},

{name: 'Current-C, Currency Conversion Android App',icon:csLogo, image: "./assets/currency.png",
   tags:['Gradle', 'Java', 'Android Studio', 'external API'],
    text:'<h4>Functionality</h4>\
    <ul>\
      <li>Convert currency amounts using standard ISO currency codes</li>\
      <li>Save commonly used currency conversions and view in a list</li>\
      <li>Add a new custom currency to use</li>\
      <li>View a list of currency rates</li>\
    </ul>', category: 'software',priority:1},

{name: 'Pick and Place robot',icon:roboticsLogo, image: "./assets/pnp.png",
       tags:['C', 'PID', 'HCS12 uController', 'Code Warrior', 'Servo', 'Solenoid', 'matlab', 'solidworks'],
        text:'<h4>Task</h4><p>To create a robotic arm that will pick up metal objects and place them in a basket quickly.</p>\
        <h4>Functionality</h4>\
        <ul>\
          <li>Design and construction of arm mechanism.</li>\
          <li>Construction of automated object feeder, to allow arm to pick up objects automatically.</li>\
          <li>Design of electrical circuits for signal conditioning (low pass filter) and power regulation.</li>\
          <li>System identification using Matlab to determine a transfer function model where\
             the voltage to the motor is the input and the position of the beam (in degrees) is the output.</li>\
          <li>Implement PID feedback controller on the microcontroller.</li>\
        </ul>', category: 'robotics',priority:1}
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
      <p style ={headings.headingStyle} id='projects'>Projects I've worked on</p>
      <div className="row row-eq-height" >
        {items}
      </div>
    </div>  );
  }
}

module.exports = ProjectSection;
