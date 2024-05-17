import ButtonLoader from "../pages/app/components/ButtonLoader";
import { useLogout } from "../pages/loginv2/useLogout";

export default function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <button onClick={() => logout()}>
      {isLoading ? <ButtonLoader /> : "Log out"}
    </button>
  );
}
