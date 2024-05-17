import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../components/ProtectedRoute";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticatedUser: user?.role === "authenticated",
  };
}
