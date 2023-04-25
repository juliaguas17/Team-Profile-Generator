// Import Employee constructpr
const Employee = require('./Employee');

// Manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Calls employee constructor 
        super (name, id, email); 
        // add office number
        this.officeNumber = officeNumber; 
    }

     // Overrides Employee role to Manager
     getRole() {
        return "Manager";
    }
}

module.exports = Manager; 