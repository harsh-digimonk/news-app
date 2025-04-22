import { topStoryResponse } from "../utils/types";
import apiService from "./api";
import { API_KEY } from "./apiConfig";

export const fetchTopStories = async (section = 'home'):Promise<topStoryResponse> => {
  try {
    const response = await apiService.get(`/topstories/v2/${section}.json`, {
      params: {
        'api-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};

export const fetchStoryDetail = async (section = 'home'):Promise<topStoryResponse> => {
  try {
    const n = encodeURIComponent('nyt://article/8bce652f-420f-5ca6-8001-48355de35192')
    const response = await apiService.get(`/search/v2/articlesearch.json?fq=_id.${n}`, {
      params: {
        'api-key': API_KEY,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};
