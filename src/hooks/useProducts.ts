import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const useProducts = () =>
  useQuery<Products[], Error>({
    queryKey: ["Products"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/products").then((res) => res.data),
  });

export default useProducts;
