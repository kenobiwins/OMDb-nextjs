import { SliceState } from "./moviesSlice";

type selectorsPropsState = { movies: SliceState };

const selectMoviesBySearch = (state: selectorsPropsState) => state.movies.movies;
const selectFavoritesMovies = (state: selectorsPropsState) => state.movies.favorites;
const selectCurrentMovie = (state: selectorsPropsState) => state.movies.currentMovie;
const selectTotalPages = (state: selectorsPropsState) => state.movies.pages;
const selectIsLoading = (state: selectorsPropsState) => state.movies.isLoading;
const selectIsError = (state: selectorsPropsState) => state.movies.isError;

export {
  selectFavoritesMovies,
  selectMoviesBySearch,
  selectCurrentMovie,
  selectTotalPages,
  selectIsLoading,
  selectIsError,
};
