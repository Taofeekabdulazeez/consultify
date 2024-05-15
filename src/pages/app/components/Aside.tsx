import styled from "styled-components";
import Logo from "../../../components/Logo";
import Nav from "./Nav";

export default function Aside() {
  return (
    <StyledAside>
      <Logo />
      <Nav />
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  background-color: var(--color-gray-50);
  padding: 1.2rem;
  grid-row: 1/-1;
`;
