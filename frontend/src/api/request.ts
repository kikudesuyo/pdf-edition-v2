import axios from "axios";
import { AxiosRequestConfig } from "axios";

// export const baseUrl = "http://localhost:8080";

export const baseUrl =
  "https://pdf-edition-v2-api-358187065914.asia-northeast1.run.app";

export const requestGet = async (endpoint: string, queryParams = {}) => {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.get(url, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

export const requestPost = async <T>(
  endpoint: string,
  body = {},
  options: AxiosRequestConfig = {}
): Promise<T> => {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.post(url, body, options);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};
