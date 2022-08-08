import React from "react";

import { ImageList } from "@mui/material";

import { IAnimeObject } from "../../types";
import AnimeCard from "./AnimeCard";

interface IListProps {
  listData: IAnimeObject[];
}

const AnimeList = (props: IListProps) => {
  return (
    <ImageList className="animeList_container">
      {props.listData.map((data) => (
        <AnimeCard key={data.mal_id} data={data} />
      ))}
    </ImageList>
  );
};

export default AnimeList;
