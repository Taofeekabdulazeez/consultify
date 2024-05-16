import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUser";

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
    },
  });

  return {
    signup,
    isLoading,
  };
}
