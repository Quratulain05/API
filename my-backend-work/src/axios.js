import axios from "axios";
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getApiData = async () => {
  try {
    const res = await API.get("/posts");
    return res;
  } catch (error) {
    return error.response;
  }
};
