import { FC } from "react";
import NavBar from "./NavBar";
import { LayoutProps } from "./types";
import { Container } from "@mui/material";

export const Sharedlayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{ flexGrow: 1 }}>
        <Container>{children}</Container>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Sharedlayout;
