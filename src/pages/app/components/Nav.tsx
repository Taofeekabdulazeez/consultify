import { CgProfile } from "react-icons/cg";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navLinks = [
  { label: "Profile", to: "profile", Icon: CgProfile },
  {
    label: "Appointments",
    to: "appointments",
    Icon: MdOutlineVideoCameraFront,
  },
  { label: "Availability", to: "schedules", Icon: GrSchedules },
  { label: "My Earnings", to: "earnings", Icon: SlWallet },
];

export default function Nav() {
  return (
    <StyledNav>
      <StyleLinks>
        {navLinks.map(({ label, to, Icon }) => (
          <li key={label}>
            <StyleLink to={to}>
              <Icon size={20} />
              {label}
            </StyleLink>
          </li>
        ))}
      </StyleLinks>
    </StyledNav>
  );
}

const StyledNav = styled.nav``;

const StyleLinks = styled.ul`
  display: grid;
  /* align-items: center; */
  list-style: none;
  gap: 1rem;
`;

const StyleLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1.2rem 3.2rem;
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
    width: 0.4rem;
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
