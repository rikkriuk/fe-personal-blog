import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../App";

// Mock redux store
const mockStore = createStore((state = { theme: { theme: "light" } }) => state);

// Mock components
jest.mock("../components/HeaderComponent", () => () => <div>Header</div>);
jest.mock("../components/FooterComponent", () => () => <div>Footer</div>);
jest.mock("../pages/HomePage", () => () => <div>Home Page</div>);
jest.mock("../pages/AboutPage", () => () => <div>About Page</div>);
jest.mock("../pages/NewsletterPage", () => () => <div>Newsletter Page</div>);
jest.mock("../pages/DetailPage", () => () => <div>Detail Page</div>);
jest.mock("../components/NotFoundComponent", () => () => <div>Not Found</div>);

const renderWithProvider = (component) => {
  return render(
    <Provider store={mockStore}>
      {component}
    </Provider>
  );
};

describe("App Component", () => {
  test("renders header and footer components", () => {
    renderWithProvider(<App />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("renders home page on root path", () => {
    window.history.pushState({}, "", "/");
    renderWithProvider(<App />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("renders about page on /about path", () => {
    window.history.pushState({}, "", "/about");
    renderWithProvider(<App />);
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });

  test("renders newsletter page on /newsletter path", () => {
    window.history.pushState({}, "", "/newsletter");
    renderWithProvider(<App />);
    expect(screen.getByText("Newsletter Page")).toBeInTheDocument();
  });

  test("renders detail page with correct route parameters", () => {
    window.history.pushState({}, "", "/blog/2023/12/25/test-slug");
    renderWithProvider(<App />);
    expect(screen.getByText("Detail Page")).toBeInTheDocument();
  });

  test("renders not found component for invalid routes", () => {
    window.history.pushState({}, "", "/invalid-route");
    renderWithProvider(<App />);
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
