repositories =[{ name:"sorting-Hash",
description:"sorts hats",
Pinned:1,
tag1: "hats",
langUsed: "javaScript",
star:1,
lastUpdated:"8/9/2021"
} ,
{ name:"products",
    description:"products",
    Pinned:1,
    tag1: "products",
    langUsed: "javaScript",
    star:1,
    lastUpdated:"8/9/2021"
    } 
];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};


const cardBuilderRepositories = (cardArray, divid) => {
    let domString = "";

    cardArray.forEach((card, i) => {
   
      domString += `
      <div class="card" style="width: 18rem;" id="notexpel">
        
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-description">${card.description}</p>
          <footer> ${card.tag1}  </footer>  
          <footer> ${card.langUsed}   ${card.star}   ${card.lastUpdated}   </footer>  
          
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


// const btnst = () => {
//     document.querySelector("#formRep").addEventListener("submit", addProjectSubmit);
// };


// const addProjectSubmit = (event) => {
//     event.preventDefault();
//        const newStudent = {
//         name: document.querySelector("#student").value,
//         houseN: houseN,
//         colorN: colorN,
//         img: img,
//         expelled: 0
//     };
//     console.log("newStudent");
//     console.log(newStudent);
//     students.push(newStudent);
    

//     cardBuilder(students, "#studentNotExpelled");

//     console.log(event);



    cardBuilderRepositories(repositories,"#listRepID");
   createProjectForm();
