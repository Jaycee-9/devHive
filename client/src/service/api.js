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

export const uploadFile = (file) => {
  try {
    const response = axios.post(`${URL}/upload`, file);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export const codeUpload = (codeDetails) => {
  try {
    const response = axios.post(`${URL}/add_code`, codeDetails);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export const getAllCode = () => {
  try {
    const response = axios.get(`${URL}/codes`);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export const getSingleCode = (id) => {
  try {
    const response = axios.get(`${URL}/code`, {
      params: { id },
    });
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};
