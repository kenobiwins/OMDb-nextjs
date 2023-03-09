import MovieDetails from "components/MovieDetails";
import SetCurrentMovie from "hooks/SetCurrentMovie";

const Movie = () => {
  SetCurrentMovie();
  return <MovieDetails />;
};

export default Movie;
