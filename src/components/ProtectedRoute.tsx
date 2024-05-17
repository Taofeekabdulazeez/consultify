import { ReactNode, useEffect } from "react";
import supabase from "../services/supabase";
import { useUser } from "../pages/loginv2/useUser";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticatedUser } = useUser();

  //2. if no authenticated user, redirect to login oage
  useEffect(
    function () {
      if (!isAuthenticatedUser && !isLoading) navigate("/login");
    },
    [isAuthenticatedUser, isLoading, navigate]
  );

  // 3. show a spinner
  if (isLoading) return <strong>Loading user...</strong>;
  // 4. if there is user, render the app
  if (isAuthenticatedUser) return children;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log(user);

  if (error) throw new Error(error.message);

  return user;
}
