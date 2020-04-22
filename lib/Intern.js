// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require(`./Employee.js`);

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.role = "Intern",
        this.school = school;
    }
}

module.exports = Intern;