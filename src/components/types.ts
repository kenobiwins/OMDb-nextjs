import { ReactNode } from "react";

export type FavMovieType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type MoviePreview = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
};

export interface MoviesListProps {
  movies: MoviePreview[];
}

export type MovieListItemProps = {
  movie: MoviePreview;
};

export type LayoutProps = {
  children: ReactNode | JSX.Element;
};

export type paginationProps = {
  count: number;
  page: number;
  onChange: (event: any, value: number) => void;
};
