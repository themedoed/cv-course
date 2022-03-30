import * as React from "react";
import styled from "styled-components";
import Header from "../components/header";
import NavBtn from "../components/nav_btn";

const IndexPage = () => {
  const Page = styled.div`
    font-family: "Inter";
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    max-width: 1336px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  `;

  const NavWrapper = styled.div`
    text-align: center;
    margin-top: 20vh;
  `;

  return (
    <Page>
      <Header />
      <NavWrapper>
        <NavBtn page="/cv" text="Open the CV"/>
      </NavWrapper>
    </Page>
  );
};

export default IndexPage;
