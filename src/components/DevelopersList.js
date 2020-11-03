import React from "react";
import { useSelector } from "react-redux";

const selectDeveloper = (reduxState) => {
  return {
    numDevelopers: reduxState.developers.length,
  };
};

export default function DevelopersList() {
  const developers = useSelector(selectDeveloper);

  return (
    <div>
      <p>{developers.numDevelopers}</p>
    </div>
  );
}
