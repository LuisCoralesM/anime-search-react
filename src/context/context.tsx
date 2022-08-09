import React, { createContext, useState } from "react";

import { IAnimeObject, IApiResponse, IContext } from "../types";
import { getAnime } from "../utils/fetchApi";

export const SearchContext = createContext<IContext>({
  listData: undefined,
  singleData: undefined,
  getAnime: getAnime,
  setContextListData: () => {},
  setContextSingleData: () => {},
});

export const SearchProvider = ({ children }: any) => {
  const [listData, setListData] = useState<IApiResponse>(); //useReducer
  const [singleData, setSingleData] = useState<IAnimeObject>();
  const setContextListData = (data: IApiResponse) => setListData(data);
  const setContextSingleData = (data: IAnimeObject) => setSingleData(data);

  return (
    <SearchContext.Provider
      value={{
        listData,
        singleData,
        getAnime,
        setContextListData,
        setContextSingleData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
