let projectArr = [{
    name: "Test Project 1",
    description: "Test Project Description"
}
]

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
            <h5 class="card-text">${project.name}</h5>
            <p class="card-text">${project.description}</p>
        </div>
    </div>
    `;
    });

    renderToDom('#projectDiv', domString);
};


const init = () => {
    projectResult(projectArr);
}

init();

