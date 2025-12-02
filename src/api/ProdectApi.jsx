import EAxios from "./EAxios";

export const fetchProducts = async () => {
  const response = await EAxios.get("/products");
  return response.data;
};
