import { storyResult } from "@/utils/types";

type BasicMultimedia = Pick<
  storyResult["multimedia"][number],
  "url" | "format"
>;

type mockArticleType = Pick<
  storyResult,
  "title" | "abstract" | "url" | "section"
> & {
  multimedia: BasicMultimedia[];
};

export const BasicMockArticle: mockArticleType[] = [
  {
    title: "Home title",
    abstract: "Mock Abstract 1",
    url: "https://example.com/1",
    section: "Arts",
    multimedia: [
      {
        url: "https://via.placeholder.com/150",
        format: "threeByTwoSmallAt2X",
      },
    ],
  },
];

export const TechMockArticle: mockArticleType[] = [
  {
    title: "Tech title",
    abstract: "Mock Abstract 1",
    url: "https://example.com/1",
    section: "Technology",
    multimedia: [
      {
        url: "https://via.placeholder.com/150",
        format: "threeByTwoSmallAt2X",
      },
    ],
  },
];

export const ArticleMockDetail: storyResult = {
  title: "Test Article",
  byline: "By Test Author",
  published_date: "2024-01-01T00:00:00Z",
  abstract: "Test abstract",
  section: "technology",
  url: "https://test.com",
  multimedia: [
    {
      format: "Super Jumbo",
      url: "https://test.com/image.jpg",
      caption: "Test caption",
      height: 0,
      width: 0,
      type: "img",
      subtype: "photo",
      copyright: "The New York Times",
    },
  ],
  subsection: "design",
  uri: "nyt://article/66bec795-9f4f-5ea3-8cb2-ac5202e993e5",
  item_type: "Article",
  updated_date: "2025-04-24T07:31:14-04:00",
  created_date: "2025-04-23T19:39:22-04:00",
  material_type_facet: "",
  kicker: "",
  des_facet: [
    "Architecture",
    "Parks and Other Recreation Areas",
    "Central Park Jogger Case (1989)",
    "Swimming",
  ],
  org_facet: ["Central Park Conservancy", "Davis Center"],
  per_facet: ["Salaam, Yusef"],
  geo_facet: ["Central Park (Manhattan, NY)", "Harlem (Manhattan, NY)"],
  short_url: "",
};
