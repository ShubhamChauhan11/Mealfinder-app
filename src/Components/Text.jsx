import React, { useState } from "react";
const Text = (props) => {
  console.log(props.item);
  console.log(props.id);
  console.log(props.item[props.id].strMeal);
  let ans = "";
  for (let i = 0; i < props.item.length; i++) {
    if (i == props.id) {
      ans = props.item[i];
    }
  }
  console.log(ans.strInstructions);
  const textstyle = {
    fontSize: "20px",
    padding: "10px"
  };
  const imgstyle = {
    height: "250px",
    width: "250px",
    border: "5px solid white",
    borderRadius: "20%"
  };

  return (
    <>
      <h2 style={{ padding: 0 }}>{props.item[props.id].strMeal}</h2>
      <img style={imgstyle} src={props.item[props.id].strMealThumb} />
      <p style={textstyle}>{ans.strInstructions}</p>
    </>
  );
};
export default Text;
