import axios from 'axios';

const BASE_URL = 'https://api.example.com';

export const fetchSportsNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sports-news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sports news:', error);
    return [];
  }
};
