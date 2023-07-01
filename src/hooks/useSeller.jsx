import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSeller = () => {
  const { user } = useContext(AuthContext);
  const { data: isSeller, isLoading: isSellerLoading } = useQuery({
    queryKey: ["isSeller", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/users/seller/${user?.email}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });
  return [isSeller, isSellerLoading];
};

export default useSeller;
