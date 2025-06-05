import axios from "axios";
import { AxiosRequestConfig } from "axios";

export const baseUrl = "https://pdf-edition-v2-backend.vercel.app";
// export const baseUrl = "http://localhost:8080";

export const requestGet = async (endpoint: string, params = {}) => {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

export const requestPost = async <T>(
  endpoint: string,
  data = {},
  options: AxiosRequestConfig = {}
): Promise<T> => {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};
