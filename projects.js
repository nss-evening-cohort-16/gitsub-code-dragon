import {profileArray, addCardToDom} from "./profile.js"
import { renderToDom } from "./renderToDom.js"
import {projectArr} from "./data.js"
let lastUpdated = new Date()
const projectResult = (projectArray) => {
    let domString = "";
    projectArray.forEach((project)  => {
        domString += `
    <div class="card project-card">
  <div class="project-header">
  </div>
  <div class="card-body">
    <h5 class="card-title">${project.name}</h5>
    <p class="card-text">${project.description}</p>
    <p class="card-text">${"Last Updated:" + " " + lastUpdated}</p>
  </div>
</div>
    `;
    });
    renderToDom('#projectDiv', domString);
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
    renderToDom("#formContainer", domString);
    projectFormEvents(); 
   };
const projectFormEvents = () => {
    const projectFormElement = document.querySelector('#projectForm')
    projectFormElement.addEventListener("submit", handleProjectForm);
};
const searchBar = document.querySelector('#ProjectSearchBar');
searchBar.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredProjects = projectArr.filter( project => {
        return project.name.toLowerCase().includes(searchString) ||
        project.description.toLowerCase().includes(searchString);
    });
    projectResult(filteredProjects);
});
const init = () => {
    addCardToDom(profileArray, "#project-profile")
    projectForm();
    projectResult(projectArr);
}
init();