import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, ImageList, Typography } from "@mui/material";

import GenericList from "../components/AnimeComponents/GenericList";
import Spinner from "../components/Loading/Spinner";
import { SearchContext } from "../context";

const Home = () => {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  async function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    navigate("/top");
  }

  useEffect(() => {
    async function fetchTopData() {
      const response = await searchContext.getTopAnime();
      console.log(response);

      if (!response.data) return;

      searchContext.setContextTopData(response.data);
      localStorage.setItem("topData", JSON.stringify(response.data));
    }
    async function fetchCurrentData() {
      const response = await searchContext.getCurrentSeasonAnime();
      console.log(response);

      if (!response.data) return;

      searchContext.setContextCurrentData(response.data);
      localStorage.setItem("currentData", JSON.stringify(response.data));
    }
    fetchTopData();
    fetchCurrentData();
  }, []);

  return (
    <>
      <Box>
        {searchContext.topData && searchContext.topData.data.length !== 0 ? (
          <>
            <h2>Top Anime</h2>
            <button onClick={handleOnClick}>See full list</button>
            <GenericList
              animeData={{
                data: searchContext.topData.data.slice(0, 5),
                pagination: searchContext.topData.pagination,
              }}
            />
          </>
        ) : (
          <Spinner />
        )}
      </Box>
      <Box>
        {searchContext.currentData &&
        searchContext.currentData.data.length !== 0 ? (
          <>
            <h2>Current Season Anime</h2>
            <button onClick={handleOnClick}>See full list</button>
            <GenericList
              animeData={{
                data: searchContext.currentData.data.slice(0, 5),
                pagination: searchContext.currentData.pagination,
              }}
            />
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};

export default Home;
