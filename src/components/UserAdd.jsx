import React from "react";

const UserAdd = ({ user, setUser }) => {

  const handleChange = e => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  let { name, email } = user;

  const handleSubmit = e => {

    e.preventDefault();

    // VALIDATE INPUTS
    if (name === '' || email === '') {
      alert("Please fill in all fields");
      return;
    };

    // POST REQUEST
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    };
    fetch("http://localhost:5000/api", requestInit)
    .then((res) => res.text())
    .then((res) => console.log(res));

    // RESET INPUTS
    setUser({
      name: "",
      email: ""
    });

  };
  
  return (

    <div>
      <h1>User Add</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} id="name" name="name" type="text" value={name} placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} id="email" name="email" type="email" value={email} placeholder="Email" />
        <button type="submit">Add</button>
      </form>
    </div>
    
  );
  
};

export default UserAdd;