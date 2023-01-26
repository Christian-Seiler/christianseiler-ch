describe('website', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('christianseiler.ch-nx-welcome').should('exist');
  });
});
