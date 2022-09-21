import React, { useState, useEffect } from "react";
import UserAdd from "./components/UserAdd";
import UsersList from "./components/UsersList";

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  
  useEffect(() => {

    // GET REQUEST
    const getUsers = async () => {
      fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((res) => setUsers(res));
    };
    getUsers();

  }, [user]);

  return (

    <div className="App">
      <UsersList users={users} />
      <UserAdd user={user} setUser={setUser} />
    </div>

  );

};

export default App;