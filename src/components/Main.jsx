import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.main`
  padding: 20px 0;
  @media (min-width: 767px) {
    padding: 40px 0;
  }
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
