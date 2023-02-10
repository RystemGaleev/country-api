import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { searchByCountry } from "../components/Config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

const Details = () => {
  const { name } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
};

export default Details;
