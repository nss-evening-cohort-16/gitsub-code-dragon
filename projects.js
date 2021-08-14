let projectArr = [
    {
        name: "project 1",
        description: "project description"
    },
    {
        name: "project 2",
        description: "project description 2"
    },
    {
        name: "project 3",
        description: "project description 3"
    },
    {
        name: "project 4",
        description: "project description 4"
    }
]

let lastUpdated = new Date()

const renderToDom = (divId, textToRender) => {
    const selectedDiv = document.querySelector(divId)
    selectedDiv.innerHTML = textToRender;
  }

const projectResult = (projectArray) => {
    let domString = "";
    projectArray.forEach((project)  => {
        domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-text">${project.name}</h4>
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


const init = () => {
    projectForm();
    projectResult(projectArr);
}

init();

// export { projectForm };