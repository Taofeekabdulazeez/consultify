import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>Consultify</StyledLogo>;
}

const StyledLogo = styled.div`
  height: 80px;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  font-weight: 600;
`;
