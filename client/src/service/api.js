import axios from "axios";

const URL = "http://localhost:8080";

export const userSignup = async (credentials) => {
  try {
    const response = axios.post(`${URL}/signup`, credentials);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export const userLogin = (credentials) => {
  try {
    const response = axios.post(`${URL}/login`, credentials);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};