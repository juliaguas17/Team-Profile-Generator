const Engineer = require('../lib/Engineer');

// creating Engineer object  
test('Creates an Engineer object', () => {
    const engineer = new Engineer('Julianne', 11, 'juliaguas17@gmail.com', 'juliaguas17');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github username from object - getGithub()
test('Gets engineer github username', () => {
    const engineer = new Engineer('Julianne', 11, 'juliaguas17@gmail.com', 'juliaguas17');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() - should return Engineer 
test('Gets role of employee', () => {
    const engineer = new Engineer('Julianne', 11, 'juliaguas17@gmail.com', 'juliaguas17');

    expect(engineer.getRole()).toEqual("Engineer");
});