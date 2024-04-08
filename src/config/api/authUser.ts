import axios from 'axios';
import {API_URL_ANDROID, API_URL_IOS, STAGE, API_URL as PROD_URL} from '@env';
import {Platform} from 'react-native';

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


//Todo: Interceptors