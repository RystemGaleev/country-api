import { Search } from "./Search";
import React, { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  gap: 30px;
  padding: 0 20px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 577px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <div>
      <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder={"Filter by Region"}
          isClearable
          isSearchable={false}
          value={region}
          onChange={setRegion}
        />
      </Wrapper>
    </div>
  );
};

export default Controls;
