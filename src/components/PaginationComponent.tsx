import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { paginationProps } from "./types";

const PaginationComponent: FC<paginationProps> = ({ count, color, page, onChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} color="primary" onChange={onChange} />
    </Stack>
  );
};

export default PaginationComponent;
