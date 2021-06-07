import axios from "axios";
import { QueryFunction, QueryFunctionContext } from "react-query";
import { RequestParams } from "../types/types";
import { root, token } from "./config";

const instance = axios.create({
  baseURL: root,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getData: QueryFunction = async (
  params: QueryFunctionContext<any>
) => {
  const [, { id, path }] = params.queryKey;
  const { data } = await instance.get(`movie/${id}${path}`);
  return data;
};

// instance.interceptors.request.use((config) => config, (error) => error);

// instance.interceptors.response.use((config) => config, (error) => error);

export default instance;
