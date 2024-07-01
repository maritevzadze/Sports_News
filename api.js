import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchSportsNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sports-news`);
    return response.data; // Assuming the API returns an array of news items
  } catch (error) {
    console.error('Error fetching sports news:', error);
    return []; // Return empty array or handle error as per your application's needs
  }
};
