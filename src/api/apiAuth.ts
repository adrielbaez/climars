import axios from 'axios';

export const apiAuth = axios.create({
  baseURL: process.env.API_URL,
});
