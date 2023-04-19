import { Product } from "../../app/models/Product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={addProduct}>
        Add Product
      </button>
    </>
  );
}
