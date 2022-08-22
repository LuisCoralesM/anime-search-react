import React, { createContext, useState } from "react";

import { IAnimeObject, IApiResponse, IContext } from "../types";
import {
  getAnime,
  getAnimeById,
  getCurrentSeasonAnime,
  getTopAnime,
} from "../utils/fetchApi";

export const SearchContext = createContext<IContext>({
  listData: undefined,
  singleData: undefined,
  topData: undefined,
  currentData: undefined,
  getAnime: getAnime,
  getAnimeById: getAnimeById,
  getTopAnime: getTopAnime,
  getCurrentSeasonAnime: getCurrentSeasonAnime,
  setContextListData: () => {},
  setContextSingleData: () => {},
  setContextTopData: () => {},
  setContextCurrentData: () => {},
});

export const SearchProvider = ({ children }: any) => {
  const [listData, setListData] = useState<IApiResponse>(); //useReducer
  const [singleData, setSingleData] = useState<IAnimeObject>();
  const [topData, setTopData] = useState<IApiResponse>();
  const [currentData, setCurrentData] = useState<IApiResponse>();
  const setContextListData = (data: IApiResponse) => setListData(data);
  const setContextSingleData = (data: IAnimeObject) => setSingleData(data);
  const setContextTopData = (data: IApiResponse) => setTopData(data);
  const setContextCurrentData = (data: IApiResponse) => setCurrentData(data);

  return (
    <SearchContext.Provider
      value={{
        listData,
        singleData,
        topData,
        currentData,
        getAnime,
        getAnimeById,
        getTopAnime,
        getCurrentSeasonAnime,
        setContextListData,
        setContextSingleData,
        setContextTopData,
        setContextCurrentData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
