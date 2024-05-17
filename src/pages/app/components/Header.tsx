import styled from "styled-components";
import Logout from "../../../components/Logout";

export default function Header() {
  return (
    <StyledHeader>
      <div>Header</div>
      <Logout />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-gray-75);
  height: 7rem;
  font-size: 2rem;
  text-align: center;
`;
