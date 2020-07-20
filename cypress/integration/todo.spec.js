/// <reference  types="cypress" />



it("should add a todo in the Todo app" ,  () => {
   cy.visit("http://todomvc-app-for-testing.surge.sh/")
   cy.get(".new-todo", {timeout : 6000}).type("Go to london{enter}")
   cy.get(".toggle").click()
   cy.get(':nth-child(3) > a').click()
   cy.get('label').should('have.text', "Go to london")
   cy.get(".toggle").should("be.checked")
   cy.get('.clear-completed').click()
   cy.get('ul').should("not.have.descendants", "li")
   
})
