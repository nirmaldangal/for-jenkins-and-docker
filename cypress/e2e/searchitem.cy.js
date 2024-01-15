describe('searchfuntionality', () => {
  it('TC-02 Verify the search is working', () => {
    cy.visit('https://demo.nopcommerce.com/')
    cy.get('#small-searchterms').type('TV')
    cy.get('#small-search-box-form > .button-1').click();
    //cy.contains()

  })
})