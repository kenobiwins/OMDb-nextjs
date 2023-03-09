import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBySearch } from "redux/movies/operations";
import { AppThunkDispatch } from "redux/store";
import MoviesList from "components/MoviesList";
import { selectIsError, selectMoviesBySearch, selectTotalPages } from "redux/movies/selectors";
import PaginationComponent from "components/PaginationComponent";
import { useRouter } from "next/router";
import { refreshState } from "redux/movies/moviesSlice";
import { Alert, Box, Button, TextField } from "@mui/material";

const HomePage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | string[]>("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppThunkDispatch>();
  const movies = useSelector(selectMoviesBySearch);
  const totalPages = useSelector(selectTotalPages);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    const { q } = router.query;
    if (!q) {
      dispatch(refreshState());
      return;
    }

    setSearchQuery(q);
    dispatch(fetchMoviesBySearch({ s: q, page }));
  }, [router, dispatch, page]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.query = searchQuery !== "" ? { q: searchQuery } : {};
    router.push({
      pathname: "/",
      query: { ...router.query },
    });
  };

  const handlePagination = (event: any, value: number) => {
    if (router.query.q) {
      setPage(value);
      dispatch(fetchMoviesBySearch({ s: router.query.q, page }));
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box
        component="form"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="searchQuery"
          onChange={handleInput}
          value={searchQuery}
          id="standard-basic"
          label="search field"
          variant="standard"
        />
        <Button type="submit">Search</Button>
      </Box>
      {isError && <Alert severity="error">{isError}</Alert>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {totalPages > 1 && (
        <PaginationComponent count={totalPages} page={page} onChange={handlePagination} />
      )}
    </>
  );
};

export default HomePage;
