import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080",
  timeout: 2000,
});

export const $get = async (url: string, params: any) => {
  let { data } = await instance.get(url, { params });
  return data;
};
