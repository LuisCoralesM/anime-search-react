import { createContext } from "react";
import { getAnime } from "../utils/fetchApi";

export const SearchContext = createContext({
  listData: [],
  singleData: {},
  getAnime: getAnime,
  setContextListData: (data: []) => {},
  setContextSingleData: (data: {}) => {},
});
