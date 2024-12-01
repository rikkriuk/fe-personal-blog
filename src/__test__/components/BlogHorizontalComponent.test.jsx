import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import BlogHorizontalComponent from "../../components/BlogHorizontalComponent";

const mockStore = configureStore([]);

describe("BlogHorizontalComponent", () => {
  const mockBlog = {
    title: "Test Blog Title",
    thumb: "test-image.jpg",
    author: "Test Author",
    time: "2023-01-01",
    desc: "Test Description",
    tag: "Test Tag",
    key: "test-blog"
  };

  const renderComponent = (props, theme = "light") => {
    const store = mockStore({
      theme: { theme }
    });

    return render(
      <Provider store={store}>
        <BrowserRouter>
          <BlogHorizontalComponent {...props} />
        </BrowserRouter>
      </Provider>
    );
  };

  test("renders loading skeleton when loading is true", () => {
   renderComponent({ loading: true });
  
   const skeletons = screen.getAllByTestId("react-loading-skeleton");
   expect(skeletons.length).toBeGreaterThan(0);
  });

  test("renders blog content when loading is false", () => {
    renderComponent({ blogs: mockBlog, loading: false });
    
    expect(screen.getByText("Test Blog Title")).toBeInTheDocument();
    expect(screen.getByText("Test Author • 2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Tag")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });

   test("applies correct theme-based styling", () => {
   const { rerender } = renderComponent({ blogs: mockBlog, loading: false }, "light");
 
   let linkElement = screen.getByText("Test Blog Title");
   expect(linkElement).toHaveClass("text-primary-color");
 
   const newStore = mockStore({ theme: { theme: "dark" } });
   rerender(
     <Provider store={newStore}>
       <BrowserRouter>
         <BlogHorizontalComponent blogs={mockBlog} loading={false} />
       </BrowserRouter>
     </Provider>
   );
 
   linkElement = screen.getByText("Test Blog Title");
   expect(linkElement).toHaveClass("text-[#FFFFFF]");
   });

  test("generates correct schema JSON-LD", () => {
    renderComponent({ blogs: mockBlog, loading: false });
    const schema = document.querySelector("script[type='application/ld+json']");
    const schemaContent = JSON.parse(schema.textContent);

    expect(schemaContent).toEqual({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": mockBlog.title,
      "image": mockBlog.thumb,
      "author": {
        "@type": "Person",
        "name": mockBlog.author
      },
      "datePublished": mockBlog.time,
      "description": mockBlog.desc,
      "articleSection": mockBlog.tag,
      "url": `/blog/${mockBlog.key}`
    });
  });

  test("handles missing blog data gracefully", () => {
    const incompleteBlog = {
      title: "Test Title",
      key: "test"
    };
    
    renderComponent({ blogs: incompleteBlog, loading: false });
    expect(screen.getByText("Anonymous • Unknown time")).toBeInTheDocument();
    expect(screen.getByText("No description available")).toBeInTheDocument();
    expect(screen.getByText("Uncategorized")).toBeInTheDocument();
  });
});
