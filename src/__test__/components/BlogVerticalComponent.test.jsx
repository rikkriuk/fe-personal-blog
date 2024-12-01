import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import BlogVerticalComponent from "../../components/BlogVerticalComponent";

const mockStore = configureStore([]);

describe("BlogVerticalComponent", () => {
  const mockBlog = {
    key: "test-blog",
    title: "Test Blog Title",
    thumb: "test-image.jpg",
    author: "Test Author",
    time: "2023-01-01",
    desc: "Test description",
    tag: "Technology"
  };

  const renderComponent = (props, theme = "light") => {
    const store = mockStore({
      theme: { theme }
    });

    return render(
      <Provider store={store}>
        <BrowserRouter>
          <BlogVerticalComponent {...props} />
        </BrowserRouter>
      </Provider>
    );
  };

  test("renders loading skeleton when loading prop is true", () => {
    renderComponent({ loading: true });
    expect(screen.getAllByTestId("react-loading-skeleton")).toBeTruthy();
  });

  test("renders blog content when loading is false", () => {
    renderComponent({ loading: false, blogs: mockBlog });
    expect(screen.getByText(mockBlog.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockBlog.author} • ${mockBlog.time}`)).toBeInTheDocument();
    expect(screen.getByText(mockBlog.desc)).toBeInTheDocument();
    expect(screen.getByText(mockBlog.tag)).toBeInTheDocument();
  });

  test("renders correct layout for horizontal type", () => {
    renderComponent({ type: "horizontal", blogs: mockBlog, loading: false });
    const container = screen.getByRole("img");
    expect(container).toHaveClass("w-full h-[228px] object-cover");
  });

  test("applies correct theme styles", () => {
    renderComponent({ blogs: mockBlog, loading: false }, "dark");
    const title = screen.getByText(mockBlog.title);
    expect(title).toHaveClass("text-[#FFFFFF]");
  });

  test("generates correct schema markup", () => {
    renderComponent({ blogs: mockBlog, loading: false });
    const schema = document.querySelector("script[type='application/ld+json']");
    const schemaContent = JSON.parse(schema.textContent);
    
    expect(schemaContent["@type"]).toBe("BlogPosting");
    expect(schemaContent.headline).toBe(mockBlog.title);
    expect(schemaContent.author.name).toBe(mockBlog.author);
  });

  test("handles missing blog data gracefully", () => {
    renderComponent({ loading: false, blogs: {} });
    expect(document.querySelector("script[type='application/ld+json']")).toBeTruthy();
  });
});
