import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchContext } from "../context/context";
import { handleSearch } from "../utils/handleSearch";

const LOGO_IMG =
  "https://www.pngitem.com/pimgs/m/113-1133466_transparent-dragon-ball-xenoverse-png-dragon-ball-z.png";

const Home = () => {
  // MAYBE CHANGE ALL THE HOME PAGE TO SHOW TOP ANIME
  // RECENT ANIME
  // ETC 

  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  const [input, setInput] = useState<string>();
  const [hasSearched, setHasSearched] = useState<boolean>(false);

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
          <img alt="logo" src={LOGO_IMG} width={300} />
        </Grid>
        <Grid>
          <form className="home_form">
            <FormControl className="home_form_control">
              <Input
                className="home_input"
                placeholder="Search for your fave anime"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <IconButton
                className="home_icon_button"
                type="submit"
                color="primary"
                disabled={!input}
                onClick={(e) =>
                  handleSearch(
                    e,
                    input,
                    setHasSearched,
                    searchContext,
                    navigate
                  )
                }
              >
                <SearchIcon />
              </IconButton>
              {hasSearched ? (
                <CircularProgress color="inherit" data-testid="loader" />
              ) : (
                <></>
              )}
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
