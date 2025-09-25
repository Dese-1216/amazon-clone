import axios from "axios";
const axiosInstance = axios.create({
  //using localhost
  // baseURL: "http://127.0.0.1:5001/clone-e1bfe/us-central1/api",
  //using render
  baseURL: "https://amazon-api-backend-q7f9.onrender.com/",
});
export { axiosInstance };
