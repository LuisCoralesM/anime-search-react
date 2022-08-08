import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, ImageListItem, Paper, Typography, Link } from "@mui/material";

import { SearchContext } from "../../context/context";
import { IAnimeObject } from "../../types";
import { getAnimeById } from "../../utils/fetchApi";

interface ICardProps {
  data: IAnimeObject;
}

const AnimeCard = ({ data }: ICardProps) => {
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  async function onClickHandler(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    e.preventDefault();

    const response = await getAnimeById(data.mal_id);

    if (!response.data) return;

    searchContext.setContextSingleData(response.data);
    localStorage.setItem("singleData", JSON.stringify(response.data));
    navigate("/details");
  }

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
          <Link
            component="button"
            variant="body1"
            style={{ marginBottom: 0 }}
            onClick={onClickHandler}
          >
            Learn More
          </Link>
        </Paper>
      </Grid>
    </ImageListItem>
  );
};

export default AnimeCard;
