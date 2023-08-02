/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Dashboard Exploration', () => {
  it('should Explore all dashboards', { scrollBehavior: 'center' }, () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="dashboard/all"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/dashboard/all');

    cy.get('h1').contains('Our dashboard catalog');
    cy.wait(1000);
    cy.get('a[href*="/dashboard-v1"]').click({ multiple: true });
    cy.url().should('include', '/dashboard-v1');
    cy.go('back');

    cy.get('a[href*="/dashboard-v2"]').click();
    cy.url().should('include', '/dashboard-v2');
    cy.go('back');

    cy.get('a[href*="/dashboard-v3"]').click();
    cy.url().should('include', '/dashboard-v3');
    cy.go('back');

    cy.get('a[href*="/dashboard-v4"]').click();
    cy.url().should('include', '/dashboard-v4');
    cy.go('back');

    cy.get('a[href*="/dashboard-v5"]').click();
    cy.url().should('include', '/dashboard-v5');
    cy.go('back');

    cy.get('a[href*="/dashboard-v6"]').click();
    cy.url().should('include', '/dashboard-v6');
    cy.go('back');

    cy.get('a[href*="/dashboard-v7"]').click();
    cy.url().should('include', '/dashboard-v7');
    cy.go('back');

    cy.get('a[href*="/dashboard-v8"]').click();
    cy.url().should('include', '/dashboard-v8');
    cy.go('back');

    cy.get('a[href*="/dashboard-v9"]').click();
    cy.url().should('include', '/dashboard-v9');

    cy.get('strong').contains('Salvia-Kit').click();
    cy.url().should('contain', '/');
  });
});
