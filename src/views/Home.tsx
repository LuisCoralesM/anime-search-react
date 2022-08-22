import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, ImageList, Typography } from "@mui/material";

import GenericList from "../components/AnimeComponents/GenericList";
import Spinner from "../components/Loading/Spinner";
import { SearchContext } from "../context";


const Home = () => {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  async function handleOnClick(
    e: React.MouseEvent<HTMLButtonElement>,
    path: string
  ) {
    e.preventDefault();

    navigate(path);
  }

  useEffect(() => {
    async function fetchTopData() {
      const response = await searchContext.getTopAnime();

      if (!response.data) return;

      searchContext.setContextTopData(response.data);
      localStorage.setItem("topData", JSON.stringify(response.data));
    }
    async function fetchCurrentData() {
      const response = await searchContext.getCurrentSeasonAnime();

      if (!response.data) return;

      searchContext.setContextCurrentData(response.data);
      localStorage.setItem("currentData", JSON.stringify(response.data));
    }
    fetchTopData();
    fetchCurrentData();
  }, []);

  return (
    <>
      <Box className="home_lists_container">
        {searchContext.topData && searchContext.topData.data.length !== 0 ? (
          <>
            <h2>Top Anime</h2>
            <GenericList
              animeData={{
                data: searchContext.topData.data.slice(0, 5),
                pagination: searchContext.topData.pagination,
              }}
            />
            <button onClick={(e) => handleOnClick(e, "/top")}>
              See full list
            </button>
          </>
        ) : (
          <Spinner />
        )}
      </Box>
      <Box className="home_lists_container">
        {searchContext.currentData &&
        searchContext.currentData.data.length !== 0 ? (
          <>
            <h2>Current Season Anime</h2>
            <GenericList
              animeData={{
                data: searchContext.currentData.data.slice(0, 5),
                pagination: searchContext.currentData.pagination,
              }}
            />
            <button onClick={(e) => handleOnClick(e, "/current")}>
              See full list
            </button>
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};

export default Home;
