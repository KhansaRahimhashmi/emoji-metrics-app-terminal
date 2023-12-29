import axios from 'axios';

const API_URL = 'https://emojihub-api-url/metrics';

export const fetchMetrics = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};
