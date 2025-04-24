import { storyResult } from "@/utils/types";

type BasicMultimedia = Pick<storyResult['multimedia'][number], 'url' | 'format'>;

type mockArticleType = Pick<storyResult, 'title' | 'abstract' | 'url' | 'section'> & {
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
] 

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
] 