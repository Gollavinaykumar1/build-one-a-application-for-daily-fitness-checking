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

// Auto-patched missing exports by VIA startup fix
export const createItem = async (data) => {
  const r = await fetch(`${BASE_URL}/api/v1/item`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error('createItem failed');
  return r.json();
};
export const deleteItem = async (id) => {
  const r = await fetch(`${BASE_URL}/api/v1/item/${id}`, {
    method: 'DELETE',
  });
  if (!r.ok) throw new Error('deleteItem failed');
  return r.json();
};
export const getItems = async () => {
  const r = await fetch(`${BASE_URL}/api/v1/items`);
  if (!r.ok) throw new Error('getItems failed');
  return r.json();
};
export const getStats = async () => {
  const r = await fetch(`${BASE_URL}/api/v1/stats`);
  if (!r.ok) throw new Error('getStats failed');
  return r.json();
};
