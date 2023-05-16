import apiClient from './apiClient';

const RESOURCE = '/search';

export const getSearchList = async (inputText: string, page: number) => {
  try {
    const response = await apiClient.get(
      `${RESOURCE}?q=${inputText}&page=${page}`,
    );
    return response;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};
