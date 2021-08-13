const packageArray = [{
  name : "Package name",
  description : "Project Description"
}
]

const renderTODom = (divID, textTOPrint) => {            //Render to DOM function 
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textTOPrint;
};
const packages = () => {                                   //Adds Packages on page
  const domString = `
  <div class="card">
<div class="card-header">
</div>
<div class="card-body">
<h4>Docker</h4
  <p class="card-text">A software platform used for building applications based on containers __
  small and lightweight execution enviornments.</p>
  <a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>
<div class="card">
<div class="card-header">
</div>
<div class="card-body">

<h4>Apache Maven</h4
<p class="card-text">A default package manager used for Java programming language and the Java runtime environment.</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>
<div class="card">
<div class="card-header">
</div>
<div class="card-body">
<h4>NuGet</h4
<p class="card-text">A free and open surce package manager used for the Microsoft development platforms including  .NET.</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>
<div class="card">
<div class="card-header">
</div>
<div class="card-body">
<h4>RubyGems</h4
<p class="card-text">A standard format for distributing Ruby programs and libraries used for the Ruby programming language.</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>
<div class="card">
<div class="card-header">
</div>
<div class="card-body">
<h4>npm</h4
<p class="card-text">A package manager for JavaScript included with Node.js npm makes it easy for developers to share and reuse code.</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>

<div class="card">
<div class="card-header">
</div>
<div class="card-body">
<h4>Countainers</h4
<p class="card-text">A single place for your team to manage Docker images and decide who can see and acess your images.</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>`;

  renderTODom("#packagesBuilder", domString);
}

const forms = () => {                                      //Adds forms on page 
  const domString = `
  <form> 
  <p> Coordinate,track and update your work in one place,so projects stay transparent and on aschedule. </p>
<div class="form-group">
  <label for="name">Project board name</label>
  <input requred type="text" class="form-control" id="name" placeholder="Enter name">
</div>
<div class="form-group">
  <label for="description">Description(optional)</label>
  <input required type="text" class="form-control" id="description" placeholder="Enter description">
</div>
<button type="submit" class="btn btn-primary">Create Package</button>
</form>`;
renderTODom("#formContainer", domString);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newPackage = {
      name: document.querySelector('#name').value,
      description: document.querySelector('#description').value
  };

  packages.push(newPackage);
  packageResult(packages);
}
const packageResult = (packages) => {
  let domString= "";
  packages.forEach((package) => {
    domString +=`
    <div class="card">
       <div class="card-body>
           <h4> class="card-text">${package.name}</h4>
           <p class="card-text">${package.description}</p>
       </div>
    </div>
    `;
  });
  renderTODom("#projectDiv",domString);
};



const init = () => {                                    //Starts the application
  packages();
  forms();
};

init();