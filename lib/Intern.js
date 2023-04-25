// Import Employee constructor
const Employee = require("./Employee");

//Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Calls employee constructor 
        super (name, id, email);

        this.school = school; 
    }

    // Returns school 
    getSchool () {
        return this.school;
    }

     // Overrides Employee role to Intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;