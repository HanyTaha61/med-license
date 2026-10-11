import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:6500',
  timeout: 12000,
  headers: { 'Content-Type': 'application/json' }
});

export async function submitLead(payload) {
  const response = await api.post('/api/leads', payload);
  return response.data;
}

export default api;
