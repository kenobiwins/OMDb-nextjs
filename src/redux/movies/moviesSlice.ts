import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchMovieById, fetchMoviesBySearch } from "./operations";
import { FavMovieType } from "components/types";

export interface SliceState {
  movies: [];
  pages: number;
  favorites: FavMovieType[];
  currentMovie: FavMovieType | null;
  isLoading: boolean;
  isError: boolean;
}
const moviesInitialState: SliceState = {
  movies: [],
  pages: 0,
  favorites: [],
  currentMovie: null,
  isLoading: false,
  isError: false,
};

const handlePending = (state: SliceState) => {
  state.isLoading = true;
  state.isError = false;
  // state.movies = [];
  // state.pages = 1;
};

const handleReject = (state: SliceState, { payload }: any) => {
  state.isLoading = false;
  state.isError = payload;
  state.currentMovie = null;
  state.movies = [];
  state.pages = 1;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFromFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    },
    refreshState(state) {
      state.movies = [];
      state.pages = 0;
      state.favorites = [];
      state.currentMovie = null;
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMoviesBySearch.fulfilled, (state, { payload }) => {
        state.movies = payload.Search;
        state.pages = Math.floor(Number(payload.totalResults) / 10);
      })
      .addCase(fetchMovieById.fulfilled, (state, { payload }) => {
        state.currentMovie = { ...payload };
      })
      .addMatcher(isAnyOf(fetchMoviesBySearch.pending, fetchMovieById.pending), handlePending)
      .addMatcher(isAnyOf(fetchMoviesBySearch.rejected, fetchMovieById.rejected), handleReject)
      .addMatcher(isAnyOf(fetchMoviesBySearch.fulfilled, fetchMovieById.fulfilled), (state) => {
        state.isError = false;
        state.isLoading = false;
      }),
});
// {
// fetchMoviesBySearch(state:SliceState, { payload }:any) {
// state.movies = payload;
// },
// setStatusFilter(state, action) {
//   state.filterStatus = action.payload;
// },
// toggleAlphabetStatus(state, action) {
//   state.toAlphabet = action.payload;
// },

export const { addToFavorites, deleteFromFavorite, refreshState } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
