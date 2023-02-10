import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: var(--radi);
  box-shadow: var(--shadow);
  max-width: 100%;
  height: 40px;
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 15px;
  border: none;
  outline: none;
  color: var(--colors-text);
  width: 500px;

  background-color: var(--color-ui-base);
  ::-webkit-search-cancel-button {
    display: none;
  }
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
