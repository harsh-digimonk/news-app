import { render, screen, waitFor } from "@testing-library/react";
import ListScreen from "@/pages/ListScreen";
import { BrowserRouter } from "react-router";

describe("List Screen", () => {
  it("renders loading state", () => {
    render(
      <BrowserRouter>
        <ListScreen />
      </BrowserRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  // Fetch Mock data form server handler
  it("displays data after fetch", async () => {
    render(
      <BrowserRouter>
        <ListScreen />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Home title")).toBeInTheDocument();
    });
  });
});
