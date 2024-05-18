import { useLogout } from "../features/authentication/hooks/useLogout";
import ButtonLoader from "../pages/app/components/ButtonLoader";

export default function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <button onClick={() => logout()}>
      {isLoading ? <ButtonLoader /> : "Log out"}
    </button>
  );
}
