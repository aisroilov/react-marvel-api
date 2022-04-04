import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = ({ search }) => {
  const [text, setText] = useState("");
  let searchText = "";
  let text1;

  const onSearch = (q) => {
    searchText = q;
    // console.log(q);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setText(searchText);
      search(searchText);
      text1 = "";
      //   console.log(searchText);
    }
  };

  return (
    <div className="search-container">
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Find a marvel hero"
          onChange={(e) => onSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button type="submit" variant="primary" onSubmit={handleKeyPress}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
