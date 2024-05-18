import styled from "styled-components";
import LoginForm from "../../features/authentication/components/LoginForm";

const StyledLogin = styled.div`
  width: 50rem;
  max-width: 85%;
  margin-inline: auto;
  padding: 2.4rem;
  margin-top: 6rem;
  border-radius: 23px;
  background-color: var(--color-gray-50);
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const Text = styled.p`
  font-size: var(--font-size-xxs);
  font-weight: 500;
  color: var(--color-gray-600);
  text-align: center;
  margin-bottom: 3rem;
`;

function Login() {
  return (
    <StyledLogin>
      <Heading>Login to your account</Heading>
      {false && <Text>Please Provide your Login credentials</Text>}
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
