const renderTODom = (divID,textTOPrint) => {            //Render to DOM function 
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textTOPrint;
};

const packages = () => {
    const domString =`
    <div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
  <h4>Docker</h4
    <p class="card-text">A software platform used for building applications based on containers __
    small and lightweight execution enviornments.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>`;

renderTODom("#packagesBuilder",domString);
}

const init = () => {                                    //Starts the application
packages();
};

init();