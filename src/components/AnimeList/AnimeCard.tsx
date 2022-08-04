import React from "react";

import { Grid, ImageListItem, Paper, Typography } from "@mui/material";

import { IAnimeObject } from "../../types";

interface ICardProps {
  data: IAnimeObject;
}

const AnimeCard = ({ data }: ICardProps) => {
  return (
    <ImageListItem className="anime_card_container">
      <Grid container item xs={12}>
        <Paper className="anime_card_paper">
          <img
            src={data.images.jpg.image_url}
            alt={data.title}
            style={{ maxHeight: 300 }}
          />
          <Typography variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" component="h3">
            {data.genres.map(
              (genre, i, arr) =>
                genre.name + (arr.length - 1 === i ? "" : " - ")
            )}
          </Typography>
        </Paper>
      </Grid>
    </ImageListItem>
  );
};

export default AnimeCard;
