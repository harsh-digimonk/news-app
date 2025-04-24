// src/__tests__/DetailScreen.test.tsx
import { render, screen, act } from "@testing-library/react";
import DetailScreen from "@/pages/DetailScreen";
import useArticleStore from "@/store/articleStore";
import { BrowserRouter } from "react-router";
import { vi } from "vitest";
import { ArticleMockDetail } from "@/mocks/mockData";

// Mock navigation
const mockNavigate = vi.fn();
vi.mock("react-router", async () => ({
  ...(await vi.importActual("react-router")),
  useNavigate: () => mockNavigate,
}));

const initialState = useArticleStore.getInitialState();

describe("DetailScreen", () => {
  beforeEach(() => {
    act(() => {
      useArticleStore.setState(initialState, true);
    });
    mockNavigate.mockClear();
  });

  it("redirects when no article exists", () => {
    render(
      <BrowserRouter>
        <DetailScreen />
      </BrowserRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("shows article details", () => {
    act(() => {
      useArticleStore.setState({ selectedArticle: ArticleMockDetail });
    });

    render(
      <BrowserRouter>
        <DetailScreen />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByAltText("thumbnail")).toHaveAttribute(
      "src",
      "https://test.com/image.jpg"
    );
  });
});
