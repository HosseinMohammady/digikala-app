import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ShoppingCarts {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const useShoppingCarts = () =>
  useQuery<ShoppingCarts[], Error>({
    queryKey: ["ShoppingCarts"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/products").then((res) => res.data),
  });

export default useShoppingCarts;
