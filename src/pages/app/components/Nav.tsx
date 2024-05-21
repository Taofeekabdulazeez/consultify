import { GoSignOut } from "react-icons/go";
import { SlEvent, SlWallet } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../../features/authentication/hooks/useLogout";
import ButtonLoader from "./ButtonLoader";
import { PiUserLight } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { TfiSettings } from "react-icons/tfi";

const navLinks = [
  { label: "Profile", to: "profile", Icon: PiUserLight },
  {
    label: "Appointments",
    to: "appointments",
    Icon: CiVideoOn,
  },
  { label: "Availability", to: "schedules", Icon: SlEvent },
  { label: "My Earnings", to: "earnings", Icon: SlWallet },
  { label: "Settings", to: "settings", Icon: TfiSettings },
];

export default function Nav() {
  const { logout, isLoading } = useLogout();
  return (
    <StyledNav>
      <StyledLinks>
        {navLinks.map(({ label, to, Icon }) => (
          <li key={label}>
            <StyledLink to={to}>
              <Icon size={20} />
              {label}
            </StyledLink>
          </li>
        ))}
      </StyledLinks>
      <StyledLinks>
        <li>
          <ButtonLogout onClick={() => logout()} as="button">
            {isLoading ? (
              <ButtonLoader />
            ) : (
              <>
                <GoSignOut size={20} />
                <span style={{ fontWeight: 600 }}>Logout</span>
              </>
            )}
          </ButtonLogout>
        </li>
      </StyledLinks>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30dvh;
`;

const StyledLinks = styled.ul`
  display: grid;
  list-style: none;
  gap: 10px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  padding: 12px 32px;
  border-radius: 9px;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #f5f3f3;
  }

  &::before {
    content: "";
    display: none;
    background-color: var(--color-primary);
    height: 100%;
    width: 4px;
    position: absolute;
    left: 0;
  }

  &.active {
    background-color: var(--color-primary-tint);

    color: var(--color-primary);
  }

  &.active::before {
    display: block;
  }
`;

const ButtonLogout = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-gray-700);
  font-weight: 500 !important;
  font-size: 15px;
  padding: 12px 32px;
  border-radius: 9px;
  width: 100%;

  &:hover {
    background-color: #f5f3f3;
    cursor: pointer;
  }
`;
