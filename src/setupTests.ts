import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { server } from "./mocks/server";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: (req) => {
      console.error(`Unhandled: ${req.method} ${req.url}`);
    },
  })
);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error", // or log, for debugging
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
