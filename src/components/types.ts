import { ReactNode } from "react";

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
  color?: string;
};