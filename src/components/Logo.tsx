import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>Consultify</StyledLogo>;
}

const StyledLogo = styled.div`
  height: 8rem;
  font-size: 2rem;
  text-align: center;
  font-style: italic;
  font-weight: 600;
`;
