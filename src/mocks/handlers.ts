import { http, HttpResponse } from "msw";
import { BasicMockArticle } from "./mockData";

export const handlers = [
  http.get("https://api.nytimes.com/svc/topstories/v2/:section.json", () => {
    return HttpResponse.json({
      results: BasicMockArticle,
    });
  }),
];

