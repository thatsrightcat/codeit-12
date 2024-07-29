import axios from "axios";

const instance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/6-12",
  withCredentials: false,
});

export default instance;
