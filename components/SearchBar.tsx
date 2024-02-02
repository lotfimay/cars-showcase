"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit} action="">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
