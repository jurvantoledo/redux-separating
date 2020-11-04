// src/store/resources/actions.js

export function addResource(name, type, tags, url) {
  return {
    type: "ADD_RESOURCE",
    payload: {
      id: Math.floor(Math.random() * 100),
      name,
      type,
      tags,
      url,
    },
  };
}
