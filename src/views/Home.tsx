import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormControl, Grid, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchContext } from "../context/context";

const LOGO_IMG =
  "https://www.pngitem.com/pimgs/m/113-1133466_transparent-dragon-ball-xenoverse-png-dragon-ball-z.png";

const Home = () => {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  const [input, setInput] = useState<string>();
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  async function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!input) return;

    setHasSearched(true);

    const response = await searchContext.getAnime(input);
    searchContext.setContextListData(response.data.data);
    localStorage.setItem("myData", JSON.stringify(response.data.data));
    navigate("/list");
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <Grid item>
          <img alt="logo" src={LOGO_IMG} height={420} />
        </Grid>
        <Grid item>
          <form className="home_form">
            <FormControl className="home_formControl">
              <Input
                className="home_input"
                placeholder="Search for your fave anime"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <IconButton
                className="home_iconButton"
                type="submit"
                color="primary"
                disabled={!input}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </FormControl>
          </form>
          {hasSearched ? <>searching</> : ""}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
