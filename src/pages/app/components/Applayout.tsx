import styled from "styled-components";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Layout>
        <Header />
        <Aside />
        <Main>
          <Outlet />
        </Main>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  background-color: var(--color-gray-100);
`;
