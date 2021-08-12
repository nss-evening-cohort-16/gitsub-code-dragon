repositories = [{
        name: "sorting-Hash",
        description: "sorts hats",
        pin: true

    },
    {
        name: "products",
        description: "products",
        pin: false
    },
    ,
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

    repositories.push(newRepositories);
    repositories.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    cardBuilderRepositories(repositories, "#listRepID");
    console.log(event);
};

const cardBuilderRepositories = (cardArray, divid) => {
    let domString = "";

    cardArray.forEach((card, i) => {
            if (card.pin) {
                domString += `
                <div class="card" style="width: 18rem;" id="notexpel">
                  
                  <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-description">${card.description}</p>
                    <div class="pin-body" id=pinid>
                    <button type="button" id=${i} class="btn btn-primary">unpin it</button> </div>
                  //  <footer class> ${card.tag1}  </footer>  
                  //  <footer> ${card.langUsed}   ${card.star}   ${card.lastUpdated}   </footer>  
                    
                  </div>
                </div>
                `;
            } else {
                domString += `
                <div class="card" style="width: 18rem;" id="notexpel">
                  
                  <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-description">${card.description}</p>
                    <div class="pin-body" id=unpinid>
                    <button type="button" id=${i} class="btn btn-primary">pinit</button> </div>
                  //  <footer> ${card.tag1}  </footer>  
                  //  <footer> ${card.langUsed}   ${card.star}   ${card.lastUpdated}   </footer>  
                    
                  </div>
                </div>
                `;;
            }
        
        

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
    document.querySelector("#pinid").addEventListener("click", unpinCard);
    document.querySelector("#unpinid").addEventListener("click", pinCard);
};


const unpinCard = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    console.log(targetId);
    repositories[targetId].pin = false;
    cardBuilderRepositories(repositories, "#listRepID");
}
const pinCard = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    console.log(targetId);
    repositories[targetId].pin = true;
    cardBuilderRepositories(repositories, "#listRepID");
}


cardBuilderRepositories(repositories, "#listRepID");
createProjectForm();
btnst();