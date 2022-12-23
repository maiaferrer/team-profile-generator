// Generate team site function
const generateTeamSite = (team) => {
// 1 - creates an array to push onto html
    const userHtml = [];
// 2 - function for each employee that is renderd

// generates MANAGER HTML
    const createManagerCard = manager => {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.managername} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.managerid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.manageremail}">${managerAnswers.manageremail}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.managerofficeNumber}</li>
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
           ${engineer.engineername} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.engineerid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.engineeremail}">${engineer.engineeremail}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.Engineergithub}">${engineer.engineergithub}</a></li>
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
           ${intern.internname} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.internid}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.internemail}">${internAnswers.internemail}</a></span></li>
            <li class="list-group-item">School: ${intern.internschool}</li>
            </ul>
        </div>
        `;
        userHtml.push(internHtml);
    }

// for loop for inputed employees
for (let i = 0; i < generateTeamSite.length; i++) {
    if (team[i].getRole() === "Manager") {
        createManagerCard(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        createEngineerCard(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        createInternCard(team[i]);
    }
// join html blocks for manager, engineer, and intern employees // 
    return userHtml.join('');
}

// function team to generate html
module.exports = team => {
    return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateTeamSite(team)} </main>
     
</body>
<footer> created by Maia Ferrer </footer>
</html>
   `
    }
}