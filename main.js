<<<<<<< HEAD
// import { projectForm } from "./projects.js";
import {profileArray} from "./profile.js";

=======
//import {createProjectForm} from "./repositories.js"

const profileArray = [
    {
        fullName: "Ruby Kaur",
        profileName: "Ruby-Kaur-OG",
        aboutMe: " Highly experience Database and data warehouse professional with extensive experience in designing, coding, ETL, testing and Business Intelligence solutions. Familiar with SDLC and Agile development pattern and played key role in a variety of project from development to deployment. Interested in Big Data technologies (Hadoop, Netezza etc.) and Business Intelligence solutions (Cognos, Business Objects, Tableau etc.).",
        followersCount: 10000,
        following: 500,
        starCount: 300,
        location: "Franklin, TN",
        emailAddress: "ruby@rubykaur.com",
        website: "rubykaur.com",
        linkedIn: "https://www.linkedin.com/in/ruby-kaur/",
    }
>>>>>>> main


const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addCardToDom= (array) => {
    let profileCard = ""
    array.forEach((obj) => {
    profileCard += 
    `<div class="profile-card  card" style="width: 23rem;">
    <img class="profile-img" src="https://media-exp1.licdn.com/dms/image/C5603AQH7sqQfv4H2cQ/profile-displayphoto-shrink_800_800/0/1625710416088?e=1634169600&v=beta&t=RvNcXZO3TdycR4piT--roZBF5pnfop8salmH2d64ZR4" class="card-img-top" alt="${obj.fullName}">
    <div class="card-body">
      <h5 class="card-title">${obj.fullName}</h5>
      <h6 class="profile-name"><em>${obj.profileName}</em></h6>
      <p class="card-text">${obj.aboutMe}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="profile-list list-group-item">${obj.followersCount} <em>followers</em> ${obj.following} <em>following</em></li>
      <li class="profile-list list-group-item"> &#11088; : ${obj.starCount} </li>
      <li class="profile-list list-group-item"> &#128205; : ${obj.location}</li>
      <li class="profile-list list-group-item"> &#128231; : ${obj.emailAddress}</li>
      <li class="profile-list list-group-item"> &#128279; : ${obj.website}</li>
      <li class="profile-list list-group-item"> &#9989; :<a href="https://www.linkedin.com/in/ruby-kaur/"> ${obj.linkedIn}</a></li>
    </ul>
    <div class="card-body">
    </div>
  </div>`;
    })

    renderToDom("#profile", profileCard);
}

const dropDownSelectEvents = (event) => {
    if(event.target.id === "repo-form"){
        createProjectForm()
        console.log("repo form")
    }
    if(event.target.id === "proj-form"){
        projectForm()
        console.log("proj form")
    }
    if(event.target.id === "pack-form"){
        // buildForm(); builds package form
        console.log("pack form")
    }
}

const formDropdownEvents = () => {
    document
      .querySelector("#dropdown-div")
      .addEventListener("click", dropDownSelectEvents);

  };
  const handleProjectForm = (event) => {
    event.preventDefault();
    const newProject = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        date: document.querySelector('#lastUpdated')
    };

    projectArr.push(newProject);
    projectResult(projectArr);


    document.querySelector('#projectForm').reset()
}


  const projectForm = () => {
    const domString = `
    <form id="projectForm" class="PForm">
      <div class="Label-Text">
        <label for="name" class="form-body">Project Name</label>
        <input required type="text" class="form-control" id="name">
      </div>
      <div class="Label-Text">
        <label "for="description">Description (Optional)</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
        <button type="submit" class="btn btn-primary">Create Project</button>
    </div>
    </form>
   `;
   
    renderToDom("#renderForms", domString);

    projectFormEvents();  
   };

    const projectFormEvents = () => {
        const projectFormElement = document.querySelector('#projectForm')
        projectFormElement.addEventListener("submit", handleProjectForm);
    };

const onit = () => {
    addCardToDom(profileArray);
    formDropdownEvents();
};

onit();