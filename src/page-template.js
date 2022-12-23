// Generate team site function
function generateTeamSite() {
// 1 - creates an array to push onto html
    const userHtml = [];
// 2 - function for each employee that is renderd

// generates MANAGER HTML
    const createManagerCard = manager => {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${managerAnswers.managername} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerAnswers.managerid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${managerAnswers.manageremail}">${managerAnswers.manageremail}</a></span></li>
            <li class="list-group-item">Office Number: ${managerAnswers.managerofficeNumber}</li>
            </ul>
        </div>
        `;
        userHtml.push(managerHtml);
    }

// generates ENGINEER HTML
    const createEngineerCard = engineer => {
        let engineerHtml = 
        `
         <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engineerAnswers.engineername} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerAnswers.engineerid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineerAnswers.engineeremail}">${engineerAnswers.engineeremail}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineerAnswers.Engineergithub}">${engineerAnswers.engineergithub}</a></li>
            </ul>
        </div>
        `;
        userHtml.push(engineerHtml);
    }

// generates INTERN HTML
    const createInternCard = intern => {
        let internHtml = 
        `
         <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${internAnswers.internname} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internAnswers.internid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${internAnswers.internemail}">${internAnswers.internemail}</a></span></li>
            <li class="list-group-item">School: ${internAnswers.internschool}</li>
            </ul>
        </div>
        `;
        userHtml.push(internHtml);
    }

// for loop for inputed employees


// join html blocks


// function generate html
}