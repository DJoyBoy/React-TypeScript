import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../module";

export function useProdukt() {
  const [products, setPtodukt] = useState<IProduct[]>([]);
  const [loaing, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  function addProukt(products: IProduct) {
    setPtodukt((p) => [...p, products]);
  }

  async function fetchProdukt() {
    try {
      setError("");
      setLoading(true);
      const respons = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setPtodukt(respons.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
      setPtodukt([]);
    }
  }

  useEffect(() => {
    fetchProdukt();
  }, []);
  return { products, error, loaing, addProukt };
}
