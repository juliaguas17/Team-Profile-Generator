// Import Employee constructor
const Employee = require("./Employee");

//Engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Calls employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // Returns github username 
    getGithub () {
        return this.github;
    }

     // Overrides Employee role to Engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;