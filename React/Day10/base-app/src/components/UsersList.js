import React from "react";
import useFetch from "../utils/useFetch";

export default function UsersList() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let [data, loading, error] = useFetch(url);
  return (
    <div>
      {data.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}
