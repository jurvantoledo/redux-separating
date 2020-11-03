import React from "react";
import { useSelector } from "react-redux";

const selectResources = (reduxState) => {
  return reduxState.resources;
};

export default function ResourcesSection() {
  const resources = useSelector(selectResources);

  return (
    <div>
      {resources.map((resource) => {
        return (
          <div>
            <p>
              <strong>{resource.name}</strong> ({resource.type}) ---- find out
              more at {resource.url}
              <p>{resource.tags}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
