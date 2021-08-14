import {profileArray, addCardToDom} from "./profile.js"

import { renderToDom } from "./renderToDom.js"

import { packageArr } from "./data.js";

const packageBuilder = (packageArray) => {              //Adds Packages on page
  let domString = "";
  packageArray.forEach((obj) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-text">${obj.name}</h5>
            <p class="card-text">${obj.description}</p>
            <button type="button" class="btn btn-primary">Learn More</button> </div>
        </div>
    </div>
 `;
  });

  renderToDom("#packagesBuilder", domString);
};

const handlePackageEvent = (event) => {
  event.preventDefault();
  const newPackage = {
    name: document.querySelector('#name').value, 
    description: document.querySelector('#description').value,
  };

  packageArr.push(newPackage);
  packageBuilder(packageArr);
  document.querySelector('#packageForm').reset()
}

const packageForm = () => {                             //Adds forms on page 
  const domString = `
  <form id ="packageForm" class = "PkForm">
     <p> Coordinate,track and update your work in one place,so projects stay transparent and on aschedule. </p>
     <div class="form-group">
       <label for="name">Project board name</label>
       <input requred type="text" class="form-control" id="name" placeholder="Enter name">
     </div>
     <div class="form-group">
       <label for="description">Description(optional)</label>
       <input required type="text" class="form-control" id="description" placeholder="Enter description">
       <button type="submit" class="btn btn-primary">Create Package</button>
     </div>
</form>`;
  renderToDom("#form-Container", domString);
  
  packageFormEvents();

};

const packageFormEvents =() => {
  const packageFormElement = document.querySelector('#packageForm')
  packageFormElement.addEventListener("submit",handlePackageEvent)
};

const init = () => {    
  addCardToDom(profileArray, "#package-profile")                                //Starts the application  
  packageForm();
  packageBuilder(packageArr);
};
init();