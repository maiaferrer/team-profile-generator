// Generate team site function
const generateTeamSite = (team) => {
// 1 - creates an array to push onto html
    const userHtml = [];
// 2 - function for each employee that is renderd

// generates MANAGER HTML
    const createManagerCard = manager => {
        let managerHtml = `
        <div class="card shadow-lg mb-5 bg-white rounded" style="width: 20rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i> Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        userHtml.push(managerHtml);
    }

// generates ENGINEER HTML
    const createEngineerCard = engineer => {
        let engineerHtml = `
         <div class="card shadow-lg mb-5 bg-white rounded" style="width: 20rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i> Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        `;
        userHtml.push(engineerHtml);
    }


// generates INTERN HTML
    const createInternCard = intern => {
        let internHtml = `
         <div class="card shadow-lg mb-5 bg-white rounded " style="width: 20rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i> Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.schoolName}</li>
            </ul>
        </div>
        `;
        userHtml.push(internHtml);
    }

// for loop for inputed employees
for (let i = 0; i < team.length; i++) {
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
}
    return userHtml.join('');
}
// function team to generate html
module.exports = (team) => {
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
    <link rel="icon" href="../dist/team-logo.png">
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> MY TEAM </h1>
     <img src="../dist/team-logo.png" alt="logo" class="center-img">
    </header>
    <main> ${generateTeamSite(team)} </main>
     
</body>
<footer> CREATED BY MAIA FERRER </footer>
</html>
   `
}


