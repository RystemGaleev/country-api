import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 15px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;
const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;
