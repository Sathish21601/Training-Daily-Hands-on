import React from "react";

export default function UserRow({ user }) {
  return (
    <div>
      <tr>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.ip_address}</td>
      </tr>
    </div>
  );
}
