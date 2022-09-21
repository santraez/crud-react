import React from "react";

const UsersList = ({ users }) => {

  return (

    <div>
      <h1>Users List</h1>
      {
      users.map((user) => (
        <ul key={user.id}>
          <li><p>ID: {user.id}</p></li>
          <li><p>NAME: {user.name}</p></li>
          <li><p>EMAIL: {user.email}</p></li>
        </ul>
      ))
      }
    </div>

  );

};

export default UsersList;