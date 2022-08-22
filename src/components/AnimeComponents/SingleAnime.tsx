import React from "react";

import { Grid, Link, Paper, Typography } from "@mui/material";

import { ISingleAnimeProps } from "../../types";
import { separateItems } from "../../utils/separateItems";

const SingleAnime = ({ data }: ISingleAnimeProps) => {
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
            src={data?.images.jpg.image_url}
            alt={data?.title}
            className="single_anime_image"
            loading="lazy"
          />
        </Grid>
        <Grid item>
          <Paper elevation={3} className="single_anime_description">
            <Typography variant="h4" component="h2">
              {data?.title}
            </Typography>
            <Typography variant="h6" component="h2">
              Genres:{" "}
              {data?.genres.length !== 0
                ? data?.genres.map(separateItems)
                : "N/A"}
            </Typography>
            <Typography variant="h6" component="h2">
              Demographics:{" "}
              {data?.demographics.length !== 0
                ? data?.demographics.map(separateItems)
                : "N/A"}
            </Typography>
            <Typography variant="h6" component="h5">
              Studios:{" "}
              {data?.studios.length !== 0
                ? data?.studios.map(separateItems)
                : "N/A"}
            </Typography>
            <Typography variant="h6" component="h2">
              Status: {data?.status}
            </Typography>
            <Typography variant="h6" component="h2">
              Aired: {data?.aired.string}
            </Typography>
            <Typography variant="h6" component="h2">
              Score: {data?.score ?? "None"}
            </Typography>
            <Typography variant="h6" component="h2">
              Episodes: {data?.episodes}
            </Typography>
            <Typography variant="h6" component="h2">
              Duration: {data?.duration}
            </Typography>
            <Typography variant="h6" component="h5">
              Rating: {data?.rating ?? "N/A"}
            </Typography>
            <Typography variant="h6" component="h5">
              Rank: {data?.rank ?? "Unranked"}
            </Typography>
            <Typography variant="h6" component="h5">
              Popularity: {data?.popularity ?? "N/A"}
            </Typography>
            <Link component="button" variant="body1" href={data?.url}>
              My Anime List
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={10}
        direction="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        className="single_anime_synopsis"
      >
        <Grid item className="single_anime_synopsis">
          <Typography variant="body1" component="p">
            {data?.synopsis}
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default SingleAnime;
