// Type writer Library
var app = document.querySelector('.type-writer');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Frontend Developer (Angular)')
.pauseFor(2500)
.deleteAll()
// .typeString('Backend Developer (Dotnet)')
// .pauseFor(2500)
// .deleteAll()
// .typeString('Fullstack (Angular, Dotnet)')
// .pauseFor(2500)
.start();

let months = [
  'January',
  'Februay',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

let skills = [
  {
    title:"Frontend",
    data:[
      {name:"HTML",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"CSS",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Javascript(ES6)",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Jquery",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"SCSS",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Typescript",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Angular",image:"../images/icons/html5-badge-h-solo.png"},
    ]
  },
  {
    title:"Libraries",
    data:[
      {name:"Bootstrap",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Tailwind CSS",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Angular Material Design",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Prime Ng",image:"../images/icons/html5-badge-h-solo.png"},
    ]
  },
  {
    title:"Backend",
    data:[
      {name:"C#",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Firebase",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Json Server",image:"../images/icons/html5-badge-h-solo.png"},
    ]
  },
  {
    title:"Other",
    data:[
      {name:"Git & Github",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"NPM",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Json & Ajax",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Network",image:"../images/icons/html5-badge-h-solo.png"},
      {name:"Web Security",image:"../images/icons/html5-badge-h-solo.png"},
      
    ]
  },
]

let experience = [
  {
    jobTitle:"Angular Developer",
    company:"IClick Soft",
    startDate:"03-2022",
    endDate:"09-2022",
    description:"Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.",
    skills:["HTML","CSS","JavaScript","Jquery","Bootstrap"]
  },
  {
    jobTitle:"Angular Developer",
    company:"IClick Soft",
    startDate:"03-2022",
    endDate:"09-2022",
    description:"Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.",
    skills:["HTML","CSS","JavaScript","Jquery","Bootstrap"]
  },
]

let projects = {
  "angular":[
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
  ],
  "vanilla_javascript":[
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
  ],
  "companies_tasks":[
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
    {
      name:"Trackify",
      image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
      startDate:"03-2022",
      endDate:"03-2022",
      description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
      authers:[
        {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""},
        {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:""}
      ],
      githubRepo:"",
      liveDemo:"",
      tools:["Html","Css","Js","Jquery","Bootstrap"]
    },
  ],
}

let education = [
  {
    corseName:"Angular Developer",
    type:"Corse",
    startDate:"03-2022",
    endDate:"09-2022",
    description:"I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
  },
  {
    corseName:"Angular Developer",
    type:"Corse",
    startDate:"03-2022",
    endDate:"09-2022",
    description:"I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
  },
]


// Get Skills
function mySkills(){
  let htmlText = "";
  skills.forEach(element => {
    let picsHtmlText = "";
    picsHtmlText += `<div class="package">
    <h4 class="title">${element.title}</h4>
    <div class="tools">
    `

    element.data.forEach(ele => {
      picsHtmlText += `<div class="tool">
      <img src="${ele.image}" alt="">
      <div class="name">${ele.name}</div>
    </div>`
    });


    picsHtmlText += `</div>
    </div>`

    htmlText += picsHtmlText;
  });
  return htmlText;
}

let skillsContainer =document.querySelector('.container-packages').innerHTML = mySkills()


function myExperience(){
  let htmlText = "";
  experience.forEach(element => {
    let picsHtmlText = "";
    picsHtmlText += `<div class="experience left-bulit">
    <div class="head">
      <img src="" alt="" width="50" height="50">
      <div class="right">
        <div class="job-title">${element.jobTitle}</div>
        <div class="company">${element.company}</div>
        <div class="date"><span class="start-date">${representDate(element.startDate)}</span> - <span class="end-date">${representDate(element.endDate)}</span></div>
      </div>
    </div>
    <p class="info">${element.description}</p>
    <div class="skills-use">
      <div class="title">Skills: </div>
      <ul class="skills">
    `

    element.skills.forEach(ele => {
      picsHtmlText += `<li>${ele}</li>`
    });


    picsHtmlText += `</ul>
    </div>
  </div>`

    htmlText += picsHtmlText;
  });
  return htmlText;
}
let experienceContainer = document.querySelector('.container-experience').innerHTML = myExperience()

function representDate(date){
  let monthStr = date[0] + date[1];
  return months[Number(monthStr) - 1] + date.slice(2).replace('-'," ")
}

function linksProjectsFunc(){
  let htmlTxt = `<li class="active" data-filter="all">All</li>`
  let links = Object.keys(projects)
  links.forEach(link => {
    htmlTxt += `<li data-filter="${link}">${upperAndReplace(link)}</li>`
  });
  return htmlTxt;
}
let linksProjects = document.querySelector('.links-projects').innerHTML = linksProjectsFunc()


function upperAndReplace(text){
  let txtReplaced = text.replace('_',' ');
  let wordsArray = txtReplaced.split(' ');
  let finishText = "";
  wordsArray.forEach(element => {
    finishText += element[0].toUpperCase() + element.slice(1)
    finishText += " "
  });
  return finishText;
}

function getProjectById(id){
  if(id == "all") return getProjectsAll()
  let htmlText = ``;
  projects[id].forEach(element => {
    let txtHtml = `<div class="project" onclick="popup(${element})">
    <img src="${element.image}" alt="">
    <ul class="tools">`
    // console.log(element.tools);
    element.tools.forEach(tool => {
      txtHtml +=`<li>${tool}</li>`
    });
    txtHtml += `</ul>
    <div class="project-name">${element.name}</div>
    <div class="date"><span class="start-date">${representDate(element.startDate)}</span> - <span class="end-date">${representDate(element.endDate)}</span></div>
    <p class="description">${element.description}</p>
    <div class="authers">`

    element.authers.forEach(author => {
      txtHtml +=`<img src="${author.image}" alt="">`
    });

    txtHtml += `</div>
    </div>`
    htmlText += txtHtml
  });
  return htmlText
}
function getProjectsAll(){
  let links = Object.keys(projects)
  let htmlText = ``
  links.forEach(element => {
    htmlText += getProjectById(element)
  });
  return htmlText
}

let myProjects = document.querySelector('.projects-cards')
myProjects.innerHTML = getProjectById('angular')

// console.log(getProjectById('all'));

let linksProjectsNav =  document.querySelectorAll('.links-projects li')
linksProjectsNav.forEach(element => {
  element.addEventListener('click',function (el){
    removeClassActive(linksProjectsNav)
    el.target.classList.add('active')
    myProjects.innerHTML = getProjectById(el.target.dataset.filter)
  })
});

function removeClassActive(elArray){
  elArray.forEach(element => {
    element.classList.remove('active')
  });
}

function getEducation(){
  let htmlText = "";
  education.forEach(element => {
    let picsHtmlText = "";
    picsHtmlText += `<div class="experience right-bulit">
    <div class="head">
      <img src="" alt="" width="50" height="50">
      <div class="right">
        <div class="job-title">${element.corseName}</div>
        <div class="company">${element.type}</div>
        <div class="date"><span class="start-date">${representDate(element.startDate)}</span> - <span class="end-date">${representDate(element.endDate)}</span></div>
      </div>
    </div>
    <p class="info">${element.description}</p>
    `

    picsHtmlText += `
  </div>`

    htmlText += picsHtmlText;
  });
  return htmlText;
}

let educationSection = document.querySelector('#education .container-experience').innerHTML = getEducation()


let publicKey = "ynp6hYaQA0QWS8m58";
let serviceId = "service_k7r69vt";
let templateId = "template_b70utpv";

var templateParams = {};

(function(){
  emailjs.init(publicKey);
})();


function sendEmail(){
  let from_name = document.getElementById('name').value
  let message = document.getElementById('message').value
  let email_id = document.getElementById('email').value
  subject = document.getElementById('subject').value
  
  var templateParams = {
    from_name,
    message,
    email_id,
    subject
  };

  if (from_name !== "" || message != "" || email_id != "" || subject != "") {
    emailjs.send(serviceId, templateId, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       Swal.fire(
        'Good job!',
        'Email Send Successfully!',
        'success'
      )
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  
  
}

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault()
  sendEmail()
} )


function popup(project){
  let overlay = document.createElement("div");
  overlay.classList.add("popup-overlay")

  let txtHtml = `<div class="project">`
  txtHtml += `
    <div class="top">
      <button class="close" onclick="closePopup()"><i class="fa-solid fa-xmark fa-lg"></i></button>
    </div>
    <img src="${project.image}" alt="">
    <div class="project-name">${project.name}</div>
    <div class="date"><span class="start-date">${representDate(project.startDate)}</span> - <span class="end-date">${representDate(project.endDate)}</span></div>
    `

    
    txtHtml += `<ul class="tools">`

    project.tools.forEach(tool => {
      txtHtml +=`<li>${tool}</li>`
    });

    txtHtml +=`</ul>
    <p class="description">${project.description}</p>`

    txtHtml +=`<div class="authers">`

    project.authers.forEach(author => {
      txtHtml +=`
      <div class"mauther">
        <div class="left">
          <img src="${author.image}" alt="">
          <h3>${author.name}</h3>
        </div>
        <div class="right">
          <a target="_blank" href="${author.github}"><i class="fa-brands fa-github fa-lg" style="color: #ffffff;"></i></a>
          <a target="_blank" href="${author.linkedIn}"><i class="fa-brands fa-linkedin fa-lg" style="color: #ffffff;"></i></a>
        </div>
      </div>
      `
    });


    txtHtml += `</div>`
    txtHtml += `<div class="project-links">
      <a href="${project.githubRepo}">View Code</a>
      <a href="${project.liveDemo}">View Live Demo</a>
    </div>`




    txtHtml += `</div>
    </div>`

    overlay.innerHTML = txtHtml
  
  // document.body.appendChild(overlay);
  document.body.append(overlay)

  document.body.style.overflowY = 'hidden'
}

function closePopup(){
  document.querySelector('.popup-overlay').remove()
  document.body.style.overflowY = 'scroll'
}

popup({
  name:"Trackify",
  image:'../images/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png',
  startDate:"03-2022",
  endDate:"03-2022",
  description:`Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee`,
  authers:[
    {image:'../images/100614635.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:"#"},
    {image:'../images/64485885.jpeg',name:"Mohamed",github:"https://github.com/devomohamed",linkedIn:"#"}
  ],
  githubRepo:"#",
  liveDemo:"#",
  tools:["Html","Css","Js","Jquery","Bootstrap"]
})