import React, { useState, useContext, useEffect } from "react";
import AnimeList from "../components/AnimeList/AnimeList";
import { SearchContext } from "../context/context";
import { Box, Typography } from "@mui/material";

const Results = () => {
  const searchContext = useContext(SearchContext);
  const [dataExists, setDataExists] = useState<boolean>(true);

  useEffect(() => {
    if (!searchContext.listData || searchContext.listData.length === 0) {
      try {
        const localData = localStorage.getItem("myData");

        if (typeof localData !== "string") throw new Error();

        searchContext.setContextListData(JSON.parse(localData));
        setDataExists(true);
      } catch (error) {
        setDataExists(false);
      }
    }
  }, [searchContext.listData]);

  return (
    <Box mt={2}>
      {(dataExists && <AnimeList />) || (
        <Typography variant="h4">Data does not exist</Typography>
      )}
    </Box>
  );
};

export default Results;
