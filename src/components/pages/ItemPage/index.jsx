import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import propTypes from "prop-types";

import Information from "../../Information";
import Header from "../../Header";
import Footer from "../../Footer";
import { apiKey, hash, ts } from "../../../constants/api";
import Loader from "../../Loader";
import Error from "../../Error";

const ItemPage = ({ setId }) => {
  const { id } = useParams();
  const location = useLocation();
  const element = location.pathname.split("/")[1];
  const [item, setItem] = useState(null);
  const [category, setCategory] = useState(element);
  const [error, setError] = useState(null);

  useEffect(() => {
    const base =
      element === "character"
        ? "Character"
        : element === "comic"
        ? "Comic"
        : element === "event"
        ? "Event"
        : "Series";
    const name = item ? item.name || item.title : "Details";
    document.title = `Marvel Universe | ${base} | ${name}`;
  }, [element, item]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/${element}s/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
        );
        const data = await response.json();
        setItem(data.data.results[0]);
      } catch (error) {
        setError("Sorry, this data isn't avaiable");
      }
    };
    fetchItem();
  }, [id]);
  return (
    <div style={{ backgroundColor: "royalblue" }}>
      <Header category={category} setCategory={setCategory} setId={setId} />
      <main>
        {error && <Error errormessage={error} />}
        {!item ? (
          <Loader />
        ) : (
          <Information item={item} id={id} element={element} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ItemPage;

ItemPage.propTypes = {
  setId: propTypes.func,
};
