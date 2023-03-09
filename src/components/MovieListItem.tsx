import { FAKE_POSTER } from "constants/constatnts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { MovieListItemProps } from "./types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

const MovieListItem: FC<MovieListItemProps> = ({ movie: { imdbID, Poster, Title, Year } }) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={router.pathname === "/" ? imdbID : router.pathname + "/" + imdbID}>
        <CardHeader title={Title} subheader={Year} />
        <CardMedia
          component="img"
          height="194"
          image={Poster !== "N/A" ? Poster : FAKE_POSTER}
          alt={Title}
        />
      </Link>
    </Card>
  );
};

export default MovieListItem;
