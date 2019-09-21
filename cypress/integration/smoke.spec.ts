it("Makes sure welcome page is rendered", () => {
  cy.visit("http://localhost:1234").contains("Hello, world!");
});
