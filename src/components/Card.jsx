import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: var(--radi);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 24px 20px;
`;

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style-type: none;
  padding: 10px 0;
  font-weight: var(--fw-light);
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 170%;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.descr}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
