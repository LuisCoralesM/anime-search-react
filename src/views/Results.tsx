import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/context";

const Results = () => {
  const { listData, fetchAnime, setContextListData } =
    useContext(SearchContext);

  useEffect(() => {
    if (!listData)
      setContextListData(JSON.parse(localStorage.getItem("myData") ?? ""));

    console.log(listData);
  }, [listData]);

  return <div>Results</div>;
};

export default Results;
