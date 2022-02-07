import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-constrol my-3"
      placeholder="Serach..."
      value={value}
      onChange={(e) => onchange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
