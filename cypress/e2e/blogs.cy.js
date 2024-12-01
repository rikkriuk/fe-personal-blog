describe("Personal Blog E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should load homepage successfully", () => {
    cy.url().should("include", "/");
    cy.get("div").should("have.class", "bg-white");
  });

  it("should navigate to about page", () => {
    cy.get("[data-testid='about-link']").click();
    cy.url().should("include", "/about");
  });

  it("should navigate to newsletter page and input email", () => {
    cy.get("[data-testid='newsletter-link']").click();
    cy.url().should("include", "/newsletter");

    cy.get("[data-testid='subscribe-input']").type("test@example.com");
    cy.get("[data-testid='subscribe-button']").click();
    cy.wait(2000);
    cy.get("[data-testid='success-message']").should("be.visible");
  });

  it("should handle theme switching", () => {
    cy.get("[data-testid='theme-dark']").click();
    cy.get("header").should("have.class", "bg-dark");

    cy.get("[data-testid='theme-light']").click();
    cy.get("header").should("have.class", "bg-white");
  });

  it("should navigate to blog detail page", () => {
    cy.get("[data-testid='home-link']").click();

    cy.wait(5000);
    cy.get("[data-testid='blog-post']", { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get("[data-testid='blog-post']").first().click();
    cy.url().should("match", /\/blog\/\d{4}\/\d{2}\/\d{2}\/[\w-]+/);
  });

  it("should show 404 page for invalid routes", () => {
    cy.visit("http://localhost:5173/invalid-route");
    cy.get("[data-testid='not-found']").should("exist");
  });

  it("should display the mobile version of the site", () => {
    cy.viewport(375, 667);

    cy.get("[data-testid='open-menu']").click();
    cy.get("[data-testid='close-menu']").click();
  });
});
