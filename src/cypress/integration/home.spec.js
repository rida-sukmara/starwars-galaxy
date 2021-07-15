/* eslint-disable no-undef */
describe('Home Page', () => {
  it('Should go to Page Detail, add to Wishlist and go to Wishlist Page', () => {
    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/planets?page=1' }, { fixture: 'planets_page_1.json' }).as('getPlanetList');

    cy.visit('/'); // walk arround cypress issues not intercept

    cy.wait('@getPlanetList').then(({ response }) => {
      const { statusCode, body } = response;
      expect(statusCode).equal(200);
      expect(body).haveOwnPropertyDescriptor('results');
    });

    cy.get('p').contains('Saturnus').closest('a').click();

    cy.url().should('include', '/planets/1');

    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/planets/1' }, { fixture: 'planet1.json' }).as('getDetail');

    cy.visit('/planets/1'); // walk around cypress issue not intercept

    cy.wait('@getDetail').then(({ response }) => {
      const { statusCode } = response;
      expect(statusCode).equal(200);
    });

    cy.get('img').click();

    cy.get('img').should('have.attr', 'src').should('include', 'start_active');

    cy.get('a').contains('Wishlist').click();
  });
});
