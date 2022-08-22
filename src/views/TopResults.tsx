import React, { useContext, useEffect, useState } from "react";

import { Typography } from "@mui/material";

import GenericList from "../components/AnimeComponents/GenericList";
import { SearchContext } from "../context";

const TopResults = () => {
  const searchContext = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      searchContext.topData === undefined ||
      Object.keys(searchContext.topData).length === 0
    ) {
      try {
        const localData = localStorage.getItem("topData");

        if (typeof localData !== "string") throw new Error();

        const parsedData = JSON.parse(localData);

        if (parsedData.length === 0) throw new Error();

        searchContext.setContextTopData(parsedData);
        setDataExists(true);
      } catch (error) {
        setDataExists(false);
      }
    }
  }, [searchContext]);

  return (
    <div>
      {dataExists &&
      searchContext.topData !== undefined &&
      searchContext.topData.data.length !== 0 ? (
        <GenericList animeData={searchContext.topData} />
      ) : (
        <Typography variant="h4">Top anime data cannot be fetched</Typography>
      )}
    </div>
  );
};

export default TopResults;
