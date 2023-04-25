//Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

// returns name
getName () {
    return this.name;
}

// returns employee ID
getId () {
    return this.id;
}   

// returns email address
getEmail () {
    return this.email;
}

// returns employee role - default is Employee unless overridden
getRole () {
    return 'Employee'; 
    }
};

module.exports = Employee;