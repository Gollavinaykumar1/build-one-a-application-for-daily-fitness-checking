import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const getFitnessData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fitness`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postFitnessData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/fitness`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getFitnessData, postFitnessData };