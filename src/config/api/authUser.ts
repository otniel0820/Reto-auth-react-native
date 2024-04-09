import axios from 'axios';
import {API_URL_ANDROID, API_URL_IOS, STAGE, API_URL as PROD_URL} from '@env';
import {Platform} from 'react-native';
import { StorageAdapter } from '../adapters/asyncStorage';

export const API_URL =
  (STAGE === 'prod')
    ? PROD_URL
    : Platform.OS === 'ios'
        ? API_URL_IOS
        : API_URL_ANDROID;

const authUser = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});



//Interceptor

authUser.interceptors.request.use(
  async(config) => {
  const token = StorageAdapter.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config
});

export {
    authUser
}