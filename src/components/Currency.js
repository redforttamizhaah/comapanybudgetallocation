import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "../context/AppContext";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { dispatch, currency } = useContext(AppContext);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("event", event.target.value);
    dispatch({
      type: "SET_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div
      className="alert alert-green p-4"
      style={{
        backgroundColor: "green",
        color: "white",
        "&:select": { backgroundColor: "white" },
      }}
    >
      <span>Currency :{currency} </span>
      <select
        value={selectedValue}
        onChange={handleDropdownChange}
        style={{
          backgroundColor: "green",
          color: "white",
          "&:hover": { backgroundColor: "darkgreen" },
        }}
      >
        <option value=""> Choose </option>
        <option value="$"> Doller</option>
        <option value="£"> Pound</option>
        <option value="€"> Euro </option>
        <option value="₹"> Rupee </option>
      </select>
    </div>
  );
};

export default Dropdown;
