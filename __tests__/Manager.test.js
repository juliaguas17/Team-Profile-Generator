const Manager = require('../lib/Manager');

// creates manager object  
test('Creates a Manager object', () => {
    //includes an office number
    const manager = new Manager('Julianne', 11, 'juliaguas17@gmail.com', 2);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() - should return Manager
test('Get role of employee', () => {
    const manager = new Manager('Julianne', 11, 'juliaguas17@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
}); 