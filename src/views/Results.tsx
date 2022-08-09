import React, { useState, useContext, useEffect } from "react";
import AnimeList from "../components/AnimeList/AnimeList";
import { SearchContext } from "../context/context";
import { Box, Typography } from "@mui/material";

const Results = () => {
  const searchContext = useContext(SearchContext);
  const [dataExists, setDataExists] = useState<boolean>(true);

  useEffect(() => {
    if (!searchContext.listData || searchContext.listData.data.length === 0) {
      try {
        const localData = localStorage.getItem("myData");

        if (typeof localData !== "string") throw new Error();

        const parsedData = JSON.parse(localData);

        if (parsedData.length === 0) throw new Error();

        searchContext.setContextListData(parsedData);
        setDataExists(true);
      } catch (error) {
        setDataExists(false);
      }
    }
  }, [searchContext.listData]);

  if (!searchContext.listData) return <></>;

  return (
    <Box mt={2}>
      {(dataExists && <AnimeList listData={searchContext.listData} />) || (
        <Typography variant="h4">Data does not exist</Typography>
      )}
    </Box>
  );
};

export default Results;
