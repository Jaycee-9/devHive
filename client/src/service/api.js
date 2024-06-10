import axios from "axios";

const URL = "https://dev-hive-ten.vercel.app";
axios.defaults.withCredentials = true;
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
