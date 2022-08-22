import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, ImageList, Typography } from "@mui/material";

import { SearchContext } from "../context";
import AnimeCard from "../components/AnimeList/AnimeCard";

const Home = () => {
  // MAYBE CHANGE ALL THE HOME PAGE TO SHOW TOP ANIME
  // RECENT ANIME
  // ETC
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  const [input, setInput] = useState<string>();
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const response = await searchContext.getTopAnime();
      console.log(response);

      if (!response.data) return;

      searchContext.setContextTopData(response.data);
      localStorage.setItem("topData", JSON.stringify(response.data));
    }
    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <Grid item>
          <Typography>See full list</Typography>
          <ImageList className="anime_list_container">
            {/* {searchContext.topData.data.map((item) => (
              <AnimeCard key={item.mal_id} data={item} />
            ))} */}
          </ImageList>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
