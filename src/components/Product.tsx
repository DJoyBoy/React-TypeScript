import { useState } from "react";
import { IProduct } from "../module";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [detail, setDetail] = useState(false);

  const btnName = detail ? "bg-blue-400" : "bg-yellow-400";
  const btnClak = ["py-2 px-4 border", btnName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center">
      <img src={product.image} className="w-1/6" alt={product.category} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={btnClak.join(" ")}
        onClick={() => setDetail((prev) => !prev)}
      >
        {detail ? "Hide Detail" : "Show Details"}
      </button>
      {detail && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
