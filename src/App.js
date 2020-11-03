import "./App.css";
import DevelopersList from "./components/DevelopersList";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDevelopersWithFavorite } from "./store/developers/selectors";
import {
  selectDevelopersFavoritesResources,
  selectLoggedinUser,
} from "./store/selectors";

const selectResources = (state) => {
  return state.resources;
};

const selectDevelopers = (state) => {
  return state.developers;
};

function App() {
  const loggedinUser = useSelector(selectLoggedinUser);

  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);

  const [favoriteId, setFavoriteId] = useState(2);
  const [developerId, setDeveloperId] = useState(3);
  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );

  const favoriteResources = useSelector(
    selectDevelopersFavoritesResources(developerId)
  );

  return (
    <div className="App">
      <p>
        Welcome back, <strong>{loggedinUser.name}</strong>!
      </p>
      <h1>Web development Resources</h1>
      <div className="statistic-container">
        <h3>{developers.numDevelopers}</h3>
        <p>Developers</p>
      </div>
      <div className="statistic-container">
        <h3>{developers.numResources}</h3>
        <p>Resources</p>
      </div>
      <div>
        <h2>
          Who likes{" "}
          <select
            value={favoriteId}
            onChange={(e) => setFavoriteId(parseInt(e.target.value))}
          >
            {resources.map((resource) => {
              return (
                <option key={resource.id} value={resource.id}>
                  {resource.name}
                </option>
              );
            })}
          </select>
          ?
        </h2>
        <ul>
          {developersWithThisFavorite.map((dev) => {
            return <li key={dev.id}>{dev.name}</li>;
          })}
        </ul>
      </div>

      <div>
        <h2>
          What are{" "}
          <select
            value={developerId}
            onChange={(e) => setDeveloperId(parseInt(e.target.value))}
          >
            {developers.map((dev) => {
              return (
                <option key={dev.id} value={dev.id}>
                  {dev.name}
                </option>
              );
            })}
          </select>
          's favorites?
        </h2>
        <ul>
          {favoriteResources.map((resource) => {
            return <li key={resource.id}>{resource.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
