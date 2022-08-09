import React from "react";

import { Grid, Link, Paper, Typography } from "@mui/material";

import { ISingleAnimeProps } from "../../types";

const SingleAnime = ({ data }: ISingleAnimeProps) => {
  if (!data) return <></>;

  return (
    <section>
      <Grid
        container
        spacing={10}
        direction="row"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        className="single_anime_container"
      >
        <Grid item>
          <img
            src={data.images.jpg.image_url}
            alt={data.title}
            className="single_anime_image"
            loading="lazy"
          />
        </Grid>
        <Grid item>
          <Paper elevation={3} className="single_anime_description">
            <Typography variant="h4" component="h2">
              {data.title}
            </Typography>
            <Typography variant="h6" component="h2">
              Genres:{" "}
              {data.genres.map(
                (genre, i, arr) =>
                  genre.name + (arr.length - 1 === i ? "" : " - ")
              )}
            </Typography>
            <Typography variant="h6" component="h2">
              Status: {data.status}
            </Typography>
            <Typography variant="h6" component="h2">
              Score: {data.score}
            </Typography>
            <Typography variant="h6" component="h2">
              Episodes: {data.episodes}
            </Typography>
            <Typography variant="h6" component="h5">
              Rating: {data.rating}
            </Typography>
            <Link component="button" variant="body1" href={data.url}>
              My Anime List
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default SingleAnime;
