import React from "react";

function FormComponent(props) {
  return (
    <form action="">
      <select
        name="id"
        value={props.id}
        onChange={props.handleChange}
        className="custom-select custom-select-lg mb-3"
      >
        <option value="BL1">Bundesliga</option>
        <option value="BSA">Brasileirão Série A</option>
        <option value="PPL">Primeira Liga</option>
        <option value="PL">Premier League</option>
        <option value="CL">UEFA Champions League</option>
        <option value="FL1">Ligue 1 France</option>
        <option value="SA">Seria A Italy</option>
        <option value="PD">La Liga</option>
      </select>
      <br />
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
