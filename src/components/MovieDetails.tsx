import { FAKE_POSTER } from "constants/constatnts";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, deleteFromFavorite } from "redux/movies/moviesSlice";
import { selectCurrentMovie, selectFavoritesMovies } from "redux/movies/selectors";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const currentMovie = useSelector(selectCurrentMovie);
  const favoriteMovies = useSelector(selectFavoritesMovies);
  const router = useRouter();

  const isIncludes = () => {
    if (favoriteMovies.length > 0 && currentMovie) {
      return favoriteMovies.some((movie) => movie.imdbID === currentMovie.imdbID);
    }
  };

  const handleToggleFavorite = () => {

    if (isIncludes()) {
      if (router.pathname.includes("favorites")) {

        router.back()
      }
      dispatch(deleteFromFavorite(currentMovie.imdbID));
      return;
    } else {
      dispatch(addToFavorites({ ...currentMovie }));
      return;
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    currentMovie && (
      <Card sx={{ maxWidth: 345, marginTop: 8 }}>
        <Button onClick={handleGoBack}>Go back</Button>
        <CardMedia
          sx={{ height: 500 }}
          image={currentMovie.Poster !== "N/A" ? currentMovie.Poster : FAKE_POSTER}
          title={currentMovie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currentMovie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentMovie?.Ratings[0]?.Value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentMovie.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentMovie.Actors}
          </Typography>
        </CardContent>
        <CardActions>
          <Button type="button" onClick={handleToggleFavorite}>
            {isIncludes() ? "Delete" : "Add to favorite"}
          </Button>
        </CardActions>
      </Card>
    )
  );
};

export default MovieDetails;
