import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticatedUser } = useCurrentUser();

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
