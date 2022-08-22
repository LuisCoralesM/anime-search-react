import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, ImageListItem, Paper, Typography } from "@mui/material";

import { SearchContext } from "../../context";
import { ISingleAnimeProps } from "../../types";
import { getAnimeById } from "../../utils/fetchApi";
import { trimText } from "../../utils/trimText";

const AnimeCard = ({ data }: ISingleAnimeProps) => {
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  async function onClickHandler(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    e.preventDefault();

    if (!data) return;

    const response = await getAnimeById(data.mal_id);

    if (!response.data) return;

    searchContext.setContextSingleData(response.data.data);
    localStorage.setItem("singleData", JSON.stringify(response.data.data));

    navigate("/details");
  }

  return (
    <ImageListItem className="anime_card_container" onClick={onClickHandler}>
      <Grid container item xs={12}>
        <Paper className="anime_card_paper">
          <img
            src={data?.images.jpg.image_url}
            alt={data?.title}
            style={{ maxHeight: 300 }}
            loading="lazy"
          />
          <Typography variant="h5" component="h2">
            {trimText(data?.title)}
          </Typography>
          <Typography variant="body2" component="h3">
            {data?.genres[0]?.name ?? "No Genres"}
          </Typography>
        </Paper>
      </Grid>
    </ImageListItem>
  );
};

export default AnimeCard;
