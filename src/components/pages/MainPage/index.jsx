import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

import Dashboard from "../../Dashboard";
import Search from "../../Search";
import Header from "../../Header";
import Footer from "../../Footer";

const MainPage = ({ id, setId }) => {
  const [category, setCategory] = useState(id || "character");

  useEffect(() => {
    const label =
      category === "character"
        ? "Characters"
        : category === "comic"
        ? "Comics"
        : category === "event"
        ? "Events"
        : "Series";
    document.title = `Marvel Universe | ${label}`;
  }, [category]);

  return (
    <>
      <Header setCategory={setCategory} setId={setId} />
      <main>
        <Search element={category} />
        <Dashboard element={category} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;

MainPage.propTypes = {
  id: propTypes.string,
  setId: propTypes.func,
};
