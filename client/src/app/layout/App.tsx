import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "Product" + (prevState.length + 1),
        description: "some description",
        price: prevState.length * 100 + 100,
        brand: "some brand",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <>
        <Typography variant="h1">Re-Store</Typography>
        <Catalog products={products} addProduct={addProduct} />
      </>
    </>
  );
}

export default App;
