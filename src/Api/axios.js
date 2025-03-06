import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-a17bc/us-central1/api",
  baseURL: "https://api-3meimqo2uq-uc.a.run.app",
});

export { axiosInstance };
