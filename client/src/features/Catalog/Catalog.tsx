import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
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
      <ProductList products={products} />
    </>
  );
}
