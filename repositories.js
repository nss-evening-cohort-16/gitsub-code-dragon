let repositories = [{
        name: "sorting-Hash",
        description: "sorts hats",
        pin: true

    },
    {
        name: "products",
        description: "products",
        pin: false
    }, ,
    {
        name: "test",
        description: "test",
        pin: false
    }
];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};
const handleRepositoriesSubmit = (event) => {
    event.preventDefault();
    const newRepositories = {
        name: document.querySelector("#project").value,
        description: document.querySelector("#projdesc").value,
        lastUpdated: Date(Date.now()).substring(0, 33),
        pin: true
    };
    console.log("newRepositories");
    console.log(newRepositories);
    const targetId = event.target.id;
    const targetType = event.target.type;
    console.log("targetid   "+ targetId);
    repositories.push(newRepositories);
    repositories.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    cardBuilderRepositories(repositories, "#listRepID");
    console.log(event);
};

const cardBuilderRepositories = (cardArray, divid) => {
    let domString = "";

    cardArray.forEach((card, i) => {
        if (card.pin) {
            btntext = "unpin it";
        } else {
            btntext = "pin it";
        }

        domString += `
                <div class="card" style="width: 18rem;" id="notexpel">
                  
                  <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-description">${card.description}</p>
                    <div class="pin-body" id=togglepin>
                    <button type="button" id=${i} class="btn btn-primary">${btntext}</button> </div>
                     
                    
                  </div>
                </div>
                `;

    });
    renderToDom(divid, domString);
};


const createProjectForm = () => {

    const createProjectstr = `<form class="frmName" id ="addProject">
<div class="btn btn-primary">
    <label for="project" class="projectentry">Project Board Name</label>
    <input required type="text" class="projectName" id="project" placeholder="Enter name">
    <label for="projdesc" class="projectdescLabel">Description</label>
    <input  type="text" class="projectdescription" id="projdesc" placeholder="Enter description">
    <button type="submit" id= "newid" class="btn btn-primary">Create Project</button>
</div>
</form>`
    console.log("displayform");

    renderToDom("#formRepID", createProjectstr)
};


const btnst = () => {
    document.querySelector("#formRepID").addEventListener("submit", handleRepositoriesSubmit);
    document.querySelector("#listRepID").addEventListener("click", togglepinCard);
};


const togglepinCard = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    repositories[targetId].pin =! repositories[targetId].pin;
    console.log(targetId);
    cardBuilderRepositories(repositories, "#listRepID");
}



cardBuilderRepositories(repositories, "#listRepID");
createProjectForm();
btnst();

//export { createProjectForm}