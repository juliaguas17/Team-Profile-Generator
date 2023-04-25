const Employee = require('../lib/Employee');

// create an object
test('Creates an Employee object', () => {
    const employee = new Employee('Julianne', 11, 'juliaguas17@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get employee name from object - getName()
test('gets employee name', () => {
    const employee = new Employee('Julianne', 11, 'juliaguas17@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from object - getId()
test('gets employee ID', () => {
    const employee = new Employee('Julianne', 11, 'juliaguas17@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email address from object - getEmail()
test('gets employee email', () => {
    const employee = new Employee('Julianne', 11, 'juliaguas17@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getRole() - returns Employee
test('gets role of employee', () => {
    const employee = new Employee('Julianne', 11, 'juliaguas17@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 