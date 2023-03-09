import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://www.omdbapi.com";
axios.defaults.params = { type: "movie" };
const API_KEY = "10c70132";

type searchProps = {
  s: string | string[] | undefined;
  page: number;
};

const fetchMoviesBySearch = createAsyncThunk(
  "movies/fetchMoviesBySearch",
  async ({ s, page }: searchProps, thunkAPI) => {
    try {
      const { data } = await axios.get("/", { params: { apikey: API_KEY, s, page } });
console.log(data);

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      return data;
    } catch ({ message }: unknown | any) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const fetchMovieById = createAsyncThunk("movies/fetchMovieById", async (id:string|string[], thunkAPI) => {
  try {
    const { data } = await axios.get("/", { params: { apikey: API_KEY, i: id } });

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data;
  } catch ({ message }: unknown | any) {
    return thunkAPI.rejectWithValue(message);
  }
});

export { fetchMoviesBySearch, fetchMovieById };
