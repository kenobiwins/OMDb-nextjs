import MovieDetails from "components/MovieDetails";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "redux/movies/operations";
import { AppThunkDispatch } from "redux/store";
import { useEffect } from "react";

const Movie = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const router = useRouter();
  const { imdbID } = router.query;

  useEffect(() => {
    if (!imdbID) {
      return;
    }
    dispatch(fetchMovieById(imdbID));
  }, [imdbID, dispatch]);

  return <MovieDetails />;
};

export default Movie;
