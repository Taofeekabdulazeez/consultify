import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

const StyledHeader = styled.header`
  background-color: var(--color-gray-75);
  height: 7rem;
  font-size: 2rem;
  text-align: center;
`;
