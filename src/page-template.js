// this is where we will append elements to the html page 
function generateSite(team) {

const html = [];

//generate manager html
function generateManager(manager) {
 let managerHtml = 
 `
  <div class="card col-9 col-lg-3">
    <div class="card-header">
      ${manager.getName()}, 
      ${manager.getRole()}
     <i class="fa-solid fa-people-roof"></i>
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
};