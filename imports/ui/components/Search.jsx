import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const style = useStyles();
  const [searchString, updateSearchString] = useState("");

  handleReturnKeyPressed = event => {
    // TODO: Add backend function to search
    if (event.key === "Enter") {
      console.log("Search query string is: " + searchString);
    }
  };

  return (
    <div className={style.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={style.search}>
            <div className={style.searchIcon}>
              <SearchIcon />
            </div>
            <div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: style.inputRoot,
                  input: style.inputInput
                }}
                onChange={() => updateSearchString(event.target.value)}
                onKeyPress={this.handleReturnKeyPressed}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    width: "100%"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "70%"
  },
  inputInput: {
    width: "100%"
  }
}));

export default Search;
