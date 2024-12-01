import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import DetailBlogComponent from "../../components/DetailBlogComponent";
import DOMPurify from "dompurify";

jest.mock("../../redux/async/subscribeSlice", () => ({
  setLoading: jest.fn(),
  setTimeoutSuccess: jest.fn(),
  subscribe: jest.fn(),
}));

const mockStore = configureStore([]);

describe("DetailBlogComponent", () => {
  let store;

  const mockBlogDetail = {
    title: "Test Blog",
    date: "2023-01-01",
    content: "<p>Test content</p>",
    categories: ["Technology", "Programming"],
    author: "John Doe",
  };

  beforeEach(() => {
    store = mockStore({
      theme: { theme: "light" },
      subscribe: { loading: false, success: false },
    });
  });

  test("renders loading skeleton when loading is true", () => {
    render(
      <Provider store={store}>
        <DetailBlogComponent blogDetail={mockBlogDetail} loading={true} />
      </Provider>
    );
  
    const skeletonElements = screen.getByTestId('skeleton-container').querySelectorAll(".skeleton-shimmer");
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  test("renders blog content when loading is false", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={mockBlogDetail} loading={false} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Test Blog")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
  });

  test("applies dark theme styles when theme is dark", () => {
    store = mockStore({
      theme: { theme: "dark" },
      subscribe: { loading: false, success: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={mockBlogDetail} loading={false} />
        </MemoryRouter>
      </Provider>
    );
    
    let linkElement = screen.getByText("Test Blog");
    expect(linkElement).toHaveClass("text-[#FFFFFF]");
  });

  test("renders categories with random styles", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={mockBlogDetail} loading={false} />
        </MemoryRouter>
      </Provider>
    );

    mockBlogDetail.categories.forEach(category => {
      const categoryElement = screen.getByText(category);
      expect(categoryElement).toBeInTheDocument();
      expect(categoryElement).toHaveClass("rounded-full");
    });
  });

  test("sanitizes HTML content", () => {
    const maliciousContent = "<p>Safe content</p><script>alert('xss')</script>";
    const sanitizedBlog = {
      ...mockBlogDetail,
      content: maliciousContent
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={sanitizedBlog} loading={false} />
        </MemoryRouter>
      </Provider>
    );

    const sanitizedHTML = DOMPurify.sanitize(maliciousContent);
    const contentContainer = document.querySelector(".blog-detail-content");
    expect(contentContainer.innerHTML).toBe(sanitizedHTML);
  });

  test("generates valid schema JSON-LD", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={mockBlogDetail} loading={false} />
        </MemoryRouter>
      </Provider>
    );

    const schemaScript = document.querySelector("script[type='application/ld+json']");
    const schema = JSON.parse(schemaScript.innerHTML);

    expect(schema["@type"]).toBe("BlogPosting");
    expect(schema.headline).toBe(mockBlogDetail.title);
    expect(schema.author.name).toBe(mockBlogDetail.author);
  });

  test("handles missing optional blog properties", () => {
    const minimalBlog = {
      title: "Minimal Blog",
      content: "<p>Content</p>",
    };
  
    store = mockStore({
      theme: { theme: "light" },
      subscribe: { loading: false, success: false },
    });
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailBlogComponent blogDetail={minimalBlog} loading={false} />
        </MemoryRouter>
      </Provider>
    );
  
    expect(screen.getByText("Minimal Blog")).toBeInTheDocument();
  });
});
