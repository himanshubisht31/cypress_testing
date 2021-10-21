/* eslint-disable no-undef */
/// <reference types="cypress" />


describe('Task dashboard', () => {

    beforeEach(() => {
        cy.visit('/')
    })
 

    // it('display delete button on adding a task', () => {
    //     cy.get("input[placeholder='Add something']").type('practise DSA')
    //     cy.get("input[type='submit']").click()
    //     cy.contains('button', 'Delete').should('be.visible')
    // })

    // it('load initial dataset', () => {
    //     cy.get("input[placeholder='Add something']").type('practise DSA')
    //     cy.get("input[type='submit']").click()
    //     cy.contains('p', 'practise DSA').should('be.visible')
    // })

    it('reduce length of array', () => {
        cy.get("input[placeholder='Add something']").type('practise DSA')
        cy.get("input[type='submit']").click()
        cy.contains('button', 'Delete').click()
        cy.contains('h1', 'Count : 0')
    })

})