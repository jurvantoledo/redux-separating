import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedinUser } from "../store/selectors";
import { toggleFavorite } from "../store/developers/actions";

const selectResources = (reduxState) => {
  return reduxState.resources;
};

export default function ResourcesSection() {
  const dispatch = useDispatch();
  const me = useSelector(selectLoggedinUser);
  const resources = useSelector(selectResources);

  return (
    <div>
      {resources.map((resource) => {
        const toggle = () => {
          dispatch(toggleFavorite(me.id, resource.id));
        };
        return (
          <div>
            <p>
              <button onClick={toggle}>
                {me.favorites.includes(resource.id) ? "♥" : "♡"}
              </button>{" "}
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
