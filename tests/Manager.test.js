const Manager = require("../lib/Manager")

describe('manager', () => {
    it('should create a manager object', () => {
        const name = 'testName'
        const email = 'testEmail'
        const id = 'testId'
        const officeNumber = 'testOfficeNumber'

        const managerObject = new Manager (name,id,email,officeNumber)

    expect(managerObject.name).toBe(name)
     expect(managerObject.email).toBe(email)
      expect(managerObject.id).toBe(id)
        expect(managerObject.officeNumber).toBe(officeNumber)

       expect(managerObject.getRole()).toBe("Manager")
    })
})