import React, { useContext, useEffect, useState } from "react";

import { Typography } from "@mui/material";

import GenericList from "../components/AnimeComponents/GenericList";
import { SearchContext } from "../context";

const CurrentResults = () => {
  const searchContext = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      searchContext.currentData === undefined ||
      Object.keys(searchContext.currentData).length === 0
    ) {
      try {
        const localData = localStorage.getItem("currentData");

        if (typeof localData !== "string") throw new Error();

        const parsedData = JSON.parse(localData);

        if (parsedData.length === 0) throw new Error();

        searchContext.setContextCurrentData(parsedData);
        setDataExists(true);
      } catch (error) {
        setDataExists(false);
      }
    }
  }, [searchContext]);

  return (
    <div>
      {dataExists &&
      searchContext.currentData !== undefined &&
      searchContext.currentData.data.length !== 0 ? (
        <GenericList animeData={searchContext.currentData} />
      ) : (
        <Typography variant="h4">
          Current season anime data cannot be fetched
        </Typography>
      )}
    </div>
  );
};

export default CurrentResults;
