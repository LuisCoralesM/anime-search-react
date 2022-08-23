import React, { useContext, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import SingleAnime from "../components/AnimeComponents/SingleAnime";
import { SearchContext } from "../context";

const SingleView = () => {
  const searchContext = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      searchContext.singleData === undefined ||
      Object.keys(searchContext.singleData).length === 0
    ) {
      try {
        const localData = localStorage.getItem("singleData");

        if (typeof localData !== "string") throw new Error();

        const parsedData = JSON.parse(localData);

        if (parsedData.length === 0) throw new Error();

        searchContext.setContextSingleData(parsedData);
        setDataExists(true);
      } catch (error) {
        setDataExists(false);
      }
    }
  }, [searchContext]);

  return (
    <Box>
      {dataExists ? (
        <SingleAnime data={searchContext.singleData} />
      ) : (
        <Typography>No data exists for this Anime</Typography>
      )}
    </Box>
  );
};

export default SingleView;
