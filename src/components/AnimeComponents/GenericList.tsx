import React from "react";

import { ImageList } from "@mui/material";

import { IApiResponse } from "../../types";
import AnimeCard from "./AnimeCard";

interface IListProps {
  animeData: IApiResponse;
}

const GenericList = (props: IListProps) => {
  return (
    <section>
      <ImageList className="top_anime_container">
        {props.animeData.data.map((item) => (
          <AnimeCard key={item.mal_id} data={item} />
        ))}
      </ImageList>
    </section>
  );
};

export default GenericList;
