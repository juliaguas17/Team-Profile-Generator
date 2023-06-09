// Manager card
const generateManager = function (manager) {
    return `<div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4><i class="material-icons">coffee</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        `;
    };

// Engineer card
const generateEngineer = function (engineer) {
    return `<div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${engineer.name}</h3>
                        <h4>Engineer</h4><i class="material-icons">engineering</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${engineer.id}</p>
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>
        `;
    };

// Intern card 
const generateIntern = function (intern) {
    return `<div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${intern.name}</h3>
                        <h4>Intern</h4><i class="material-icons">school</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${intern.id}</p>
                        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="school">School: ${intern.school}</p>
                    </div>
                </div>
            </div>
        `;
    };

// Returns generated HTML of team page
generateHTML = (data) => {
    pageArray = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}

// display HTML with employeeCards 
const generateTeamPage = function (employeeCards) {   
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-2 h2 w-100 text-center" id="navbar-text">My Team</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            ${employeeCards}
                        </div>
                    </div>
                </div>
            </main>
            
        </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"</script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </html>
    `;
}

module.exports = generateHTML; 