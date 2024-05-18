import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../../../services/apiUser";

export function useUser() {
  const queryClient = useQueryClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = queryClient.getQueryData(["user"]);
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user_data"],
    queryFn: () => getUserData(user?.id),
  });
  return { userData, isLoading, error };
}
