import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/users/admin/${user?.email}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
