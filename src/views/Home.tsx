import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <form onSubmit={() => navigate("search")}>
        <button type="submit">AAAAAAAAA</button>
      </form>
    </div>
  );
};

export default Home;
