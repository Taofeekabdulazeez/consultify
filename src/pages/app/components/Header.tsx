import styled from "styled-components";
import { useUser } from "../../../features/user/hooks/useUser";

export default function Header() {
  const { userData } = useUser();

  console.log(userData);

  return (
    <StyledHeader>
      <Flex>
        <PseudoImg>
          <span>{userData?.email?.slice(0, 2)}</span>
        </PseudoImg>
        <Email>{userData?.email}</Email>
      </Flex>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-gray-75);
  padding: 1.2rem;
  /* height: 7rem; */
  font-size: 2rem;
  text-align: center;
`;

const Flex = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  padding-inline: 1.2rem;
`;

const PseudoImg = styled.div`
  height: 5rem;
  aspect-ratio: 1/1;
  background-color: var(--color-primary-tint);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & span {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const Email = styled.p`
  font-size: 1.6rem;
`;
