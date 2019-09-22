it("Makes sure welcome page is rendered", () => {
  cy.visit("/").contains("Hello, world!");
});
