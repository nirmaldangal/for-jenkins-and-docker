describe('Title of the page', () => {
  it('TC-01 Verify the title of the page', () => {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
  })
})