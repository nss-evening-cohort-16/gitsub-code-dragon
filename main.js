import { profileArray, addCardToDom } from "./profile.js";
import { renderToDom } from "./renderToDom.js";
import { repositories } from "./data.js";

const pinnedRepos= [];

const cardBuilderRepositories = (cardArray, divid) => {
    let domString = "";
    cardArray.forEach((obj, i) => {
        let btntext = "";
        if (obj.pin) {
            btntext = "unpin";
            domString += `
                <div class="card repo-card" style="width: 10rem;" >
                  <div class="card-body">
                    <h5 class="card-title">${obj.name}</h5>
                    <p class="card-description">${obj.description}</p>
                    <div class="pin-body" id=togglepin><button type="button" id=${i} class="btn btn-primary">${btntext}</button> </div> 
                  </div>
                </div>
                `;
        
    };
    renderToDom(divid, domString);
})};
  
const pinnedForm = () => {
    const domString = `
        <form id="pinnedForm" class="pinnForm">
        <div class="Label-Text">
            <label for="name" class="form-body">Pinned Project</label>
            <input required type="text" class="form-control" id="name">
        </div>
        <div class="Label-Text">
        <label "for="description">Description (Optional)</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
            <button type="submit" class="btn btn-primary">Create!</button>
        </div>
        </form>
    `;
   
    renderToDom("#renderForm", domString);
    pinnedFormEvents();  
};

const handlePinnedForm = (event) => {
    event.preventDefault();
        let newPin = {
            name: document.querySelector('#name').value,
            description: document.querySelector('#description').value,
            pin: true
            };
    repositories.push(newPin);
    cardBuilderRepositories(repositories, "#renderCardDiv");
    document.querySelector('#pinnedForm').reset()
};

const pinnedFormEvents = () => {
        const pinnedFormElement = document.querySelector("#pinnedForm");
        pinnedFormElement.addEventListener("submit", handlePinnedForm);
};

const unpinBtn = (event) => {
    const targetId = event.target.id
    const targetType = event.target.type

    if (targetType === "button") {
        pinnedRepos.push(repositories.splice(targetId, 1)[0])
        cardBuilderRepositories(repositories, "#renderCardDiv")
        console.log(pinnedRepos)
    }
}

const btnEvent = () => {
    document.querySelector("#renderCardDiv").addEventListener("click", unpinBtn)
}

const init = () => {
    addCardToDom(profileArray, "#profile");
    cardBuilderRepositories(repositories, "#renderCardDiv");
    pinnedForm();
    btnEvent();
};

init()