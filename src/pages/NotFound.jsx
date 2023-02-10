import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";

const Title = styled.div`
  max-width: 400px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
const Descr = styled.div`
  margin: 0 auto 30px;
  font-size: 80px;
  font-weight: 600;
  text-align: center;
`;
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>The page was not found, please return to the main page</Title>
      <Descr>404</Descr>
      <Button onClick={() => navigate(`/`)} style={{ margin: " 0 auto" }}>
        Home
      </Button>
    </>
  );
};

export default NotFound;
