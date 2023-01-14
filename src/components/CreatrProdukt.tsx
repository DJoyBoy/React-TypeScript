import axios from "axios";
import { useState } from "react";
import { IProduct } from "../module";
import { Error } from "./Error";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProduktProp {
  onCreate: (product: IProduct) => void;
  onClose: () => void;
}

export function CreateProdukt({ onCreate, onClose }: CreateProduktProp) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  async function submitHanle(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Pleace enter valid title");
      return;
    }

    productData.title = value;
    const recponc = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(recponc.data);
  }

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={submitHanle}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeValue}
      />
      {error && <Error error={error} />}
      <button className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
      <label
        onClick={onClose}
        className=" py-2 px-4 border bg-blue-400 hover:text-white cursor-pointer"
      >
        Close
      </label>
    </form>
  );
}
