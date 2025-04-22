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
