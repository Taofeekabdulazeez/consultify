import styled from "styled-components";
import SignupForm from "../../features/authentication/components/SignupForm";

const StyledSignup = styled.div`
  width: 500px;
  max-width: 85%;
  margin-inline: auto;
  padding: 24px;
  margin-top: 60px;
  border-radius: 23px;
  background-color: var(--color-gray-50);
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-size: var(--font-size-xxs);
  font-weight: 500;
  color: var(--color-gray-600);
  text-align: center;
  margin-bottom: 30px;
`;

export default function Signup() {
  return (
    <StyledSignup>
      <Heading>Signup with your email</Heading>
      {false && <Text>Please Provide your Signup credentials</Text>}
      <SignupForm />
    </StyledSignup>
  );
}
