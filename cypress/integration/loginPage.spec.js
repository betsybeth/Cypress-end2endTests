/// <reference  types="cypress" />


describe("Verify all elements in the LoginPage are displayed", () => { 
    beforeEach(() =>  {
        cy.visit("https://demo.applitools.com/hackathon.html")
    })
    it("Login Page" ,  () => {     
        cy.get("#username").type("betsy")
        cy.get("#password").type("betsy")
        cy.get("#log-in").click()
        cy.request({
            url: 'https://demo.applitools.com/hackathonApp.html',
            followRedirect: false
        }).then((resp)  => {
            expect(resp.status).to.eql(200)
        })

    })
    it("Verify labels are displayed", () => {
         cy.get("div:nth-child(1) > label:nth-child(1)")
         .should("be.have.text", "Username")
         .should("be.visible")
         cy.get("div.form-group:nth-child(2) > label:nth-child(1)")
         .should("be.have.text", "Password")
         .should("be.visible")
         cy.get(".form-check-label")
         .should("be.have.text", "Remember Me")
         .should("be.visible")

         cy.get("#username").should("have.attr", "placeholder", "Enter your username")
         cy.get("#password").should("have.attr", "placeholder", "Enter your password")
    })

    it("verify all input fields are entered ", () => {
        cy.get("#username").should()
    })
})


