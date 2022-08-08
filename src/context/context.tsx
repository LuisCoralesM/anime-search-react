import React, { createContext, useState } from "react";

import { IAnimeObject, IContext } from "../types";
import { getAnime } from "../utils/fetchApi";

export const SearchContext = createContext<IContext>({
  listData: [],
  singleData: undefined,
  getAnime: getAnime,
  setContextListData: () => {},
  setContextSingleData: () => {},
});

export const SearchProvider = ({ children }: any) => {
  const [listData, setListData] = useState<IAnimeObject[]>([]); //useReducer
  const [singleData, setSingleData] = useState<IAnimeObject>();
  const setContextListData = (data: IAnimeObject[]) => setListData(data);
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
