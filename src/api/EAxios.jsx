import axios from "axios";

const EAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
});

EAxios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

EAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default EAxios;
