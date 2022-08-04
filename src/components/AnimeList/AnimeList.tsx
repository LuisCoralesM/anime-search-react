import React, { useContext } from "react";
import { SearchContext } from "../../context/context";

const AnimeList = () => {
  const searchContext = useContext(SearchContext);

  console.log(searchContext?.listData);

  return (
    <div>
      {searchContext?.listData.map((item, index) => (
        <div key={index}>{item.source}</div>
      ))}
    </div>
  );
};

export default AnimeList;
