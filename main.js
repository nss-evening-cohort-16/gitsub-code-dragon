import { profileArray, addCardToDom } from "./profile.js";


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
    addCardToDom(profileArray, "#profile");
    formDropdownEvents();
};
onit();
