import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

import Loader from "../Loader";
import { apiKey, ts, hash } from "../../constants/api";
import Error from "../Error";
import {
  SearchPanel,
  SearchTitle,
  SearchForm,
  SearchField,
  SearchButton,
  SearchItem,
  ItemsList,
  SearchLink,
  Icon,
} from "./styles";

const Search = ({ element }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setItems([]);
    setSearchTerm("");
  }, [element]);

  let name = "";
  if (element === "character" || element === "event") {
    name = "name";
  }
  if (element === "comic" || element === "serie") {
    name = "title";
  }

  const url = `https://gateway.marvel.com/v1/public/${element}s?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&orderBy=${name}&${name}StartsWith=${searchTerm}`;

  const handleSearch = async (event) => {
    setItems([]);
    setIsSearching(true);
    event.preventDefault();
    try {
      const response = await fetch(url);
      const data = await response.json();
      const isCharacter = element === "character";
      const allItems = data.data.results.map((x) => {
        return {
          name: isCharacter ? x.name : x.title,
          image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
          id: x.id,
        };
      });
      setItems(allItems);
      setIsSearching(false);
    } catch (error) {
      setError("Sorry, this data isn't avaiable");
      setIsSearching(false);
    }
  };

  return (
    <SearchPanel aria-labelledby="search-title">
      <SearchTitle id="search-title">{`Search for the ${element}s you want to read about`}</SearchTitle>
      <SearchForm onSubmit={handleSearch} role="search">
        <SearchField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          inputProps={{ "aria-label": `Search ${element}s` }}
        />
        <SearchButton
          variant="contained"
          type="submit"
          color="error"
        >{`Search ${element}`}</SearchButton>
      </SearchForm>
      {isSearching && <Loader />}
      <ItemsList>
        {error && <Error errormessage={error} />}
        {items.map((item) => (
          <SearchItem key={item.id}>
            <SearchLink to={`/${element}/${item.id}`}>
              <Icon src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </SearchLink>
          </SearchItem>
        ))}
      </ItemsList>
    </SearchPanel>
  );
};

export default Search;

Search.propTypes = {
  element: propTypes.string,
};
