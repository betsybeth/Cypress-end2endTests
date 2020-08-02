/// <reference  types="cypress" />
import   { loginElements }   from "../PageModels/Login"


describe("Verify all elements in the loginPage are displayed", () => { 
    beforeEach(() =>  {
        cy.visit("https://demo.applitools.com/hackathon.html")
    })
    it("Verify username label is displayed", () => {
         loginElements.usernameLabelElement()
         .should("be.have.text", "Username")
         .should("be.visible")

    }) 

    it("Verify password label is displayed", () => {
        loginElements.passwordLabelElement()
        .should("be.have.text", "Password")
        .should("be.visible")
    })

    it("verify rememeber me label is displayed", ()=>{
        loginElements.rememberLabelElement()
         .should("be.have.text", "Remember Me")
         .should("be.visible")
    }) 

    it("verify username placeholder is accurate", () => {
        loginElements.userNameInputElement().should("have.attr", "placeholder", "Enter your username")
    })

    it("verify username placeholder is accurate", () => {
        loginElements.passwordInputElement().should("have.attr", "placeholder", "Enter your password")
    })
          
    it ("verify the username icon is displayed", ()=> {
        loginElements.usernameIconElement().should("be.visible")
    })

    it ("verify the password  icon is displayed", ()=> {
        loginElements.passwordIconElement().should("be.visible")
    })

    it ("verify the  logo image  is displayed", ()=> {
        loginElements.logoImageElement().should("be.visible")
    })

    it("verify the header title is displayed" , () => {
        loginElements.loginFormHeaderElement()
        .should("be.have.text", '\n        Login Form\n      ')
        .should("be.visible")
    })

    it("verify the facebook icon is displayed", () => {
        loginElements.facebookIconElement().should("have.attr", "src", "img/social-icons/facebook.png")
    })

    it("verify the twitter icon is displayed", () => {
        loginElements.linkedinIconElement().should("have.attr", "src", "img/social-icons/linkedin.png")
    })

    it("verify the linkedin icon is displayed ", () => {
        loginElements.twitterIconElement().should("have.attr", "src", "img/social-icons/twitter.png")
    })
})

describe("Data-driven Tests", () => {
    beforeEach(() => cy.visit("https://demo.applitools.com/hackathon.html"))

     it("Validate Logging into ACME demo App is successful" ,  () => { 
        loginElements.userNameInputElement().type("betsy")
        loginElements.passwordInputElement().type("password")
        loginElements.checkboxElement().click()
        loginElements.loginButtonElement().click()
        cy.request({
            url: 'https://demo.applitools.com/hackathonApp.html',
            followRedirect: true
        }).then((resp)  => {
            expect(resp.status).to.eql(200)
        })

    })
    it("Validate empty username input throws an alert warning", () => {
        loginElements.passwordInputElement().type("password")
        loginElements.checkboxElement().click()
        loginElements.loginButtonElement().click()
        loginElements.inputAlertWarningMesaage().should("have.text", "Username must be present")

    })
    it("Validate empty password input throws an alert warning", () => {
        loginElements.userNameInputElement().type("text")
        loginElements.checkboxElement().click()
        loginElements.loginButtonElement().click()
        loginElements.inputAlertWarningMesaage().should("have.text", "Password must be present")

    })
    it("Validate empty password and username input throws an alert warning", () => {
        loginElements.checkboxElement().click()
        loginElements.loginButtonElement().click()
        loginElements.inputAlertWarningMesaage().should("have.text", "Both Username and Password must be present ")
    })

    
}) 






