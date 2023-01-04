const Intern = require("../lib/Intern")

describe('intern', () => {
    it('should create an intern object', () => {
        const name = 'testName'
        const email = 'testEmail'
        const id = 'testId'
        const schoolName = 'testSchoolName'

        const internObject = new Intern (name,id,email,schoolName)

    expect(internObject.name).toBe(name)
     expect(internObject.email).toBe(email)
      expect(internObject.id).toBe(id)
        expect(internObject.schoolName).toBe(schoolName)

       expect(internObject.getRole()).toBe("Intern")
    })
})