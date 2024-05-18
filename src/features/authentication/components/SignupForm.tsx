import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import ButtonLoader from "../../../pages/app/components/ButtonLoader";
import { useSignup } from "../hooks/useSignup";

const StyledForm = styled.form`
  display: grid;
  gap: 2rem;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border: 0.2rem solid var(--color-gray-100);
  background-color: var(--color-gray-75);
  border-radius: 9px;
  overflow: hidden;
  padding: 0.8rem 1.2rem;

  &:focus-within {
    border-color: var(--color-primary);
  }
`;

const Input = styled.input`
  outline: none;
  border: 0;
  background-color: inherit;
  height: inherit;
  color: var(--color-text);
  font-weight: 500;
  font-size: 1.6rem;
`;

const ButtonLogin = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  font-size: 1.5rem;
  padding: 1.2rem;
  font-weight: 600;
  color: var(--color-primary-tint);
  border-radius: 9px;
  margin-top: 1.8rem;

  &:hover {
    background-color: var(--color-primary-shade);
    cursor: pointer;
  }
`;

const Error = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  /* font-size: var(--font-size-xxxs); */
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  color: #d31510;
`;

function SignupForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const { signup, isLoading } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledForm
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        signup({ email, password });
        if (!email || !password) return;
      }}
      autoComplete="off"
    >
      <Tabs>
        <Tab to="/login">Login</Tab>
        <Tab to="/signup" className="active">
          Signup
        </Tab>
      </Tabs>
      <div>
        <Label>Email address</Label>
        <InputWrapper>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="off"
            disabled={isLoading}
          />
        </InputWrapper>
        {false && (
          <Error>
            <MdErrorOutline size={14} />
          </Error>
        )}
      </div>
      <div>
        <Label>Password</Label>
        <InputWrapper>
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="off"
            type={hidePassword ? "password" : "text"}
          />
          <ButtonToggle
            onClick={() => {
              setHidePassword((show) => !show);
            }}
          >
            {hidePassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </ButtonToggle>
        </InputWrapper>
        {false && (
          <Error>
            <MdErrorOutline size={14} />
          </Error>
        )}
      </div>
      <ButtonLogin>{isLoading ? <ButtonLoader /> : "Signup"}</ButtonLogin>
      <Seperator className="seperator">
        <span>OR</span>
      </Seperator>
      <SocialLinks>
        <li>
          <SocialLink>
            <FaGoogle size={20} />
          </SocialLink>
        </li>
        <li>
          <SocialLink>
            <FaFacebookF size={20} />
          </SocialLink>
        </li>
        <li>
          <SocialLink>
            <FaLinkedinIn size={20} />
          </SocialLink>
        </li>
        <li>
          <SocialLink>
            <FaGithub size={24} />
          </SocialLink>
        </li>
      </SocialLinks>
    </StyledForm>
  );
}

export default SignupForm;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 23px;
  background-color: var(--color-gray-100);
  padding: 0.4rem;
`;

const Tab = styled(Link)`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  border-radius: 23px;
  text-decoration: none;
  color: inherit;
  &.active {
    background-color: var(--color-gray-50);
  }
`;
const Seperator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* margin-top: 2rem; */

  & span {
    padding: 0 1rem;
  }

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 0.1rem solid black;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #eee;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonToggle = styled.span`
  background: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
