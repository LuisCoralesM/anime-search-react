import { createContext } from "react";
import { API_URL } from "../utils/apiUrl";
import { fetchAnime, fetchApi } from "../utils/fetchApi";

export const SearchContext = createContext({
  listData: [],
  singleData: {},
  fetchAnime,
  setContextListData: (data: []) => {},
  setContextSingleData: (data: {}) => {},
});
