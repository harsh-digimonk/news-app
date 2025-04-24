// src/__tests__/CategoryDropdown.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ListScreen from "@/pages/ListScreen";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";
import { BrowserRouter } from "react-router";
import { BasicMockArticle, TechMockArticle } from "../mocks/mockData";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Category Dropdown", () => {
  it("changes category and loads new articles", async () => {
    // Mock initial load (home section)
    server.use(
      http.get("https://api.nytimes.com/svc/topstories/v2/home.json", () => {
        return HttpResponse.json({
          status: "OK",
          results: BasicMockArticle,
        });
      })
    );

    render(
      <BrowserRouter>
        <ListScreen />
      </BrowserRouter>
    );

    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText("Home title")).toBeInTheDocument();
    });

    // Mock technology section response
    server.use(
      http.get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json",
        () => {
          return HttpResponse.json({
            status: "OK",
            results: TechMockArticle,
          });
        }
      )
    );

    // Open dropdown
    const dropdown = screen.getByTestId("dropdown-button");
    fireEvent.click(dropdown);

    // Select technology category
    const techOption = screen.getByText("technology");
    fireEvent.click(techOption);

    // Verify new articles load
    await waitFor(() => {
      expect(screen.getByText("Tech title")).toBeInTheDocument();
      expect(
        screen.queryByText("Home Section Article")
      ).not.toBeInTheDocument();
    });
  });
});
