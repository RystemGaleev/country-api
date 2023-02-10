import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "../components/Config";

const Wrapper = styled.section`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 45px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 500px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h2`
  font-size: var(--fw-normal);
  font-size: 30px;
  margin-bottom: 20px;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 170%;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;
  font-display: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 10px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 150%;
  cursor: pointer;
`;

export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subRegion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    navigate,
  } = props;

  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subRegion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top level Domain: </b>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
