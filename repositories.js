import {profileArray, addCardToDom} from "./profile.js"

import { renderToDom } from "./renderToDom.js"

import { repositories } from "./data.js";


const handleRepositoriesSubmit = (event) => {
    event.preventDefault();
    const newRepositories = {
        name: document.querySelector("#project").value,
        description: document.querySelector("#projdesc").value,
        lastUpdated: Date(Date.now()).substring(0, 33),
        pin: true,
        star: false
    };
    repositories.push(newRepositories);
    repositories.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    cardBuilderRepositories(repositories, "#listRepID");
    console.log(event);
};

const cardBuilderRepositories = (cardArray, divid) => {
    let domString = "";

    cardArray.forEach((card, i) => {
        let btntext = "";
        let btnstar = "";
        if (card.pin) {
            btntext = "unpin it";
        } else {
            btntext = "pin it";
        }
        if (card.star) {
            btnstar = "unstar it";
        } else {
            btnstar = "star it";
        }

        domString += `
                <div class="card repo-card" style="width: 18rem;" id="notexpel">
                  
                  <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-description">${card.description}</p>
                    <div class="pin-body" id=togglepin><button type="button" id=${i} class="btn btn-primary">${btntext}</button> </div> 
                  </div>
                </div>
                `;
                //<div class="star-body" id=togglestar${i}><button type="button" id=${i} class="btn btn-primary">${btnstar}</button> </div>
        
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
    if (targetType === "button") {
        repositories[targetId].pin = !repositories[targetId].pin;
        console.log(targetId);
        cardBuilderRepositories(repositories, "#listRepID");
    }
    if (targetType === "text") {
        repositories[targetId].star = "test";
        console.log(targetType);
        cardBuilderRepositories(repositories, "#listRepID");
    }
}


addCardToDom(profileArray, "#repo-profile")
cardBuilderRepositories(repositories, "#listRepID");
createProjectForm();
btnst();

//export { createProjectForm}
