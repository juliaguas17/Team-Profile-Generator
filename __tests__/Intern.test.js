const Intern = require('../lib/Intern');

// creates Intern object  
test('Creates an Intern object', () => {
    const intern = new Intern('Julianne', 11, 'juliaguas17@gmail.com', 'University of Kansas');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from object -getSchool()
test('Gets employee school name', () => {
    const intern = new Intern('Julianne', 11, 'juliaguas17@gmail.com', 'University of Kansas');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole() - should return Intern
test('Gets role of employee', () => {
    const intern = new Intern('Julianne', 11, 'juliaguas17@gmail.com', 'University of Kansas');

    expect(intern.getRole()).toEqual("Intern");
}); 