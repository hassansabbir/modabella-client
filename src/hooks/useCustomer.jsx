import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCustomer = () => {
  const { user } = useContext(AuthContext);
  const { data: isCustomer, isLoading: isCustomerLoading } = useQuery({
    queryKey: ["isCustomer", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/users/student/${user?.email}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });
  return [isCustomer, isCustomerLoading];
};

export default useCustomer;
