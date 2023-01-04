const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

describe('engineer', () => {
    it('should create an engineer object', () => {
        const name = 'testName'
        const email = 'testEmail'
        const id = 'testId'
        const github = 'testGithub'

        const engineerObject = new Engineer (name,id,email,github)

    expect(engineerObject.name).toBe(name)
     expect(engineerObject.email).toBe(email)
      expect(engineerObject.id).toBe(id)
        expect(engineerObject.github).toBe(github)

       expect(engineerObject.getRole()).toBe("Engineer")
    })
})