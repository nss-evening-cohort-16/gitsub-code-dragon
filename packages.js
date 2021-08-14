const package = [
  {
    name: "Docker",
    description: "A software platform used for building applications based on containers small and lightweight execution enviornments.",
  },
  {
    name: "Apache Maven",
    description: "A default package manager used for Java programming language and the Java runtime environment.",
  },
  {
    name: "NuGet",
    description: "A free and open surce package manager used for the Microsoft development platforms including  .NET.",
  },
  {
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
  },
  {
    name: "npm",
    description: "A package manager for JavaScript included with Node.js npm makes it easy for developers to share and reuse code.",
  },
  {
    name: "Countainers",
    description: "A single place for your team to manage Docker images and decide who can see and acess your images.",
  },
]
const renderToDom = (divId, textToPrint) => {           //Render to DOM function 
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};
const packageBuilder = (packageArray) => {              //Adds Packages on page
  let domString = "";
  packageArray.forEach((package) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-text">${package.name}</h5>
            <p class="card-text">${package.description}</p>
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

  package.push(newPackage);
  packageBuilder(package);
  document.querySelector('#projectForm').reset()
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
  renderToDom("#formContainer", domString);
  
  packageFormEvents();

};

const packageFormEvents =() => {
  const packageFormElement = document.querySelector('#packageForm')
  packageFormElement.addEventListener("submit",handlePackageEvent)
};

const init = () => {                                    //Starts the application  
  packageForm();
  packageBuilder(package);
};
init();