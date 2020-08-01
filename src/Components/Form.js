import React from "react";

function Form(props) {
  return (
    <select
      name="id"
      value={props.item}
      onChange={() => props.handleChange()}
      className="custom-select custom-select-lg mb-3"
    >
      <option value="BSA">Brasileirão Série A</option>
      <option value="PL">Premier League</option>
      <option value="PRT">Primeira Liga</option>
      <option value="CL">UEFA Champions League</option>
      <option value="FL1">Ligue 1 France</option>
      <option value="SA">Seria A Italy</option>
      <option value="PD">La Liga</option>
    </select>
  );
}

export default Form;
