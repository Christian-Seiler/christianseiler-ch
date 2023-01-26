describe('website', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('christianseiler.ch-root').should('exist');
  });
});
