const Employee = require("../lib/Employee")

describe('employee', () => {
    it('should create an employee object', () => {
        const name = 'testName'
        const email = 'testEmail'
        const id = 'testId'

        const employeeObject = new Employee (name,id,email)

    expect(employeeObject.name).toBe(name)
     expect(employeeObject.email).toBe(email)
      expect(employeeObject.id).toBe(id)

       expect(employeeObject.getRole()).toBe("Employee")
    })
})

