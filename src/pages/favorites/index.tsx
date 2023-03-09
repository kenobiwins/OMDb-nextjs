import MoviesList from "components/MoviesList";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectFavoritesMovies } from "redux/movies/selectors";

const Favorites = () => {
 const favoriteMovies= useSelector(selectFavoritesMovies)
return (
  <>
    <Head>
      <title>Favorite page</title>
      <meta name="description" content="Favorite page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <MoviesList movies={favoriteMovies} />
  </>
);
}

export default Favorites;
