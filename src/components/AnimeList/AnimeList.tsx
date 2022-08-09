import React from "react";

import { ImageList, Pagination } from "@mui/material";

import { IApiResponse } from "../../types";
import AnimeCard from "./AnimeCard";

interface IListProps {
  listData: IApiResponse;
}

const AnimeList = (props: IListProps) => {
  return (
    <section>
      <ImageList className="anime_list_container">
        {props.listData.data
          .sort((a, b) => a.popularity - b.popularity)
          .map((item) => (
            <AnimeCard key={item.mal_id} data={item} />
          ))}
      </ImageList>
      <Pagination
        className="anime_list_pagination"
        count={props.listData.pagination.last_visible_page}
        shape="rounded"
      />
    </section>
  );
};

export default AnimeList;
