import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SearchContext } from "../../context/context";
import { handleSearch } from "../../utils/handleSearch";

import CircularProgress from "@mui/material/CircularProgress";
import { IAnimeObject, IApiResponse } from "../../types";

export function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: "10px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Nav() {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  const [input, setInput] = useState<string>();
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [previousList, setPreviousList] = useState<IApiResponse>();

  function onClickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    navigate("/");
  }

  useEffect(() => {
    if (searchContext.listData !== previousList) {
      setPreviousList(searchContext.listData);
      setHasSearched(false);
    }
  }, [searchContext.listData]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ borderRadius: "8px" }}>
        <Toolbar className="nav_bar">
          <Box className="nav_logo_box" onClick={onClickHandler}>
            <img
              className="nav_logo"
              src="https://qph.cf2.quoracdn.net/main-qimg-db5f4dac62ffaf4cad4e9c1f67950eec"
              alt="logo"
            />
            <Typography
              noWrap
              className="nav_logo_title"
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              My Anime App
            </Typography>
          </Box>
          <Search>
            <form
              onSubmit={(e) =>
                handleSearch(e, input, setHasSearched, searchContext, navigate)
              }
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </Search>
          {hasSearched ? <CircularIndeterminate /> : <></>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
