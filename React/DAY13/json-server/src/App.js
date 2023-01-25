import React from "react";
import Post from "./Post";

export default function ToDosJsonServer() {
  const loadApi = async (url, method, optionBody) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: optionBody || false,
      });
      const data = await response.json();
      console.log("data", data);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const handleCreate = () => {
    loadApi(
      "http://localhost:3004/todos",
      "POST",
      JSON.stringify({ title: "new title", complete: false })
    );
  };

  const handlePut = () => {
    loadApi(
      "http://localhost:3004/todos/2",
      "PUT",
      JSON.stringify({ title: "my current task", complete: false })
    );
  };

  const handlePatch = () => {
    loadApi(
      "http://localhost:3004/todos/2",
      "PATCH",
      JSON.stringify({ complete: true })
    );
  };

  const handleDelete = () => {
    loadApi("http://localhost:3004/todos/1", "DELETE", JSON.stringify({}));
  };

  return (
    <div>
      ToDos
      <button className="border-2 mr-4" onClick={() => handleCreate()}>
        Create
      </button>
      <button className="border-2 mr-4" onClick={() => handlePut()}>
        Put
      </button>
      <button className="border-2 mr-4" onClick={() => handlePatch()}>
        Patch
      </button>
      <button className="border-2 mr-4" onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  );
}
