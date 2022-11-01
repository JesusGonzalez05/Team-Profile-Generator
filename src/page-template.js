// this is where we will append elements to the html page 
function generateSite(team) {

const html = [];

//generate manager html
function renderManager(manager) {
 let managerHtml = 
 `
  <div class="card col-9 col-lg-3">
    <div class="card-header">
      ${manager.getName()}, 
      ${manager.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <span id='email'><a href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
`;
html.push(managerHtml);
};

// function to generate engineer html
function renderEngineer(engineer) {
let engineerHtml = 
`
  <div class="card col-9 col-lg-3">    
    <div class="card-header">
      ${engineer.getName()}, 
      ${engineer.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <span id='email'><a href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></span></li>
        <li class="list-group-item">GitHub: <span id='email'><a target='_blank' href='https://github.com/${engineer.getGithub()}'> ${engineer.getGithub()}</a></span></li>
      </ul>
    </div>
  </div>
`;
html.push(engineerHtml);
}

};