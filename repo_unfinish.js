import {profileArray, addCardToDom} from "./profile.js"

import { renderToDom } from "./renderToDom.js"

import { repositories } from "./data.js";




// const searchBar = document.getElementById('repsearchBar');
// const searchCard = (event) => {
//     const searchString = e.target.value.toLowerCase();
//     const filteredCharacters = repositories.filter((repository) => {
//         return (
//             repository.name.toLowerCase().includes(searchString) ||
//             repository.description.toLowerCase().includes(searchString)
       
//         );
//         console.log(filteredCharacters);

// });
// console.log("searchbar");
// cardBuilderRepositories(filteredCharacters, "#listRepID");
// console.log("searchbar2");
// };

const searchBar = document.getElementById('repsearchBar');


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);

    const filteredCharacters = repositories.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredCharacters);
    cardBuilderRepositories(filteredCharacters, "#listRepID");
});





const handleRepositoriesSubmit = (event) => {
    event.preventDefault();
    const newRepositories = {
        name: document.querySelector("#repo").value,
        description: document.querySelector("#repodesc").value,
        lastUpdated: Date(Date.now()).substring(0, 33),
        pin: true,
        star: false
    };
    repositories.push(newRepositories);    
    repositories.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    cardBuilderRepositories(repositories, "#listRepID");
    document.getElementById("addrepo").reset();
    //document.querySelector("#repo").value="";
    //document.querySelector("#repodesc").value="";
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
                    <div class="pin-body" ><button type="button" id="togglepin--${i}" class="btn btn-primary">${btntext}</button> </div> 
                    
                  </div>
                </div>
                `;
                //<div class="star-body" id="togglestar--${i}"><button type="button" class="btn btn-primary">${btnstar}</button> </div>
                //<div class="star-body" id=togglestar${i}><button type="button" class="btn btn-primary">${btnstar}</button> </div>
               
                
        
    });
    renderToDom(divid, domString);
};


const createProjectForm = () => {

    const createProjectstr = `<form class="frmName" id ="addrepo">
<div class="btn btn-primary">
    <label for="repo" class="repoentry">Repository Name</label>
    <input required type="text" class="repoName" id="repo" placeholder="Enter name">
    <label for="repodesc" class="repodescLabel">Description</label>
    <input  type="text" class="Repository description" id="repodesc" placeholder="Enter description">
    <button type="submit" id= "newid" class="btn btn-primary">Create Repository</button>
</div>
</form>`
    console.log("displayform");

    renderToDom("#formRepID", createProjectstr)
};


const btnst = () => {
    document.querySelector("#formRepID").addEventListener("submit", handleRepositoriesSubmit);
    document.querySelector("[id^='togglepin']").addEventListener("click", togglepinCard);
    //document.querySelector("#listRepID").addEventListener("click", togglepinCard);
   // document.querySelector("#repsearchWrapper").addEventListener("keyup", searchCard);
};


const togglepinCard = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    const [ ,vpin] = targetId.split("--")
    if (targetType === "button") {
        repositories[vpin].pin = !repositories[vpin].pin;
        console.log(vpin, 1);
      
        cardBuilderRepositories(repositories, "#listRepID");
    }
    // if (targetType === "text") {
    //     repositories[targetId].star = "test";
    //     console.log(targetType);
    //     cardBuilderRepositories(repositories, "#listRepID");
    // 
}

const init = () => {
addCardToDom(profileArray, "#repo-profile");
cardBuilderRepositories(repositories, "#listRepID");
createProjectForm();
btnst();
}

init();
//export { createProjectForm}
