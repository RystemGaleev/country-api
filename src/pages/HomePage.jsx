import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { ALL_COUNTRIES } from "../components/Config";
import { useNavigate } from "react-router-dom";

import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const navigate = useNavigate();

  const onSearchHandler = (search, region) => {
    setRegion(region);
    setSearch(search);
  };

  useEffect(() => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCountries(data);
  }, [countries, search, region]);

  useEffect(() => {
    if (!countries.lenght)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Controls onSearch={onSearchHandler} />
      <List>
        {filteredCountries.map((item) => {
          const countryInfo = {
            img: item.flags.png,
            name: item.name,
            info: [
              {
                title: "Population",
                descr: item.population.toLocaleString(),
              },
              {
                title: "Region",
                descr: item.region,
              },
              {
                title: "Capita",
                descr: item.capital,
              },
            ],
          };
          return (
            <Card
              key={item.name}
              onClick={() => navigate(`/country/${item.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
