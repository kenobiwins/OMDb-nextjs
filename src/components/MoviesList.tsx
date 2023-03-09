import { FC } from "react";
import MovieListItem from "./MovieListItem";
import { MoviesListProps } from "./types";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={4}>
      <Grid
        container
        style={{ display: "flex", justifyContent: "center" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {movies.map((movie, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <MovieListItem movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesList;
