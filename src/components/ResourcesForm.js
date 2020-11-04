import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addResource } from "../store/resources/actions";

export default function AddResourceForm() {
  const dispatch = useDispatch();

  const [name, set_name] = useState("");
  const [type, set_type] = useState("");
  const [tags, set_tags] = useState("");
  const [url, set_url] = useState("");

  const submit = (event) => {
    event.preventDefault();

    dispatch(addResource(name, type, tags.split(), url));

    set_name("");
    set_type("");
    set_tags("");
    set_url("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new resource</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => set_name(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Type:{" "}
          <select value={type} onChange={(e) => set_type(e.target.value)}>
            <option value="library">library</option>
            <option value="website">website</option>
            <option value="resource">resource</option>
            <option value="tool">tool</option>
            <option value="cheatsheet">cheatsheet</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Tags:{" "}
          <input
            type="text"
            value={tags}
            onChange={(e) => set_tags(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          URL:{" "}
          <input
            type="text"
            value={url}
            onChange={(e) => set_url(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this resource!</button>
      </p>
    </form>
  );
}
