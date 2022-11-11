// require the employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {
    //constructor tests
    it("it can set name by the constructor", () => {
        const name = "Jesus";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("it can set id by the constructor", () => {
        const id = 100;
        const e = new Employee("Name", id);
        expect(e.id).toBe(id);
    });

    it("it can set email by the constructor", () => {
        const email = "jesusgonzalez051698@gmail.com";
        const e = new Employee("Name", 1, email);
        expect(e.email).toBe(email);
    });


    //get name function test 
    describe("getName", () => {
        it("it can get a name via the getName() function", () => {
            const name = "Jesus";
            const e = new Employee(name);
            expect(e.getName()).toBe(name);
        });
    });

    //get id function test
    describe("getId", () => {
        it("it can get  an id via the getId() function", () => {
            const id = 100;
            const e = new Employee("Foo", id);
            expect(e.getId()).toBe(id);
        });
    });

    //get email function test
    describe("getEmail", () => {
        it("it can get an email via the getEmail()", () => {
            const email = "jesusgonzalez051698@gmail.com";
            const e = new Employee("Foo", 1, email);
            expect(e.getEmail()).toBe(email);
        });
    });

    //get role function test
    describe("getRole", () => {
        it(" it can use getRole() and return \"Employee\"", () => {
            const role = "Employee";
            const e = new Employee();
            expect(e.getRole()).toBe(role);
        });
    });

});