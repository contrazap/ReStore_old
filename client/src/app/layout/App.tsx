import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
